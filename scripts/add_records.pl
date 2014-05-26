#!/usr/bin/perl
use lib '/home/note/dyl/lib';
$Note::Config::File = '/home/note/dyl/cfg/note.cfg';
require Note::Config;

use Data::Dumper;
use POSIX 'strftime';

use Note::Row;
use Dev::DBManager;

my $db = $main::note_config->storage()->{'sql_dyl2'};
$Note::Row::Database = $db;

my $lead = Note::Row::insert('lead', {
	'ts_received' => strftime("%F %T", gmtime()),
	'source_id' => Note::Row::find_insert('lead_source', {'source_name' => 'Lead Source 2'})->id(),
	'person_id' => Note::Row::insert('person', {
		'first_name' => 'Some',
		'last_name' => 'Loser',
	})->id(),
});

Note::Row::insert('lead_auto', {
	'lead_id' => $lead->id(),
	'coverage_requested' => 'Bigtime',
	'current_insurer' => 'Ballztate',
});

