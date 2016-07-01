{
   "columns" : {
      "fields" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "fields",
         "null" : 1,
         "type" : "text"
      },
      "ringpage" : {
         "default" : "",
         "length" : "128",
         "name" : "ringpage",
         "null" : 0,
         "type" : "text"
      },
      "template" : {
         "default" : "",
         "length" : "255",
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
         "null" : 0,
         "table" : "ring_user",
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
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
