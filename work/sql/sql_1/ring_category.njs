{
   "columns" : {
      "category" : {
         "default" : "",
         "length" : "255",
         "name" : "category",
         "null" : 0,
         "type" : "text"
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
