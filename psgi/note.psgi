#!/usr/bin/perl
use lib '/home/note/lib';
use lib '/home/note/app/dev/lib';

use Data::Dumper;
use JSON::XS;
use DBI;
use DBIx::Connector;
use Plack::Builder;

use Note::PSGI;

my $root = '/home/note';
my $approot = '/app/note';
my $obj = new Note::PSGI();
$obj->setup(
	'config_file' => $root. '/cfg/note.cfg',
);

my $app = sub {
	$obj->run_psgi(@_);
};

builder {
    enable "Plack::Middleware::Static",
        'path' => sub { s{^/ext/}{} },
        'root' => $root. $approot. '/static/ext/';
    enable "Plack::Middleware::Static",
        'path' => sub { s{^/img/}{} },
        'root' => $root. $approot. '/static/img/';
    enable "Plack::Middleware::Static",
        'path' => sub { s{^/css/}{} },
        'root' => $root. $approot. '/static/css/';
    enable "Plack::Middleware::Static",
        'path' => sub { s{^/js/}{} },
        'root' => $root. $approot. '/static/js/';
    enable "Plack::Middleware::Static",
        'path' => sub { s{^/font/}{} },
        'root' => $root. $approot. '/static/font/';
    enable "Plack::Middleware::Static",
        'path' => sub { m{^/favicon.ico} },
        'root' => $root. $approot. '/static/img/';
    $app;
};

