package Dev::Page::user;
use strict;
use warnings;

use Moose;
use Note::Param;
extends 'Note::Page';
no warnings 'uninitialized';

has 'user' => (
	'is' => 'rw',
	'isa' => 'Str',
);

sub init
{
	my ($obj) = shift;
	my $sd = $obj->session();
	if (defined $sd->{'login_dev'})
	{
		$obj->user($sd->{'login_dev'});
		$obj->content()->{'user'} = $sd->{'login_dev'};
		return $obj->SUPER::init(@_);
	}
	$obj->redirect($obj->url('path' => '/login'));
}

sub logout
{
	my ($obj) = @_;
	my $sd = $obj->session();
	delete $sd->{'login_dev'};
	$obj->session_write();
	$obj->redirect($obj->url('path' => '/'));
}

1;

