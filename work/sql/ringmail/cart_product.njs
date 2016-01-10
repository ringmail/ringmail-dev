{
   "columns" : {
      "default_price" : {
         "default" : "0",
         "name" : "default_price",
         "null" : 0,
         "type" : "currency"
      },
      "product_code" : {
         "default" : "",
         "length" : "32",
         "name" : "product_code",
         "null" : 0,
         "type" : "text"
      },
      "product_name" : {
         "default" : "",
         "length" : "64",
         "name" : "product_name",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "product_code_1" : {
         "columns" : [
            "product_code"
         ],
         "name" : "product_code_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
