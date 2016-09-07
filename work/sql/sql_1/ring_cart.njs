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
   "constraint" : {
      "ring_cart-coupon" : {
         "columns" : [
            "coupon_id"
         ],
         "name" : "ring_cart-coupon",
         "reference_columns" : "id",
         "reference_table" : "ring_coupon",
         "type" : "constraint"
      },
      "ring_cart-hashtag_id" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "ring_cart-hashtag_id",
         "on_delete" : "CASCADE",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "ring_hashtag",
         "type" : "constraint"
      },
      "ring_cart-order_id" : {
         "columns" : [
            "order_id"
         ],
         "name" : "ring_cart-order_id",
         "reference_columns" : "id",
         "reference_table" : "ring_order",
         "type" : "constraint"
      },
      "ring_cart-transaction_id" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "ring_cart-transaction_id",
         "reference_columns" : "id",
         "reference_table" : "account_transaction",
         "type" : "constraint"
      },
      "ring_cart-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_cart-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
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
