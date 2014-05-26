package Dev::Page::directory;
use strict;
use warnings;

use Moose;
use Digest::MD5 'md5_hex';
use File::Copy::Recursive 'rmove', 'rcopy';
use File::Path 'remove_tree';

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
	my $root = $obj->app()->config()->{'page_root'};
	if ($form->{'new_page'})
	{
		my $path = $form->{'path'};
		$path ||= '/';
		$ct->{'input_box'} = $obj->apply('element/new_page.html', {
			'path' => $path,
		});
	}
	elsif ($form->{'page_copy'})
	{
		my $src = $form->{'par'}. $form->{'item'};
		my $item = $form->{'item'};
		if ($form->{'type'} eq 'file')
		{
			$src =~ s/\.njs$//;
			$item =~ s/\.njs$//;
		}
		$ct->{'input_box'} = $obj->apply('element/copy_page.html', {
			'src' => $src,
			'path' => $form->{'dest'},
			'dir' => ($form->{'type'} eq 'dir') ? 'Yes' : 'No',
			'name' => $item,
		});
	}
	elsif ($form->{'select'})
	{
		my @move = ();
		my $type = ($form->{'dir'}) ? 'dir' : 'file';
		if ($form->{'par'} ne '/')
		{
			@move = (
				0, $obj->link(
					'command' => 'page_move',
					'text' => 'Move &darr;',
					'args' => [$type, $form->{'par'}, $form->{'item'}, '/'],
					'opts' => {
						'class' => 'btn btn-primary',
					},
				),
			);
		}
		$ct->{'input_box'} = xml(
			'div', [{'class' => 'row'},
				'div', [{'class' => 'btn-group'},
					@move,
					0, $obj->link(
						'text' => 'Copy &darr;',
						'opts' => {
							'class' => 'btn btn-primary',
						},
						'query' => {
							'page_copy' => 1,
							'type' => $type,
							'par' => $form->{'par'},
							'item' => $form->{'item'},
							'select' => $form->{'select'},
							'dest' => '/',
						},
					),
				],
				'p', [{}],
			],
		);
	}
	my $files = $obj->iterate_dir($root, '/', 0);
	$ct->{'file_table'} = htable(
		'fields' => [
			'Page',
			{
				'data' => 'Command',
				'opts' => {'style' => 'width: 40%;'},
			},
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
	my ($obj, $root, $pdir, $depth) = @_;
	my $form = $obj->form();
	my $sd = $obj->session();
	my $fold = $sd->{'fold'};
	$fold ||= {};
	my $dir = undef;
	unless (-d $root)
	{
		die(qq|Invalid page root directory: '$root'|);
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
		my $item = $f;
		my $phash = md5_hex("$pdir$f");
		my $selected = 0;
		my $hassel = 0;
		my $subdir = undef;
		if ($form->{'select'} eq $phash)
		{
			$selected = 1;
		}
		elsif ($form->{'select'})
		{
			$hassel = 1;
		}
		my @cmds = ();
		my $delpath = $pdir. $f;
		if (-d $path)
		{
			my $cdir = $pdir. $f. '/';
			if ($fold->{$phash}) # open
			{
				$file = xml(
					'a', [{'href' => $obj->url(
						'command' => 'fold',
						'args' => [$phash],
					)},
						'span', [{'class' => 'glyphicon glyphicon-folder-open'}, 0, ''],
						0, '&nbsp;' x 2,
						0, $f,
					],
				);
				$subdir = $obj->iterate_dir($path, $pdir. $item. '/', $depth + 1);
			}
			else
			{
				$file = xml(
					'a', [{'href' => $obj->url(
						'command' => 'fold',
						'args' => [$phash],
					)},
						'span', [{'class' => 'glyphicon glyphicon-folder-close'}, 0, ''],
						0, '&nbsp;' x 2,
						0, $f,
					],
				);
			}
			if ($selected)
			{
				@cmds = (
					0, $obj->link(
						'text' => 'Unselect',
						'opts' => {
							'class' => 'btn btn-default',
						},
					),
				);
			}
			else
			{
				@cmds = (
					0, $obj->link(
						'text' => 'Select',
						'query' => {
							'dir' => 1,
							'select' => $phash,
							'item' => $item,
							'par' => $pdir,
						},
						'opts' => {
							'class' => 'btn btn-default',
						},
					),
					0, xml(
						'a', [{
							'class' => 'btn btn-default',
							'onclick' => qq|return show_delete('dir', '$delpath');|,
						}, 0, 'Delete'],
					),
				);
				my $cursel = '';
				my $type = 'file';
				if ($hassel && $form->{'dir'})
				{
					$cursel = $form->{'par'}. $form->{'item'};
					$type = 'dir';
				}
				if ($hassel)
				{
					# don't move a dir within itself
					if (
						$form->{'par'} ne $cdir &&
						(! ($form->{'dir'} && $cdir =~ /^$cursel/))
					) {
						push @cmds, (
							0, $obj->link(
								'command' => 'page_move',
								'text' => 'Move &rarr;',
								'args' => [$type, $form->{'par'}, $form->{'item'}, $cdir],
								'opts' => {
									'class' => 'btn btn-default',
								},
							),
						);
					}
					push @cmds, (
						0, $obj->link(
							'text' => 'Copy &rarr;',
							'query' => {
								'page_copy' => 1,
								'type' => $type,
								'par' => $form->{'par'},
								'item' => $form->{'item'},
								'dest' => $cdir,
								'select' => $form->{'select'},
							},
							'opts' => {
								'class' => 'btn btn-default',
							},
						),
					);
				}
				else
				{
					push @cmds, (
						0, $obj->link(
							'text' => 'New &rarr;',
							'query' => {
								'new_page' => 1,
								'path' => $cdir,
							},
							'opts' => {
								'class' => 'btn btn-default',
							},
						),
					);
				}
			}
		}
		elsif ($f =~ s/\.njs$//)
		{
			if ($f eq '_index')
			{
				$f = xml('em', [{}, 0, 'index']);
			}
			$file = xml(
				'a', [{'href' => $obj->url(
					'path' => '/page',
					'query' => {
						'path' => $delpath,
					},
				)},
					'span', [{'class' => 'glyphicon glyphicon-file'}, 0, ''],
					0, '&nbsp;' x 2,
					0, $f,
				],
			);
			if ($selected)
			{
				@cmds = (
					0, $obj->link(
						'text' => 'Unselect',
						'opts' => {
							'class' => 'btn btn-default',
						},
					),
				);
			}
			else
			{
				$delpath =~ s/\.njs$//;
				@cmds = (
					0, $obj->link(
						'text' => 'Select',
						'query' => {
							'select' => $phash,
							'item' => $item,
							'par' => $pdir,
						},
						'opts' => {
							'class' => 'btn btn-default',
						},
					),
					0, xml(
						'a', [{
							'class' => 'btn btn-default',
							'onclick' => qq|return show_delete('file', '$delpath');|,
						}, 0, 'Delete'],
					),
				);
			}
		}
		else
		{
			next; # not a .njs file
		}
		if ($depth)
		{
			$file = xml(
				'div', [{'style' => 'padding-left: '. (20 * $depth). 'px;'},
					0, $file,
				],
			);
		}
		my @row = (
			$file,
			xml(
				'div', [{'class' => 'btn-group btn-group-xs'},
					@cmds,
				],
			),
		);
		if ($selected)
		{
			@row = map {
				{
					'data' => $_,
					'opts' => {
						'style' => 'background-color: #DDFFDD;',
					},
				}
			} @row;
		}
		push @files, \@row;
		if (defined $subdir)
		{
			push @files, @$subdir;
		}
	}
	return \@files;
}

sub page_new
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-zA-Z0-9_-',
	);
	my $name = $data->{'page'};
	unless (length($name))
	{
		return;
	}
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = $ck->error();
		return;
	}
	my $root = $obj->app()->config()->{'page_root'};
	my $fp = $root. $data->{'path'}. $name;
	unless ($data->{'dir'} eq 'on')
	{
		$fp .= '.njs';
	}
	if (-e $fp)
	{
		$ct->{'error'} = 'A file or directory already exists with the same name.';
		return;
	}
	if ($data->{'dir'} eq 'on')
	{
		unless (mkdir($fp))
		{
			die(qq|Unable to create directory '$fp': $!|);
		}
	}
	else
	{
		my $f = undef;
		unless (open($f, '>', $fp))
		{
			die(qq|Unable to write file '$fp': $!|);
		}
		print $f "{}\n";
		close($f);
	}
	unless ($data->{'path'} eq '/')
	{
		$data->{'path'} =~ s/\/$//;
		my $phash = md5_hex($data->{'path'});
		my $sd = $obj->session();
		$sd->{'fold'} ||= {};
		$sd->{'fold'}->{$phash} = 1;
		$obj->session_write();
	}
}

