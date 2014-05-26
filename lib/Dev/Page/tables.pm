package Dev::Page::tables;
use strict;
use warnings;

use Moose;
use JSON::XS;

use Note::Param;
use Note::HTML 'htable', 'vtable';
use Note::XML 'xml';
use Note::Check;

extends 'Dev::Page::user';
no warnings 'uninitialized';

sub load
{
	my ($obj, $param) = get_param(@_);
	my $val = $obj->value();
	my $ct = $obj->content();
	my $form = $obj->form();
	my $root = $obj->app()->config()->{'database_root'};
	if ($form->{'new_table'})
	{
		$ct->{'input_box'} = $obj->apply('element/new_table.html', {
			'table_name' => $form->{'table_name'},
		});
	}
	my $db = $form->{'db'};
	unless (length($db) && $db !~ /^\./)
	{
		$obj->redirect('/databases');
	}
	my $path = "$root/$db";
	unless (-d $path)
	{
		$obj->redirect('/databases');
	}
	my $files = $obj->iterate_dir($path);
	$ct->{'table_list'} = htable(
		'fields' => [
			'Table',
		],
		'data' => $files,
		'opts' => {
			'class' => 'table table-condensed table-bordered table-striped',
		},
	);
	return $obj->SUPER::load($param);
}

sub iterate_dir
{
	my ($obj, $root) = @_;
	my $form = $obj->form();
	my $dir = undef;
	unless (-d $root)
	{
		die(qq|Invalid table root directory: '$root'|);
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
		my $file = '';
		my $path = "$root/$f";
		my $item = $f;
		$item =~ s/\.njs$//;
		unless (-d $path)
		{
			$file = xml(
				'a', [{'href' => $obj->url(
					'path' => '/table',
					'query' => {
						'db' => $form->{'db'},
						'table' => $item,
					},
				)},
					'span', [{'class' => 'glyphicon glyphicon-file'}, 0, ''],
					0, '&nbsp;' x 2,
					0, $item,
				],
			);
			my @row = (
				$file,
			);
			push @files, \@row;
		}
	}
	return \@files;
}

sub table_new
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $form = $obj->form();
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_',
	);
	my $name = $data->{'table'};
	unless (length($name))
	{
		return;
	}
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = $ck->error();
		return;
	}
	my $root = $obj->app()->config()->{'database_root'};
	my $db = $form->{'db'};
	unless (length($db) && $db !~ /^\./)
	{
		$obj->redirect('/databases');
	}
	my $path = "$root/$db";
	my $fp = "$path/$name.njs";
	if (-e $fp)
	{
		$ct->{'error'} = 'A table already exists with the same name.';
		return;
	}
	my $f = undef;
	unless (open($f, '>', $fp))
	{
		die(qq|Unable to write file '$fp': $!|);
	}
	my $start = {
		'primary_key' => {
			'name' => 'id', # always 'id'
			'type' => 'record', # always 'record'
			'mode' => 'auto_inc', # 'auto_inc' or 'sequence'
		},
		'columns' => {},
		'index' => {},
	};
	print $f JSON::XS->new()->utf8()->pretty()->canonical()->encode($start);
	close($f);
}

1;

