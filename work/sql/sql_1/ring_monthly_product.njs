{
   "columns" : {
      "monthly_price" : {
         "name" : "monthly_price",
         "null" : 0,
         "type" : "currency"
      },
      "product_id" : {
         "name" : "product_id",
         "null" : 0,
         "type" : "record"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
