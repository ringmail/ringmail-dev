package Dev::Page::table;
use strict;
use warnings;

use Moose;
use JSON::XS 'decode_json';
use HTML::Entities 'encode_entities';
use SQL::Translator;

use Note::Param;
use Note::HTML 'htable', 'vtable';
use Note::XML 'xml';
use Note::Check;
use Note::SQL::Schema;

use Dev::DBManager;

extends 'Dev::Page::user';
no warnings 'uninitialized';

use vars qw(@field_type);

our @field_type = (
	'record',
	'text',
	'binary',
	'boolean',
	'integer',
	'float',
	'currency',
	'datetime',
	'date',
);

has 'schema' => (
	'is' => 'rw',
	'isa' => 'Note::SQL::Schema',
);

sub load
{
	my ($obj, $param) = get_param(@_);
	my $val = $obj->value();
	my $ct = $obj->content();
	my $form = $obj->form();
	my $tdata = $obj->value()->{'data'};
	$tdata ||= $obj->table_load();
	#::_log($tdata);
	$obj->value()->{'type_select'} = [map {[ucfirst($_), $_]} @field_type];
	if ($form->{'new_col'} eq '1')
	{
		$ct->{'input_box'} = $obj->apply('element/new_column.html', {});
	}
	elsif ($form->{'new_col'} eq '2')
	{
		$ct->{'input_box'} = $obj->apply('element/new_column2.html', {});
	}
	elsif ($form->{'new_index'})
	{
		$ct->{'input_index'} = $obj->apply('element/new_index.html', {});
	}
	elsif ($form->{'new_constraint'})
	{
		$ct->{'input_constraint'} = $obj->apply('element/new_constraint.html', {});
	}
	if (length ($form->{'edit'}))
	{
		my $edk = $form->{'edit'};
		if (exists $tdata->{'columns'}->{$edk})
		{
			my $edit = $tdata->{'columns'}->{$edk};
			$ct->{'input_box'} = $obj->apply('element/edit_column.html', $edit);
		}
	}
	elsif ($form->{'edit_update'})
	{
		my $edk = $form->{'edit_update'};
		if (exists $tdata->{'columns'}->{$edk})
		{
			my $edit = $tdata->{'columns'}->{$edk};
			if ($edit->{'type'} eq 'text' || $edit->{'type'} eq 'binary')
			{
				if ($edit->{'length'} =~ /^\d+$/)
				{
					$edit->{'length_specify'} = $edit->{'length'};
					$edit->{'length'} = 'specify';
				}
			}
			$ct->{'input_box'} = $obj->apply('element/edit_column2.html', {
				'edit_update' => $edk,
				'column' => $edit,
			});
		}
	}
	elsif ($form->{'edit_index'})
	{
		my $ik = $form->{'edit_index'};
		if (exists $tdata->{'index'}->{$ik})
		{
			my $idata = $tdata->{'index'}->{$ik};
			$ct->{'input_index'} = $obj->apply('element/edit_index.html', {
				'name' => $ik,
				'type' => $idata->{'type'},
				'columns' => join(', ', @{$idata->{'columns'}}),
			});
		}
	}
	elsif ($form->{'edit_constraint'})
	{
		my $ik = $form->{'edit_constraint'};
		if (exists $tdata->{'constraint'}->{$ik})
		{
			my $idata = $tdata->{'constraint'}->{$ik};
			$ct->{'input_constraint'} = $obj->apply('element/edit_constraint.html', {
				'name' => $ik,
				'type' => $idata->{'type'},
				'columns' => join(', ', @{$idata->{'columns'}}),
				'reference_table' => $idata->{'reference_table'},
				'reference_columns' => $idata->{'reference_columns'},
				'on_update' => $idata->{'on_update'},
				'on_delete' => $idata->{'on_delete'},
			});
		}
	}
	my @table = ();
	my $pk = $tdata->{'primary_key'};
	my @pkrow = ();
	push @pkrow, $pk->{'name'};
	my $idtype;
	if ($pk->{'mode'} eq 'auto_inc')
	{
		$idtype = 'Auto Increment';
	}
	elsif ($pk->{'mode'} eq 'sequence')
	{
		$idtype = 'Sequence';
	}
	push @pkrow, $idtype;
	push @pkrow, 'No';
	push @pkrow, '&nbsp;';
	push @pkrow, '&nbsp;';
	my @cmds = ();
	push @cmds, (
		0, $obj->link(
			'text' => 'Edit',
			'opts' => {
				'class' => 'btn btn-default',
			},
			'query' => {
				'db' => $form->{'db'},
				'table' => $form->{'table'},
				'edit' => 'id',
			},
		),
	);
	push @pkrow, xml(
		'div', [{'class' => 'btn-group btn-group-xs'},
			@cmds,
		],
	);
	push @table, \@pkrow;
	foreach my $ck (sort keys %{$tdata->{'columns'}})
	{
		my $cd = $tdata->{'columns'}->{$ck};
		my @row = ();
		push @row, $cd->{'name'};
		my $ty = $cd->{'type'};
		my $type = ucfirst($ty);
		if ($ty eq 'record')
		{
			my $fk = $cd->{'table'};
			$type .= ': '. $obj->link(
				'text' => $fk,
				'query' => {
					'table' => $fk,
					'db' => $form->{'db'},
				},
			);
#			$type .= ($cd->{'parent'}) ? ' Parent' : '';
#			$type .= ($cd->{'max_cardinality'} == 1) ? ' 1:1' : '';
		}
		push @row, $type;
		push @row, ($cd->{'null'}) ? 'Yes' : 'No';
		my $len = '';
		if ($ty eq 'text' || $ty eq 'binary')
		{
			my $l = $cd->{'length'};
			if ($l eq '64k')
			{
				$len = '64 KiB';
			}
			elsif ($l eq 'long')
			{
				$len = '4 GiB';
			}
			else
			{
				$len = $l;
			}
		}
		push @row, $len;
		my $default = '';
		if ($cd->{'default_null'})
		{
			$default = xml('em', [{}, 0, 'Null']);
		}
		elsif (length($cd->{'default'}))
		{
			$default = $cd->{'default'};
		}
		elsif ($cd->{'timestamp'})
		{
			$default = xml('em', [{}, 0, 'Timestamp']);
		}
		else
		{
			$default = xml('em', [{}, 0, 'Blank']);
		}
		push @row, $default;
		my @cmds = ();
		push @cmds, (
			0, $obj->link(
				'text' => 'Edit',
				'opts' => {
					'class' => 'btn btn-default',
				},
				'query' => {
					'db' => $form->{'db'},
					'table' => $form->{'table'},
					'edit' => $ck,
				},
			),
		);
		push @cmds, (
			'a', [{
				'class' => 'btn btn-default',
				'onclick' => qq|return show_delete_column('$ck');|,
			},
				0, 'Delete',
			],
		);
		push @row, xml(
			'div', [{'class' => 'btn-group btn-group-xs'},
				@cmds,
			],
		);
		push @table, \@row;
	}
	my @index = ();
	my $idx = $tdata->{'index'};
	$idx ||= {};
	foreach my $ik (sort keys %$idx)
	{
		my $idata = $idx->{$ik};
		my @row = ();
		push @row, $idata->{'name'};
		push @row, ucfirst($idata->{'type'});
		push @row, join(', ', @{$idata->{'columns'}});
		my @cmds = ();
		push @cmds, (
			0, $obj->link(
				'text' => 'Edit',
				'opts' => {
					'class' => 'btn btn-default',
				},
				'query' => {
					'db' => $form->{'db'},
					'table' => $form->{'table'},
					'edit_index' => $ik,
				},
			),
		);
		push @cmds, (
			'a', [{
				'class' => 'btn btn-default',
				'onclick' => qq|return show_delete_index('$idata->{'name'}');|,
			},
				0, 'Delete',
			],
		);
		push @row, xml(
			'div', [{'class' => 'btn-group btn-group-xs'},
				@cmds,
			],
		);
		push @index, \@row;
	}
        my @constraint = ();
        {
            my $idx = $tdata->{'constraint'};
            $idx ||= {};
            foreach my $ik ( sort keys %$idx ) {
                my $idata = $idx->{$ik};
                my @row   = ();
                push @row, $idata->{'name'};
                push @row, join( ', ', @{ $idata->{'columns'} } );
                push @row, $idata->{'reference_table'};
                push @row, $idata->{'reference_columns'};
                push @row, ( defined $idata->{'on_update'} and length $idata->{'on_update'} > 0 ) ? $idata->{'on_update'} : '&nbsp;';
                push @row, ( defined $idata->{'on_delete'} and length $idata->{'on_delete'} > 0 ) ? $idata->{'on_delete'} : '&nbsp;';
                my @cmds = ();
                push @cmds,
                    (
                    0,
                    $obj->link(
                        'text'  => 'Edit',
                        'opts'  => { 'class' => 'btn btn-default', },
                        'query' => {
                            'db'         => $form->{'db'},
                            'table'      => $form->{'table'},
                            'edit_constraint' => $ik,
                        },
                    ),
                    );
                push @cmds,
                    (
                    'a',
                    [   {   'class'   => 'btn btn-default',
                            'onclick' => qq|return show_delete_constraint('$idata->{'name'}');|,
                        },
                        0, 'Delete',
                    ],
                    );
                push @row, xml( 'div', [ { 'class' => 'btn-group btn-group-xs' }, @cmds, ], );
                push @constraint, \@row;
            }
        }
	$ct->{'column_list'} = htable(
		'fields' => [
			'Name',
			'Type',
			'Nullable',
			'Length',
			'Default',
			'Command',
		],
		'data' => \@table,
		'opts' => {
			'class' => 'table table-bordered table-striped table-condensed',
		},
	);
	$ct->{'index_list'} = htable(
		'fields' => [
			'Name',
			'Type',
			'Columns',
			'Command',
		],
		'data' => \@index,
		'opts' => {
			'class' => 'table table-bordered table-striped table-condensed',
			'style' => 'width: 700px;',
		},
	);
        $ct->{'constraint_list'} = htable(
            'fields' => [ 'Name', 'Columns', 'Reference Table', 'Reference Columns', 'On Update', 'On Delete', 'Command', ],
            'data'   => \@constraint,
            'opts'   => {
                'class' => 'table table-bordered table-striped table-condensed',
            },
        );
	$obj->schema(new Note::SQL::Schema());
	my $platform = 'mysql';
	if ($form->{'platform'} eq 'sqlite')
	{
		$platform = $form->{'platform'};
	}
	$ct->{'table_sql'} = $obj->schema()->table_sql($form->{'table'}, $tdata, undef, $platform);
	my $database = $obj->get_database();
	if (defined $database)
	{
		my $cursql = undef;
		eval {
			$cursql = $database->get_create_table('table' => $form->{'table'});
		};
		if ($cursql)
		{
			$ct->{'current_sql'} = $cursql;
			my $diffsql = $obj->schema()->table_diff($cursql, $ct->{'table_sql'}, $form->{'table'});
			if ($diffsql)
			{
				$ct->{'diff_sql'} = $diffsql;
			}
		}
	}
	return $obj->SUPER::load($param);
}

