{
   "columns" : {
      "accepted" : {
         "default" : "0",
         "name" : "accepted",
         "null" : 0,
         "type" : "boolean"
      },
      "account" : {
         "name" : "account",
         "null" : 0,
         "table" : "account",
         "type" : "record"
      },
      "amount" : {
         "default" : "0",
         "name" : "amount",
         "null" : 0,
         "type" : "currency"
      },
      "card_id" : {
         "name" : "card_id",
         "null" : 0,
         "table" : "payment_card",
         "type" : "record"
      },
      "error" : {
         "name" : "error",
         "null" : 1,
         "table" : "payment_error",
         "type" : "record"
      },
      "payment" : {
         "name" : "payment",
         "null" : 1,
         "table" : "payment",
         "type" : "record"
      },
      "proc_id" : {
         "name" : "proc_id",
         "null" : 0,
         "table" : "payment_proc",
         "type" : "record"
      },
      "result" : {
         "length" : "16",
         "name" : "result",
         "null" : 0,
         "type" : "text"
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
   "index" : {
      "account_id" : {
         "columns" : [
            "account"
         ],
         "name" : "account_id",
         "type" : "index"
      },
      "card_id" : {
         "columns" : [
            "card_id"
         ],
         "name" : "card_id",
         "type" : "index"
      },
      "payment_attempt-error_id" : {
         "columns" : [
            "error"
         ],
         "name" : "error",
         "type" : "index"
      },
      "payment_id" : {
         "columns" : [
            "payment"
         ],
         "name" : "payment_id",
         "type" : "index"
      },
      "proc_id" : {
         "columns" : [
            "proc_id"
         ],
         "name" : "proc_id",
         "type" : "index"
      },
      "user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
