{
   "columns" : {
      "cart_product_id" : {
         "name" : "cart_product_id",
         "null" : 0,
         "table" : "cart_product",
         "type" : "record"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      },
      "user_order_id" : {
         "name" : "user_order_id",
         "null" : 0,
         "table" : "user_order",
         "type" : "record"
      },
      "user_order_item_id" : {
         "name" : "user_order_item_id",
         "null" : 1,
         "table" : "user_order_item",
         "type" : "record"
      }
   },
   "index" : {
      "ts_created_1" : {
         "columns" : [
            "ts_created"
         ],
         "name" : "ts_created_1",
         "type" : "index"
      },
      "user_order_id_1" : {
         "columns" : [
            "user_order_id"
         ],
         "name" : "user_order_id_1",
         "type" : "index"
      },
      "user_order_item_id_1" : {
         "columns" : [
            "user_order_item_id"
         ],
         "name" : "user_order_item_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