sub get_database
{
	my ($obj) = @_;
	my $form = $obj->form();
	my $dbkey = $form->{'db'};
	my $db = $main::note_config->{'storage'}->{$dbkey};
	return $db;
}

sub table_path
{
	my ($obj) = @_;
	my $form = $obj->form();
	my $root = $obj->app()->config()->{'database_root'};
	my $db = $form->{'db'};
	unless (length($db) && $db !~ /^\./)
	{
		$obj->redirect('/databases');
	}
	my $tbl = $form->{'table'};
	unless (length($tbl) && $tbl !~ /^\./)
	{
		$obj->redirect('/databases');
	}
	my $fp = "$root/$db/$tbl.njs";
	unless (-e $fp)
	{
		$obj->redirect($obj->url(
			'path' => '/tables',
			'query' => {
				'new_table' => 1,
				'table_name' => $tbl,
				'db' => $form->{'db'},
			},
		));
	}
	return $fp;
}

sub table_load
{
	my ($obj) = @_;
	my $fp = $obj->table_path();
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
	$obj->value()->{'data'} = $data;
	return $data;
}

sub table_save
{
	my ($obj, $data) = @_;
	$obj->value()->{'data'} = $data;
	my $fp = $obj->table_path();
	my $fh = undef;
	unless (open($fh, '>', $fp))
	{
		die(qq|Unable to open file '$fp': $!|);
	}
	print $fh JSON::XS->new()->utf8()->pretty()->canonical()->encode($data);
	close($fh);
	return $data;
}

