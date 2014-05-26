#!/usr/bin/perl
use lib '/home/note/dyl/lib';
$Note::Config::File = '/home/note/dyl/cfg/note.cfg';
require Note::Config;

use Data::Dumper;
use POSIX 'strftime';
use Carp::Always;

use Note::Row;
use Dev::DBManager;
use Dev::OVTable;

my $db = $main::note_config->storage()->{'sql_dyl2'};
$Note::Row::Database = $db;

my $mgr = new Dev::DBManager(
	'app' => $main::note_config->app_class()->{'note'},
	'name' => 'dyl2',
	'database' => $db,
);

my $fp = $mgr->root(). '_links.njs';
my $schlinks = $mgr->json_load($fp);

my $ovtable = new Dev::OVTable(
	'database' => $db,
	'primary_table' => 'lead',
	'schema_tables' => {},
	'schema_links' => $schlinks,
);

$ovtable->set_columns(
	{
		'table' => 'lead',
		'column' => 'id',
		'key' => 'lead_id',
	},
	{
		'table' => 'lead',
		'column' => 'ts_received',
		'key' => 'ts_received',
	},
	{
		'table' => 'lead_auto',
		'column' => 'coverage_requested',
		'key' => 'coverage_requested',
	},
	{
		'table' => 'lead_auto',
		'column' => 'current_insurer',
		'key' => 'current_insurer',
	},
);

my $r = $ovtable->get(
	'select' => [qw/lead_id ts_received coverage_requested current_insurer/],
);

print Dumper($r);

#my $qry1 = $db->table('lead')->get(
#	'array' => 1,
#	'table' => 'lead, lead_source, person, lead_auto',
#	'select' => ['lead.*', 'lead_source.*', 'person.*', 'lead_auto.*'],
#	'join' => [
#		'lead.source_id=lead_source.id',
#		'lead.person_id=person.id',
#		'lead.id=lead_auto.lead_id',
#	],
#	'order' => 'lead.id asc limit 10 offset 0',
#);
#
my $qry3 = $db->table('lead')->get(
	'array' => 1,
	'table' => 'lead_source, person, lead',
	'select' => ['lead.*', 'lead_source.*', 'person.*', 'lead_auto.*'],
	'join' => [
		'lead.source_id=lead_source.id',
		'lead.person_id=person.id',
	],
	'join_left' => [
		['lead_auto', 'lead.id=lead_auto.lead_id'],
	],
	'order' => 'lead.id asc limit 10 offset 0',
);

#print Dumper($qry3);
