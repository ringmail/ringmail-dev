{
   "columns" : {
      "path" : {
         "default" : "",
         "length" : "128",
         "name" : "path",
         "null" : 0,
         "type" : "text"
      },
      "template" : {
         "default" : "",
         "length" : "128",
         "name" : "template",
         "null" : 0,
         "type" : "text"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 1,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "template-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "template-user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
