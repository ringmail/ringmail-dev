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
  `id` bigint unsigned NOT NULL,
  `acct_dst` bigint unsigned NOT NULL,
  `acct_src` bigint unsigned NOT NULL,
  `amount` decimal(24,2) NOT NULL,
  `bin_domain` varbinary(64) NOT NULL DEFAULT '',
  `bin_domain_text` blob NOT NULL,
  `bin_domain_text_long` longblob NOT NULL,
  `bool_test` bool NOT NULL DEFAULT 1,
  `domain` varchar(64) NOT NULL DEFAULT '',
  `domain_text` text NOT NULL,
  `domain_text_long` longtext NOT NULL,
  `entity` bigint unsigned NULL DEFAULT NULL,
  `real_one` double NOT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_date` date NOT NULL,
  `ts_datetime` datetime NOT NULL,
  `tx_type` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NULL DEFAULT NULL,
  INDEX `acct_dst_1` (`acct_dst`),
  INDEX `acct_src_1` (`acct_src`),
  INDEX `domain_text` (`domain_text`(30)),
  INDEX `entity_1` (`entity`),
  INDEX `ts_1` (`ts`),
  INDEX `tx_type_1` (`tx_type`),
  INDEX `user_1` (`user_id`),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
SQL

my $trec = $sch->table_from_sql(
	'sql' => $sql,
);

#::log($trec);
::log($sch->table_sql($trec->{'name'}, $trec));

