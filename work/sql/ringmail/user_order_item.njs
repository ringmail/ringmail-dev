{
   "columns" : {
      "cart_product_id" : {
         "name" : "cart_product_id",
         "null" : 0,
         "table" : "cart_product",
         "type" : "record"
      },
      "price" : {
         "default" : "0",
         "name" : "price",
         "null" : 0,
         "type" : "currency"
      },
      "quantity" : {
         "default" : "1",
         "name" : "quantity",
         "null" : 0,
         "type" : "integer"
      },
      "user_order_id" : {
         "name" : "user_order_id",
         "null" : 0,
         "table" : "user_order",
         "type" : "record"
      }
   },
   "index" : {
      "user_order_id_1" : {
         "columns" : [
            "user_order_id"
         ],
         "name" : "user_order_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
