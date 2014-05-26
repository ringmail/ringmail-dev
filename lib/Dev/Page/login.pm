package Dev::Page::login;
use strict;
use warnings;

use Moose;
use Digest::MD5 'md5_hex';
use Note::Param;
extends 'Note::Page';
no warnings 'uninitialized';

sub login
{
	my ($obj) = @_;
	my $data = $obj->form();
	my $appcfg = $obj->app()->config();
	my $login = $data->{'login'};
	if (exists $appcfg->{'user'}->{$login})
	{
		my $pw = $appcfg->{'user'}->{$login};
		my $check = md5_hex($data->{'password'});
		if ($pw eq $check)
		{
			my $sd = $obj->session();
			$sd->{'login_dev'} = $login;
			$obj->session_write();
			$obj->redirect($obj->url('path' => '/'));
		}
	}
	$obj->content()->{'error'} = 'Bad Password';
}

1;

