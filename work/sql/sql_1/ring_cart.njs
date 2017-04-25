{
   "columns" : {
      "coupon_id" : {
         "name" : "coupon_id",
         "null" : 1,
         "table" : "ring_coupon",
         "type" : "record"
      },
      "hashtag_id" : {
         "name" : "hashtag_id",
         "null" : 1,
         "table" : "ring_hashtag",
         "type" : "record"
      },
      "order_id" : {
         "name" : "order_id",
         "null" : 1,
         "table" : "ring_order",
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
   "constraint" : {},
   "index" : {
      "coupon_id_1" : {
         "columns" : [
            "coupon_id"
         ],
         "name" : "coupon_id_1",
         "type" : "unique"
      },
      "hashtag_id_1" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "hashtag_id_1",
         "type" : "unique"
      },
      "order_id_1" : {
         "columns" : [
            "order_id"
         ],
         "name" : "order_id_1",
         "type" : "index"
      },
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
