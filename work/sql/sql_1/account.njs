{
   "columns" : {
      "balance" : {
         "default" : "0",
         "name" : "balance",
         "null" : 1,
         "type" : "currency"
      },
      "last_tx" : {
         "name" : "last_tx",
         "null" : 1,
         "table" : "account_transaction",
         "type" : "record"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "ts_updated" : {
         "default_null" : 1,
         "name" : "ts_updated",
         "null" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
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