sub column_check
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $name = $data->{'name'};
	unless (length($name))
	{
		return;
	}
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_',
	);
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = 'Column Name: '. $ck->error();
		return;
	}
	my $tdata = $obj->table_load();
	my $ty = $data->{'type'};
	unless ($args->[0] eq '1')
	{
		$obj->{'value'}->{'type'} = $data->{'type'}; # lowercase
		$data->{'type'} = ucfirst($ty); # ucfirst
		$data->{'null'} = ($data->{'null'} eq 'on') ? 1 : 0;
		return;
	}
	my $col = {
		'type' => $ty,
		'name' => $name,
		'null' => ($data->{'null'}) ? 1 : 0,
	};
	if ($ty eq 'record')
	{
		my $ft = $data->{'record_table'};
		if (length($ft))
		{
			my $tck = new Note::Check(
				'type' => 'regex',
				'chars' => 'a-z0-9_',
			);
			unless ($tck->check(\$ft))
			{
				$ct->{'error'} = 'Foreign Table: '. $ck->error();
				return;
			}
			$col->{'table'} = $ft;
		}
#		if ($data->{'parent'} eq 'on')
#		{
#			$col->{'parent'} = 1;
#		}
#		if ($data->{'max_cardinality'} eq '1')
#		{
#			$col->{'max_cardinality'} = 1;
#		}
		if ($col->{'null'} && $data->{'default_null'} eq 'on')
		{
			$col->{'default_null'} = 1;
		}
		else
		{
			$col->{'default'} = $data->{'default'};
		}
	}
	elsif ($ty eq 'text' || $ty eq 'binary')
	{
		my $len = $data->{'length'};
		if ($len eq 'specify')
		{
			my $spc = $data->{'length_specify'};
			unless ($spc =~ /^\d+$/)
			{
				$ct->{'error'} = 'Specify Length: Invalid value.';
				return;
			}
			unless ($spc > 0 && $spc <= 255)
			{
				$ct->{'error'} = 'Specify Length: Must be between 1 and 255.';
				return;
			}
			$col->{'length'} = $spc;
		}
		elsif ($len eq '64k')
		{
			$col->{'length'} = $len;
		}
		elsif ($len eq 'long')
		{
			$col->{'length'} = $len;
		}
		if ($col->{'null'} && $data->{'default_null'} eq 'on')
		{
			$col->{'default_null'} = 1;
		}
		else
		{
			$col->{'default'} = $data->{'default'};
		}
	}
	elsif (
		$ty eq 'boolean' ||
		$ty eq 'integer' ||
		$ty eq 'float' ||
		$ty eq 'currency'
	) {
		if ($col->{'null'} && $data->{'default_null'} eq 'on')
		{
			$col->{'default_null'} = 1;
		}
		else
		{
			unless (length($data->{'default'}))
			{
				$data->{'default'} = 0;
			}
			if ($ty eq 'boolean')
			{
				unless ($data->{'default'} eq '0' || $data->{'default'} eq '1')
				{
					$ct->{'error'} = 'Default: Invalid value';
					return;
				}
			}
			elsif ($ty eq 'integer')
			{
				unless ($data->{'default'} =~ /^\d+$/)
				{
					$ct->{'error'} = 'Default: Invalid value';
					return;
				}
			}
			elsif ($ty eq 'float' || $ty eq 'currency')
			{
				unless ($data->{'default'} =~ /^\d+(\.\d+)?$/)
				{
					$ct->{'error'} = 'Default: Invalid value';
					return;
				}
			}
			$col->{'default'} = $data->{'default'};
		}
	}
	elsif ($ty eq 'datetime')
	{
		if ($data->{'timestamp'} eq 'on')
		{
			foreach my $k (keys %{$tdata->{'columns'}})
			{
				my $cd = $tdata->{'columns'}->{$k};
				if ($cd->{'type'} eq 'datetime')
				{
					if ($cd->{'timestamp'})
					{
						$ct->{'error'} = 'Timestamp: Only one timestamp column allowed per table.';
						return;
					}
				}
			}
			$col->{'timestamp'} = 1;
		}
		elsif ($col->{'null'} && $data->{'default_null'} eq 'on')
		{
			$col->{'default_null'} = 1;
		}
	}
	return $col;
}

