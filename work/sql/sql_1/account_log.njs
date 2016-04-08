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
   "index" : {
      "tx_new" : {
         "columns" : [
            "tx_new"
         ],
         "name" : "tx_new",
         "type" : "index"
      },
      "tx_prev" : {
         "columns" : [
            "tx_prev"
         ],
         "name" : "tx_prev",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
