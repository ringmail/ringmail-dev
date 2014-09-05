#!/usr/bin/perl
use lib '/home/note/lib';
$Note::Config::File = '/home/note/cfg/note.cfg';
require Note::Config;

use Data::Dumper;
use POSIX 'strftime';
use Carp::Always;
use RDF::Trine ('iri', 'statement', 'literal');

use Note::App;
use Note::Log;

my $db = $main::note_config->storage()->{'rdf_1'};

#$db->insert('statement' => statement(
#	iri('http://atellix.com/test'),
#	iri('http://atellix.com/attr/test_field'),
#	literal('Hello World!'),
#));

my $mdl = $db->get_resource(iri('http://atellix.com/test'));
::_log($mdl->as_hashref());

use RDF::Trine::Serializer::Turtle;
my $serializer = RDF::Trine::Serializer::Turtle->new();
print $serializer->serialize_model_to_string($mdl);