sub column_new
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $form = $obj->form();
	my $name = $data->{'name'};
	my $tdata = $obj->table_load();
	if (exists $tdata->{'columns'}->{$name})
	{
		$ct->{'error'} = 'Duplicate column name.';
		return;
	}
	my $col = $obj->column_check($data, $args);
	return if ($ct->{'error'});
	unless ($args->[0] eq '1')
	{
		$obj->{'value'}->{'new'} = $data;
		$form->{'new_col'} = 2;
		return;
	}
	return unless ($col);
	$tdata->{'columns'}->{$name} = $col;
	$obj->table_save($tdata);
}

sub column_delete
{
	my ($obj, $data, $args) = @_;
	my $tbl = $obj->table_load();
	my $k = $data->{'item'};
	if (exists $tbl->{'columns'}->{$k})
	{
		delete $tbl->{'columns'}->{$k};
		$obj->{'content'}->{'message'} = qq|Deleted column '$k'|;
		$obj->table_save($tbl);
	}
}

sub column_edit
{
	my ($obj, $data, $args) = @_;
	my $form = $obj->form();
	my $ct = $obj->content();
	my $tbl = $obj->table_load();
	if ($args->[0] eq '0')
	{
		my $edk = $args->[1];
		if (exists $tbl->{'columns'}->{$edk})
		{
			return unless (length($data->{'name'}));
			$obj->column_check($data, $args);
			return if ($ct->{'error'});
			$obj->{'value'}->{'edit'} = $data;
			$form->{'edit_update'} = $edk;
		}
	}
	elsif ($args->[0] eq '1')
	{
		my $edk = $args->[1];
		if (exists $tbl->{'columns'}->{$edk})
		{
			my $col = $obj->column_check($data, $args);
			return if ($ct->{'error'});
			return unless (defined $col);
			my $tdata = $obj->table_load();
			my $name = $col->{'name'};
			if ($name eq $edk)
			{
				$tdata->{'columns'}->{$name} = $col;
			}
			else
			{
				delete $tdata->{'columns'}->{$edk};
				$tdata->{'columns'}->{$name} = $col;
			}
			$obj->table_save($tdata);
		}
	}
}

