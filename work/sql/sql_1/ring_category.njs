{
   "columns" : {
      "category" : {
         "default" : "",
         "length" : "255",
         "name" : "category",
         "null" : 0,
         "type" : "text"
      },
      "category_id" : {
         "name" : "category_id",
         "null" : 1,
         "table" : "ring_category",
         "type" : "record"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "index" : {
      "category" : {
         "columns" : [
            "category"
         ],
         "name" : "category",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
