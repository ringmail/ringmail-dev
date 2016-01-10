package Dev::DBManager;
use strict;
use warnings;

use Moose;
use JSON::XS;
use Data::Dumper;
use SQL::Translator;
use SQL::Translator::Diff;
use SQL::Translator::Parser::MySQL;

use Note::App;
use Note::SQL::Database;
use Note::SQL::Schema;

no warnings 'uninitialized';

has 'app' => (
	'is' => 'rw',
	'isa' => 'Note::App',
	'required' => 1,
);

has 'name' => (
	'is' => 'rw',
	'isa' => 'Str',
	'required' => 1,
);

has 'root' => (
	'is' => 'rw',
	'isa' => 'Str',
	'lazy' => 1,
	'default' => sub {
		my ($obj) = @_;
		return $obj->app()->config()->{'database_root'}. '/'. $obj->name();
	},
);

has 'database' => (
	'is' => 'rw',
	'isa' => 'Note::SQL::Database',
);

sub iterate_dir
{
	my ($obj, $root) = @_;
	$root ||= $obj->root();
	my $dir = undef;
	unless (-d $root)
	{
		die(qq|Invalid database directory: '$root'|);
	}
	unless (opendir($dir, $root))
	{
		die(qq|Unable to open directory '$root': $!|);
	}
	my @items = readdir($dir);
	closedir($dir);
	my @files = ();
	foreach my $f (sort @items)
	{
		next if ($f =~ /^\./);
		next unless ($f =~ /\.njs$/);
		my $path = "$root/$f";
		next if (-d $path);
		$f =~ s/\.njs$//;
		push @files, [$f, $path];
	}
	return \@files;
}

sub json_load
{
	my ($obj, $fp) = @_;
	my $fh = undef;
	unless (open($fh, '<', $fp))
	{
		die(qq|Unable to open file '$fp': $!|);
	}
	local $/;
	$/ = undef;
	my $fdata = <$fh>;
	close($fh);
	my $data = decode_json($fdata);
	return $data;
}

sub json_save
{
	my ($obj, $fp, $data) = @_;
	my $fh = undef;
	unless (open($fh, '>', $fp))
	{
		die(qq|Unable to open file '$fp': $!|);
	}
	print $fh JSON::XS->new()->utf8()->pretty()->canonical()->encode($data);
	close($fh);
	return $data;
}

sub db_show_create
{
	my ($obj, $table) = @_;
	my $db = $obj->database();
	my $sql = "SHOW CREATE TABLE `$table`";
	my $q;
	eval {
		$q = $db->query($sql);
	};
	if ($@)
	{
		my $err = $@;
		if ($err =~ /DBD::mysql::st execute failed: Table '.*?' doesn't exist/)
		{
			return undef;
		}
		else
		{
			die($@);
		}
	}
	if (scalar (@$q))
	{
		return $q->[0]->[1];
	}
	return undef;
}

sub db_create_table
{
	my ($obj, $sql) = @_;
	my $db = $obj->database();
	eval {
		$db->do($sql);
	};
	if ($@)
	{
		die("SQL Create Table Failed For:\n$sql\nDBI Error: $@");
	}
}

sub build_sql_tables
{
	my ($obj) = @_;
	my $tables = $obj->iterate_dir();
	my @res = ();
	my $diffs = '';
	foreach my $t (@$tables)
	{
		my $tdata = $obj->json_load($t->[1]);
		my $tname = $t->[0];
		my $schema;
		my $sql = $obj->table_sql($tname, $tdata, \$schema);
		my $current = $obj->db_show_create($tname);
		if (defined $current) # compare schemas
		{
			my $diff = $obj->table_diff($current, $sql, $tname);
			if (defined $diff)
			{
				print "Updated: $tname\n";
				$diffs .= $diff;
			}
			else
			{
				print "Exists: $tname\n";
			}
			#print "Diff: $diff\n" if (defined $diff);
		}
		else # no table, need to create
		{
			print "Create: $tname\n";
			#$obj->db_create_table($sql);
			$diffs .= $sql. "\n";
		}
		push @res, $sql;
	}
	if (length($diffs))
	{
		print "Diffs:\n$diffs";
	}
	return \@res;
}

sub build_sql_links
{
	my ($obj) = @_;
	my $tables = $obj->iterate_dir();
	my %tlinks = ();
	foreach my $t (@$tables)
	{
		my $tdata = $obj->json_load($t->[1]);
		my $tname = $t->[0];
		foreach my $k (sort keys %{$tdata->{'columns'}})
		{
			my $coldata = $tdata->{'columns'}->{$k};
			if ($coldata->{'type'} eq 'record')
			{
				my $ft = $coldata->{'table'};
				my $info = '';
				if ($coldata->{'parent'})
				{
					$info .= ' Parent';
					$tlinks{$tname} ||= {};
					$tlinks{$tname}->{'parent'} = $coldata->{'table'};
					$tlinks{$tname}->{'parent_field'} = $k;
					if (defined $coldata->{'max_cardinality'})
					{
						$tlinks{$tname}->{'cardinality'} = $coldata->{'max_cardinality'};
					}
					$tlinks{$coldata->{'table'}} ||= {};
					$tlinks{$coldata->{'table'}}->{'next'}->{$tname} = 1;
				}
				if ($coldata->{'max_cardinality'} == 1)
				{
					$info .= ' 1:1';
				}
				#print "$tname.$k => $ft.id$info\n";
				#print Dumper($coldata);
			}
		}
		#print "$tname ". Dumper($tdata);
	}
	my $pariter;
	$pariter = sub {
		my ($par, $phash, $ptable) = @_;
		if (exists $phash->{$ptable})
		{
			die(qq|Cycle in table heirarchy at table: '$ptable'|);
		}
		push @$par, $ptable;
		$phash->{$ptable} = $ptable;
		my $ntd = $tlinks{$ptable};
		if ($ntd->{'parent'})
		{
			$pariter->($par, $phash, $ntd->{'parent'});
		}
	};
	foreach my $k (sort keys %tlinks)
	{
		my $td = $tlinks{$k};
		if ($td->{'parent'})
		{
			my @par = ();
			my %phash = ();
			$pariter->(\@par, \%phash, $td->{'parent'});
			#$td->{'parents'} = \@par;
		}
	}
	#print Dumper(\%tlinks);
	return \%tlinks;
}

1;

