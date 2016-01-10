{
   "columns" : {
      "paid" : {
         "default" : "0",
         "name" : "paid",
         "null" : 0,
         "type" : "boolean"
      },
      "price_total" : {
         "default" : "0",
         "name" : "price_total",
         "null" : 0,
         "type" : "currency"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      },
      "ts_paid" : {
         "name" : "ts_paid",
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
   "index" : {},
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
