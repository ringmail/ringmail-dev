{
   "columns" : {
      "account_id" : {
         "name" : "account_id",
         "null" : 0,
         "table" : "account",
         "type" : "record"
      },
      "balance_new" : {
         "default" : "0",
         "name" : "balance_new",
         "null" : 0,
         "type" : "currency"
      },
      "balance_prev" : {
         "default" : "0",
         "name" : "balance_prev",
         "null" : 0,
         "type" : "currency"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "tx_new" : {
         "name" : "tx_new",
         "null" : 0,
         "table" : "account_transaction",
         "type" : "record"
      },
      "tx_prev" : {
         "name" : "tx_prev",
         "null" : 1,
         "table" : "account_transaction",
         "type" : "record"
      }
   },
   "constraint" : {
      "account_log-account_id" : {
         "columns" : [
            "account_id"
         ],
         "name" : "account_log-account_id",
         "reference_columns" : "id",
         "reference_table" : "account",
         "type" : "constraint"
      },
      "account_log-id" : {
         "columns" : [
            "id"
         ],
         "name" : "account_log-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "account_log-tx_new" : {
         "columns" : [
            "tx_new"
         ],
         "name" : "account_log-tx_new",
         "reference_columns" : "id",
         "reference_table" : "account_transaction",
         "type" : "constraint"
      },
      "account_log-tx_prev" : {
         "columns" : [
            "tx_prev"
         ],
         "name" : "account_log-tx_prev",
         "reference_columns" : "id",
         "reference_table" : "account_transaction",
         "type" : "constraint"
      }
   },
   "index" : {
      "account_id_1" : {
         "columns" : [
            "account_id"
         ],
         "name" : "account_id_1",
         "type" : "index"
      },
      "tx_new_1" : {
         "columns" : [
            "tx_new"
         ],
         "name" : "tx_new_1",
         "type" : "index"
      },
      "tx_prev_1" : {
         "columns" : [
            "tx_prev"
         ],
         "name" : "tx_prev_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
