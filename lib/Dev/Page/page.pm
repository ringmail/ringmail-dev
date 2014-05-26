package Dev::Page::page;
use strict;
use warnings;

use Moose;
use JSON::XS 'decode_json';
use HTML::Entities 'encode_entities';

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
	my $page = $form->{'path'};
	my $fp = $root. $page;
	unless (-e $fp)
	{
		$obj->redirect('/');
	}
	my $pgdata = $obj->value()->{'page'};
	$pgdata ||= $obj->page_load($page);
	$page =~ s/\.njs$//;
	$ct->{'page_path'} = encode_entities($page);
	my @pgtable = ();
	foreach my $k (qw/
		template
		class
		command
		init
	/) {
		my @row = ();
		push @row, xml(
			'strong', [{}, 0, $k],
		);
		my $vals = '';
		if ($k eq 'template' || $k eq 'class')
		{
			$pgdata->{$k} ||= '';
			$vals = $obj->field(
				'command' => 'page_update',
				'name' => $k,
				'type' => 'text',
				'value' => $pgdata->{$k},
				'opts' => {
					'class' => 'form-control',
					'style' => 'width: 250px;',
				},
			);
		}
		elsif ($k eq 'command')
		{
			my $cmds = $pgdata->{$k};
			$cmds ||= {};
			my @cmdtable = ();
			my $i = 0;
			foreach my $ck (sort keys %$cmds)
			{
				my @cmdrow = ();
				push @cmdrow, $obj->field(
					'command' => 'page_update',
					'name' => 'cmd_'. $i,
					'type' => 'text',
					'value' => $ck,
					'opts' => {
						'class' => 'form-control input-sm',
						'style' => 'width: 140px;',
					},
				);
				push @cmdrow, $obj->field(
					'command' => 'page_update',
					'name' => 'sub_'. $i,
					'type' => 'text',
					'value' => $cmds->{$ck},
					'opts' => {
						'class' => 'form-control input-sm',
						'style' => 'width: 140px;',
					},
				);
				push @cmdrow, $obj->link(
					'command' => 'page_delete',
					'text' => xml(
						'span', [{'class' => 'glyphicon glyphicon-remove'}, 0, ''],
					),
					'args' => ['command', $ck],
					'query' => {
						'path' => $form->{'path'},
					},
					'opts' => {
						'class' => 'btn btn-danger btn-xs',
					},
				);
				$i++;
				push @cmdtable, \@cmdrow;
			}
			my @cmdrow = ();
			push @cmdrow, $obj->field(
				'command' => 'page_update',
				'name' => 'cmd_'. $i,
				'type' => 'text',
				'opts' => {
					'class' => 'form-control input-sm',
					'style' => 'width: 140px;',
				},
			);
			push @cmdrow, $obj->field(
				'command' => 'page_update',
				'name' => 'sub_'. $i,
				'type' => 'text',
				'opts' => {
					'class' => 'form-control input-sm',
					'style' => 'width: 140px;',
				},
			);
			push @cmdrow, '&nbsp;';
			push @cmdtable, \@cmdrow;
			$vals = htable(
				'fields' => [
					{
						'data' => 'Command',
						'opts' => {'style' => 'width: 45%;'},
					},
					{
						'data' => 'Method',
						'opts' => {'style' => 'width: 45%;'},
					},
					'&nbsp;',
				],
				'data' => \@cmdtable,
				'opts' => {
					'class' => 'table table-condensed table-bordered table-striped',
				},
			);
		}
		elsif ($k eq 'init')
		{
			my $init = $pgdata->{$k};
			$init ||= [];
			my @itable = ();
			my $i = 0;
			foreach my $im (@$init)
			{
				my @irow = ();
				push @irow, $obj->field(
					'command' => 'page_update',
					'name' => 'init_'. $i,
					'type' => 'text',
					'value' => $im,
					'opts' => {
						'class' => 'form-control input-sm',
						'style' => 'width: 140px;',
					},
				);
				push @irow, $obj->link(
					'command' => 'page_delete',
					'text' => xml(
						'span', [{'class' => 'glyphicon glyphicon-remove'}, 0, ''],
					),
					'args' => ['init', $i],
					'query' => {
						'path' => $form->{'path'},
					},
					'opts' => {
						'class' => 'btn btn-danger btn-xs',
					},
				);
				$i++;
				push @itable, \@irow;
			}
			my @irow = ();
			push @irow, $obj->field(
				'command' => 'page_update',
				'name' => 'init_'. $i,
				'type' => 'text',
				'opts' => {
					'class' => 'form-control input-sm',
					'style' => 'width: 140px;',
				},
			);
			push @itable, \@irow;
			$vals = htable(
				'fields' => [
					'Method',
					'&nbsp;',
				],
				'data' => \@itable,
				'opts' => {
					'class' => 'table table-condensed table-bordered table-striped',
					'style' => 'width: 200px;',
				},
			);
		}
		push @row, $vals;
		push @pgtable, \@row;
	}
	$ct->{'page_table'} = htable(
		'fields' => [
			'Field',
			{
				'data' => 'Values',
				'opts' => {'style' => 'width: 80%;'},
			},
		],
		'data' => \@pgtable,
		'opts' => {
			'class' => 'table table-bordered table-striped',
		},
	);
	return $obj->SUPER::load($param);
}