sub fold
{
	my ($obj, $data, $args) = @_;
	my $phash = $args->[0];
	my $sd = $obj->session();
	$sd->{'fold'} ||= {};
	if (exists $sd->{'fold'}->{$phash})
	{
		delete $sd->{'fold'}->{$phash};
	}
	else
	{
		$sd->{'fold'}->{$phash} = 1;
	}
	$obj->session_write();
}

sub page_move
{
	my ($obj, $data, $args) = @_;
	my $type = shift @$args;
	my $par = shift @$args;
	my $item = shift @$args;
	my $dest = shift @$args;
	if ($type eq 'dir')
	{
		my $cursel = $par. $item;
		if ($dest =~ /^$cursel/)
		{
			$obj->content()->{'error'} = 'Attempted to move directory within itself.';
			return;
		}
	}
	my $root = $obj->app()->config()->{'page_root'};
	my $srcpath = $root. $par. $item;
	my $destpath = $root. $dest. $item; # check with .njs (if file)
	if (-e $destpath)
	{
		$obj->content()->{'error'} = 'A file or directory already exists with the same name.';
		return;
	}
	if ($item =~ s/\.njs$//) # check without .njs
	{
		if (-e $root. $dest. $item)
		{
			$obj->content()->{'error'} = 'A file or directory already exists with the same name.';
			return;
		}
	}
	unless (rmove($srcpath, $destpath))
	{
		die(qq|Unable to move '$srcpath' to '$destpath': $!|);
	}
}

sub page_copy
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $type = shift @$args;
	my $par = shift @$args;
	my $item = shift @$args;
	my $dest = shift @$args;
	if ($type eq 'dir')
	{
		my $cursel = $par. $item;
		if ($dest =~ /^$cursel/)
		{
			$ct->{'error'} = 'Attempted to copy directory within itself.';
			return;
		}
	}
	my $root = $obj->app()->config()->{'page_root'};
	my $srcpath = $root. $par. $item;
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-zA-Z0-9_-',
	);
	my $name = $data->{'page'};
	unless (length($name))
	{
		return;
	}
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = $ck->error();
		return;
	}
	my $destpath = $root. $dest. $name; # check without .njs
	if (-e $destpath)
	{
		$ct->{'error'} = 'A file or directory already exists with the same name.';
		return;
	}
	if ($type eq 'file')
	{
		$name .= '.njs';
	}
	$destpath = $root. $dest. $name; # check with .njs
	if (-e $destpath)
	{
		$ct->{'error'} = 'A file or directory already exists with the same name.';
		return;
	}
	unless (rcopy($srcpath, $destpath))
	{
		die(qq|Unable to move '$srcpath' to '$destpath': $!|);
	}
}

sub page_delete
{
	my ($obj, $data, $args) = @_;
	my $del = $data->{'item'};
	my $type = $data->{'type'};
	my $root = $obj->app()->config()->{'page_root'};
	my $ct = $obj->content();
	if ($type eq 'file')
	{
		$del .= '.njs';
		my $path = $root. $del;
		unless (-e $path)
		{
			$ct->{'error'} = 'File does not exist.';
			return;
		}
		unless (unlink($path))
		{
			die(qq|Unable to remove file: '$path': $!|);
		}
	}
	elsif ($type eq 'dir')
	{
		my $err = undef;
		my $path = $root. $del;
		unless (-d $path)
		{
			$ct->{'error'} = 'Directory does not exist.';
			return;
		}
		remove_tree($path, {'error' => \$err});
		if (scalar @$err)
		{
			my $msg = '';
			foreach my $diag (@$err)
			{
				if (length($msg))
				{
					$msg .= "\n";
				}
				my ($file, $message) = %$diag;
				if ($file eq '')
				{
					$msg .= "remove_tree error: $message";
				}
				else
				{
					$msg .= "remove_tree error for file '$file': $message";
				}
			}
			die($msg);
		}
	}
}

1;