sub index_new
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $name = $data->{'name'};
	my $ty = $data->{'type'};
	my $cols = $data->{'columns'};
	$cols =~ s/\s//g;
	unless (length($name))
	{
		return;
	}
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_',
	);
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = 'Index Name: '. $ck->error();
		return;
	}
	unless ($ty eq 'index' || $ty eq 'unique')
	{
		$ct->{'error'} = 'Invalid index type';
		return;
	}
	my $tbl = $obj->table_load();
	if (exists $tbl->{'index'}->{$name})
	{
		$ct->{'error'} = 'Duplicate index name';
		return;
	}
	my $fc = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-,()',
	);
	unless ($fc->check(\$cols))
	{
		$ct->{'error'} = 'Index Columns: '. $fc->error();
		return;
	}
	my @fs = ();
	if ($cols =~ /\,/)
	{
		@fs = split /\,/, $cols;
	}
	else
	{
		@fs = ($cols);
	}
	foreach my $k (@fs)
	{
		my $rk = $k;
		if ($rk =~ s/(\(.*$)//)
		{
			unless ($1 =~ /\(\d+\)/)
			{
				$ct->{'error'} = 'Invalid index length';
				return;
			}
		}
		next if ($rk eq 'id');
		unless (exists $tbl->{'columns'}->{$rk})
		{
			$ct->{'error'} = 'Invalid index columns';
			return;
		}
	}
	$tbl->{'index'} ||= {};
	$tbl->{'index'}->{$name} = {
		'name' => $name,
		'type' => $ty,
		'columns' => \@fs,
	};
	$obj->table_save($tbl);
}

sub constraint_new
{
	my ($obj, $data, $args) = @_;
	my $ct = $obj->content();
	my $name = $data->{'name'};
	my $ty = 'constraint';
	my $cols = $data->{'columns'};
	my $reference_table = $data->{'reference_table'};
	my $reference_columns = $data->{'reference_columns'};
	my $on_update = $data->{'on_update'};
	my $on_delete = $data->{'on_delete'};
	$cols =~ s/\s//g;
	unless (length($name))
	{
		return;
	}
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-',
	);
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = 'Constraint Name: '. $ck->error();
		return;
	}
	my $tbl = $obj->table_load();
	if (exists $tbl->{'constraint'}->{$name})
	{
		$ct->{'error'} = 'Duplicate constraint name';
		return;
	}
	my $fc = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-,()',
	);
	unless ($fc->check(\$cols))
	{
		$ct->{'error'} = 'Constraint Columns: '. $fc->error();
		return;
	}
	my @fs = ();
	if ($cols =~ /\,/)
	{
		@fs = split /\,/, $cols;
	}
	else
	{
		@fs = ($cols);
	}
	foreach my $k (@fs)
	{
		my $rk = $k;
		next if ($rk eq 'id');
		unless (exists $tbl->{'columns'}->{$rk})
		{
			$ct->{'error'} = 'Invalid index columns';
			return;
		}
	}
	$tbl->{'constraint'} ||= {};
	$tbl->{'constraint'}->{$name} = {
		'name' => $name,
		'type' => $ty,
		'columns' => \@fs,
		'reference_table' => $reference_table,
		'reference_columns' => $reference_columns,
		'on_update' => $on_update,
		'on_delete' => $on_delete,
	};
	$obj->table_save($tbl);
}

