#!/usr/bin/perl
use lib '/home/note/lib';
use lib '/home/note/app/ringmail/lib';

use Data::Dumper;
use POSIX 'strftime';
use Note::Base;
use Note::SQL::Schema;

my $sch = new Note::SQL::Schema;

my $sql = <<SQL;
CREATE TABLE `account_transaction` (
  `id` bigint(20) unsigned NOT NULL,
  `acct_dst` bigint(20) unsigned NOT NULL,
  `acct_src` bigint(20) unsigned NOT NULL,
  `amount` decimal(24,4) NOT NULL,
  `entity` bigint(20) unsigned DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tx_type` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `acct_dst_1` (`acct_dst`),
  KEY `acct_src_1` (`acct_src`),
  KEY `entity_1` (`entity`),
  KEY `ts_1` (`ts`),
  KEY `tx_type_1` (`tx_type`),
  KEY `user_1` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
SQL

$sch->table_from_sql(
	'sql' => $sql,
);

