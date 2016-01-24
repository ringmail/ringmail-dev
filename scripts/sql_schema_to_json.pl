#!/usr/bin/perl
use lib '/home/note/lib';
use lib '/home/note/app/dev/lib';
use lib '/home/note/app/ringmail/lib';

use Data::Dumper;
use POSIX 'strftime';
use Note::Base;
use Note::SQL::Schema;

use Dev::DBManager;

my $sch = new Note::SQL::Schema();
my $db = $main::note_config->storage()->{'sql_1'};
my $mgr = new Dev::DBManager(
    'app' => $main::note_config->app_class()->{'ringmail'},
	'root' => '/home/note/app/dev/work/sql/ringmail2',
    'name' => 'ringmail',
    'database' => $db,
);

my $tables = $db->get_tables();
foreach my $t (sort @$tables)
{
	#next unless ($t eq 'ring_contact_phone');
	::log("Table: $t");
	my $create = $db->get_create_table(
		'table' => $t,
	);
	#::log("SQL $create");
	my $trec = $sch->table_from_sql(
		'sql' => $create,
		#'trace' => 1,
	);
	my $name = $trec->{'name'};
	delete $trec->{'name'};
	$mgr->json_save($mgr->root(). '/'. $name. '.njs', $trec);
}

