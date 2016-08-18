#!/usr/bin/perl -wT 

use autodie;
use Carp 'croak';
use English '-no_match_vars';
use feature 'say';
use lib '/home/note/app/ringmail/lib';
use lib '/home/note/lib';
use Note::Base;
use strict;
use warnings;
use WWW::Mechanize::TreeBuilder;
use WWW::Mechanize;

my $mech = 'WWW::Mechanize'->new();

my $config = $main::note_config->config();

$mech->get( qq{http://${ \$config->{dev_hostname} }/login}, );

$mech->set_fields(
    login    => $config->{dev_user},
    password => $config->{dev_password},
    'do-1_1' => q{},
);

$mech->click();

$mech->get( qq{http://${ \$config->{dev_hostname} }/tables?db=sql_1}, );

my $links = $mech->find_all_links( url_regex => qr{ \b table= \w+ }xms, );

'WWW::Mechanize::TreeBuilder'->meta->apply( $mech, );

for my $link ( @{$links} ) {

    $mech->get( $link, );

    my @code = $mech->look_down( '_tag', 'code', );

    next if $#code == 1;

    my $code = $code[-1];

    my $statement = $code->as_text();

    say $statement or croak $OS_ERROR;

}
