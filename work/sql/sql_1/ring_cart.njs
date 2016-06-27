{
   "columns" : {
      "hashtag_id" : {
         "name" : "hashtag_id",
         "null" : 0,
         "table" : "ring_hashtag",
         "type" : "record"
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
   "index" : {
      "ring_cart-hashtag_id" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "ring_cart-hashtag_id",
         "type" : "index"
      },
      "ring_cart-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_cart-user_id",
         "type" : "index"
      },
      "ring_cart-transaction_id" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "ring_cart-transaction_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
