#!/usr/bin/perl
use lib '/home/note/dyl/lib';
$Note::Config::File = '/home/note/dyl/cfg/note.cfg';
require Note::Config;

use Data::Dumper;

use Dev::DBManager;

my $db = $main::note_config->storage()->{'sql_dyl2'};
my $mgr = new Dev::DBManager(
	'app' => $main::note_config->app_class()->{'note'},
	'name' => 'dyl2',
	'database' => $db,
);

my $tbls = $mgr->build_sql_tables();

#print Dumper($tbls);

