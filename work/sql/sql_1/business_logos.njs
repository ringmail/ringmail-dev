{
   "columns" : {
      "name" : {
         "default" : "",
         "length" : "48",
         "name" : "name",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "name_1" : {
         "columns" : [
            "name"
         ],
         "name" : "name_1",
         "type" : "unique"
      },
      "name_index_1" : {
         "columns" : [
            "name"
         ],
         "name" : "name_index_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
