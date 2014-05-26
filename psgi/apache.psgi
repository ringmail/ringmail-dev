#!/usr/bin/perl
use lib '/home/note/dyl/lib';

use Data::Dumper;
use JSON::XS;
use DBI;
use DBIx::Connector;
use Plack::Builder;

use Note::PSGI;

my $root = '/home/note/dyl';
my $approot = '/app/note';
my $obj = new Note::PSGI();
$obj->setup(
	'config_file' => $root. '/cfg/note.cfg',
);

my $app = sub {
	$obj->run_psgi(@_);
};

$app;

