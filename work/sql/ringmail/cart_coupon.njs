{
   "columns" : {
      "active" : {
         "default" : "1",
         "name" : "active",
         "null" : 0,
         "type" : "boolean"
      },
      "cart_product_id" : {
         "name" : "cart_product_id",
         "null" : 0,
         "table" : "cart_product",
         "type" : "record"
      },
      "coupon_code" : {
         "default" : "",
         "length" : "32",
         "name" : "coupon_code",
         "null" : 0,
         "type" : "text"
      },
      "product_price" : {
         "default" : "0",
         "name" : "product_price",
         "null" : 0,
         "type" : "currency"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      }
   },
   "index" : {},
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