sub index_delete
{
	my ($obj, $data, $args) = @_;
	my $tbl = $obj->table_load();
	my $k = $data->{'item'};
	if (exists $tbl->{'index'}->{$k})
	{
		delete $tbl->{'index'}->{$k};
		$obj->{'content'}->{'message'} = qq|Deleted index '$k'|;
		$obj->table_save($tbl);
	}
}

sub constraint_delete
{
	my ($obj, $data, $args) = @_;
	my $tbl = $obj->table_load();
	my $k = $data->{'item'};
	if (exists $tbl->{'constraint'}->{$k})
	{
		delete $tbl->{'constraint'}->{$k};
		$obj->{'content'}->{'message'} = qq|Deleted constraint '$k'|;
		$obj->table_save($tbl);
	}
}

sub index_edit
{
	my ($obj, $data, $args) = @_;
	my $tbl = $obj->table_load();
	my $orig = $args->[0];
	unless (exists $tbl->{'index'}->{$orig})
	{
		return;
	}
	my $ct = $obj->content();
	my $name = $data->{'name'};
	my $ty = $data->{'type'};
	my $cols = $data->{'columns'};
	$cols =~ s/\s//g;
	unless (length($name))
	{
		return;
	}
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_',
	);
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = 'Index Name: '. $ck->error();
		return;
	}
	unless ($ty eq 'index' || $ty eq 'unique')
	{
		$ct->{'error'} = 'Invalid index type';
		return;
	}
	if ($name ne $orig)
	{
		if (exists $tbl->{'index'}->{$name})
		{
			$ct->{'error'} = 'Duplicate index name';
			return;
		}
	}
	my $fc = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-,()',
	);
	unless ($fc->check(\$cols))
	{
		$ct->{'error'} = 'Index Columns: '. $fc->error();
		return;
	}
	my @fs = ();
	if ($cols =~ /\,/)
	{
		@fs = split /\,/, $cols;
	}
	else
	{
		@fs = ($cols);
	}
	foreach my $k (@fs)
	{
		my $rk = $k;
		if ($rk =~ s/(\(.*$)//)
		{
			unless ($1 =~ /\(\d+\)/)
			{
				$ct->{'error'} = 'Invalid index length';
				return;
			}
		}
		next if ($rk eq 'id');
		unless (exists $tbl->{'columns'}->{$rk})
		{
			$ct->{'error'} = 'Invalid index columns';
			return;
		}
	}
	$tbl->{'index'} ||= {};
	if ($name ne $orig)
	{
		delete $tbl->{'index'}->{$orig};
	}
	$tbl->{'index'}->{$name} = {
		'name' => $name,
		'type' => $ty,
		'columns' => \@fs,
	};
	$obj->table_save($tbl);
}

sub constraint_edit
{
	my ($obj, $data, $args) = @_;
	my $tbl = $obj->table_load();
	my $orig = $args->[0];
	unless (exists $tbl->{'constraint'}->{$orig})
	{
		return;
	}
	my $ct = $obj->content();
	my $name = $data->{'name'};
	my $ty = 'constraint';
	my $cols = $data->{'columns'};
	my $reference_table = $data->{'reference_table'};
	my $reference_columns = $data->{'reference_columns'};
	my $on_update = $data->{'on_update'};
	my $on_delete = $data->{'on_delete'};
	$cols =~ s/\s//g;
	unless (length($name))
	{
		return;
	}
	my $ck = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-',
	);
	unless ($ck->check(\$name))
	{
		$ct->{'error'} = 'Constraint Name: '. $ck->error();
		return;
	}
	if ($name ne $orig)
	{
		if (exists $tbl->{'constraint'}->{$name})
		{
			$ct->{'error'} = 'Duplicate constraint name';
			return;
		}
	}
	my $fc = new Note::Check(
		'type' => 'regex',
		'chars' => 'a-z0-9_-,()',
	);
	unless ($fc->check(\$cols))
	{
		$ct->{'error'} = 'Constraint Columns: '. $fc->error();
		return;
	}
	my @fs = ();
	if ($cols =~ /\,/)
	{
		@fs = split /\,/, $cols;
	}
	else
	{
		@fs = ($cols);
	}
	foreach my $k (@fs)
	{
		my $rk = $k;
		next if ($rk eq 'id');
		unless (exists $tbl->{'columns'}->{$rk})
		{
			$ct->{'error'} = 'Invalid constraint columns';
			return;
		}
	}
	$tbl->{'constraint'} ||= {};
	if ($name ne $orig)
	{
		delete $tbl->{'constraint'}->{$orig};
	}
	$tbl->{'constraint'}->{$name} = {
		'name' => $name,
		'type' => $ty,
		'columns' => \@fs,
		'reference_table' => $reference_table,
		'reference_columns' => $reference_columns,
		'on_update' => $on_update,
		'on_delete' => $on_delete,
	};
	$obj->table_save($tbl);
}

1;