sub page_load
{
	my ($obj, $path) = @_;
	my $root = $obj->app()->config()->{'page_root'};
	my $fp = $root. $path;
	my $fh = undef;
	unless (open($fh, '<', $fp))
	{
		die(qq|Unable to open file '$fp': $!|);
	}
	local $/;
	$/ = undef;
	my $fdata = <$fh>;
	close($fh);
	my $pgdata = decode_json($fdata);
	$obj->value()->{'page'} = $pgdata;
	return $pgdata;
}

sub page_save
{
	my ($obj, $path, $data) = @_;
	$obj->value()->{'page'} = $data;
	my $root = $obj->app()->config()->{'page_root'};
	my $fp = $root. $path;
	my $fh = undef;
	unless (open($fh, '>', $fp))
	{
		die(qq|Unable to open file '$fp': $!|);
	}
	print $fh JSON::XS->new()->utf8()->pretty()->canonical()->encode($data);
	close($fh);
	return $data;
}

sub page_update
{
	my ($obj, $data, $args) = @_;
	my $cur = $obj->page_load($obj->form()->{'path'});
	foreach my $k (qw/class template/)
	{
		if (length $data->{$k})
		{
			$cur->{$k} = $data->{$k};
		}
		else
		{
			delete $cur->{$k};
		}
	}
	my @init = ();
	my %cmd = ();
	foreach my $ks (sort keys %$data)
	{
		if ($ks =~ /^init_\d+$/)
		{
			if (length($data->{$ks}))
			{
				push @init, $data->{$ks};
			}
		}
		elsif ($ks =~ /^cmd_(\d+)$/)
		{
			my $m = $data->{'sub_'. $1};
			if (length($data->{$ks}))
			{
				if (length($m))
				{
					$cmd{$data->{$ks}} = $m;
				}
			}
		}
	}
	if (scalar @init)
	{
		$cur->{'init'} = \@init;
	}
	else
	{
		delete $cur->{'init'};
	}
	if (scalar keys %cmd)
	{
		$cur->{'command'} = \%cmd;
	}
	else
	{
		delete $cur->{'command'};
	}
	$obj->page_save($obj->form()->{'path'}, $cur);
}

sub page_delete
{
	my ($obj, $data, $args) = @_;
	my $cur = $obj->page_load($obj->form()->{'path'});
	my $item = $args->[0];
	my $k = $args->[1];
	if ($item eq 'command')
	{
		delete $cur->{'command'}->{$k};
	}
	elsif ($item eq 'init')
	{
		my @init = ();
		foreach my $i (0..$#{$cur->{'init'}})
		{
			unless ($i eq $k)
			{
				push @init, $cur->{'init'}->[$i];
			}
		}
		$cur->{'init'} = \@init;
	}
	$obj->page_save($obj->form()->{'path'}, $cur);
}

1;

