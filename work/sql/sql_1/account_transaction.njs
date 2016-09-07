{
   "columns" : {
      "acct_dst" : {
         "name" : "acct_dst",
         "null" : 0,
         "type" : "record"
      },
      "acct_src" : {
         "name" : "acct_src",
         "null" : 0,
         "type" : "record"
      },
      "amount" : {
         "default" : "0.00",
         "name" : "amount",
         "null" : 0,
         "type" : "currency"
      },
      "entity" : {
         "default_null" : 1,
         "name" : "entity",
         "null" : 1,
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "tx_type" : {
         "name" : "tx_type",
         "null" : 0,
         "type" : "record"
      },
      "user_id" : {
         "default_null" : 1,
         "name" : "user_id",
         "null" : 1,
         "type" : "record"
      }
   },
   "constraint" : {
      "account_transaction-acct_dst" : {
         "columns" : [
            "acct_dst"
         ],
         "name" : "account_transaction-acct_dst",
         "reference_columns" : "id",
         "reference_table" : "account",
         "type" : "constraint"
      },
      "account_transaction-acct_src" : {
         "columns" : [
            "acct_src"
         ],
         "name" : "account_transaction-acct_src",
         "reference_columns" : "id",
         "reference_table" : "account",
         "type" : "constraint"
      },
      "account_transaction-entity" : {
         "columns" : [
            "entity"
         ],
         "name" : "account_transaction-entity",
         "reference_columns" : "id",
         "reference_table" : "payment",
         "type" : "constraint"
      },
      "account_transaction-tx_type" : {
         "columns" : [
            "tx_type"
         ],
         "name" : "account_transaction-tx_type",
         "reference_columns" : "id",
         "reference_table" : "account_transaction_type",
         "type" : "constraint"
      },
      "account_transaction-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "account_transaction-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "acct_dst_1" : {
         "columns" : [
            "acct_dst"
         ],
         "name" : "acct_dst_1",
         "type" : "index"
      },
      "acct_src_1" : {
         "columns" : [
            "acct_src"
         ],
         "name" : "acct_src_1",
         "type" : "index"
      },
      "entity_1" : {
         "columns" : [
            "entity"
         ],
         "name" : "entity_1",
         "type" : "index"
      },
      "ts_1" : {
         "columns" : [
            "ts"
         ],
         "name" : "ts_1",
         "type" : "index"
      },
      "tx_type_1" : {
         "columns" : [
            "tx_type"
         ],
         "name" : "tx_type_1",
         "type" : "index"
      },
      "user_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
