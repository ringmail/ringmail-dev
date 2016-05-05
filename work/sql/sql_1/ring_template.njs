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
      }
   },
   "index" : {
      "template" : {
         "columns" : [
            "template"
         ],
         "name" : "template",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
