{
   "columns" : {
      "total" : {
         "default" : "0.00",
         "name" : "total",
         "null" : 0,
         "type" : "currency"
      },
      "transaction_id" : {
         "name" : "transaction_id",
         "null" : 1,
         "table" : "account_transaction",
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "constraint" : {},
   "index" : {
      "transaction_id_1" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "transaction_id_1",
         "type" : "unique"
      },
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
