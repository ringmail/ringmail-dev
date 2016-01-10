{
   "columns" : {
      "cart_id" : {
         "name" : "cart_id",
         "null" : 0,
         "table" : "cart",
         "type" : "record"
      },
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
      }
   },
   "index" : {
      "cart_id_1" : {
         "columns" : [
            "cart_id"
         ],
         "name" : "cart_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
