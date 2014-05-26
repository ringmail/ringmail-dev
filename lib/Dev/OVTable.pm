package Dev::OVTable::Column;
use strict;
use warnings;

use Moose;

no warnings 'uninitialized';

has 'overview' => (
	'is' => 'rw',
	'isa' => 'Object',
	'weak_ref' => 1,
	'required' => 1,
);

has 'table' => (
	'is' => 'rw',
	'isa' => 'Str',
	'required' => 1,
);

has 'column' => (
	'is' => 'rw',
	'isa' => 'Str',
	'required' => 1,
);

has 'key' => (
	'is' => 'rw',
	'isa' => 'Str',
	'required' => 1,
);

1;

package Dev::OVTable;
use strict;
use warnings;

use Moose;
use JSON::XS;
use Data::Dumper;

use Note::SQL::Table;
use Note::SQL::Database;
use Note::Param;

no warnings 'uninitialized';

has 'primary_table' => (
	'is' => 'rw',
	'isa' => 'Str',
	'required' => 1,
);

has 'schema_tables' => (
	'is' => 'rw',
	'isa' => 'HashRef',
	'required' => 1,
);

has 'schema_links' => (
	'is' => 'rw',
	'isa' => 'HashRef',
	'required' => 1,
);

has 'column_keys' => (
	'is' => 'rw',
	'isa' => 'HashRef[Dev::OVTable::Column]',
	'default' => sub { return {}; },
);

has 'database' => (
	'is' => 'rw',
	'isa' => 'Note::SQL::Database',
);

sub set_columns
{
	my ($obj, @cols) = @_;
	my @columns = ();
	my %column_keys = ();
	foreach my $c (@cols)
	{
		my $cobj = new Dev::OVTable::Column({
			%$c,
			'overview' => $obj,
		});
		$column_keys{$cobj->key()} = $cobj;
	}
	$obj->column_keys(\%column_keys);
}

sub get
{
	my ($obj, $param) = get_param(@_);
	my $sel = $param->{'select'};
	my $colkeys = $obj->column_keys();
	my $schlinks = $obj->schema_links();
	#my $schtables = $obj->schema_tables();
	my $ptable = $obj->primary_table();
	my %tables_left = (
		$ptable => [0],
	);
	#my %tables_main = ($ptable => 0);
	my $table_count = 0;
	my @select = ();
	foreach my $k (@$sel)
	{
		my $col = $colkeys->{$k};
		my $tbl = $col->table();
		my $tcol = $col->column();
		if ($tbl eq $ptable)
		{
			push @select, "t0.$tcol AS $k";
			next;
		}
		elsif (! exists $tables_left{$tbl})
		{
			$table_count++;
			my $links = $schlinks->{$tbl};
			my $parent = $links->{'parent'};
			my $pfield = $links->{'parent_field'};
			if (! exists $tables_left{$parent})
			{
				$table_count++;
				$tables_left{$parent} = [$table_count];
			}
			my $pcount = $tables_left{$parent}->[0];
			$tables_left{$tbl} = [$table_count, "t$table_count.$pfield=t$pcount.id"];
		}
		my $tblpos = $tables_left{$tbl}->[0];
		push @select, "t$tblpos.$tcol AS $k";
	}
	my %join = ();
	if (scalar keys %tables_left)
	{
		my @leftjoin = ();
		foreach my $lk (sort keys %tables_left)
		{
			next if ($lk eq $ptable);
			my $lv = $tables_left{$lk};
			push @leftjoin, ["$lk AS t$lv->[0]", $lv->[1]];
		}
		$join{'join_left'} = \@leftjoin;
	}
	my $db = $obj->database();
	my $mainq = $db->table($ptable)->get(
		'hash' => 1,
		'table' => "$ptable AS t0",
		'select' => \@select,
		#'order' => 't0.id asc limit 10 offset 0',
		'order' => 'coverage_requested desc, t0.id asc limit 10 offset 0',
		'where' => {
			'coverage_requested' => ['is not', undef],
		},
		%join,
	);
	return $mainq;
}

1;

