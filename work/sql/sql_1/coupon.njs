{
   "columns" : {
      "code" : {
         "default" : "",
         "length" : "8",
         "name" : "code",
         "null" : 0,
         "type" : "text"
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
         "null" : 1,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "code_1" : {
         "columns" : [
            "code"
         ],
         "name" : "code_1",
         "type" : "unique"
      },
      "transaction_id_1" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "transaction_id_1",
         "type" : "index"
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
