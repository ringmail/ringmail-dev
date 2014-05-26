package Dev::Page::database;
use strict;
use warnings;

use Moose;

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
	my $files = $obj->iterate_dir($root);
	$ct->{'db_list'} = htable(
		'fields' => [
			'Database',
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
		die(qq|Invalid database root directory: '$root'|);
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
		my $file = '';
		my $path = "$root/$f";
		if (-d $path)
		{
			$file = xml(
				'a', [{'href' => $obj->url(
					'path' => '/tables',
					'query' => {
						'db' => $f,
					},
				)},
					'span', [{'class' => 'glyphicon glyphicon-folder-close'}, 0, ''],
					0, '&nbsp;' x 2,
					0, $f,
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

1;

