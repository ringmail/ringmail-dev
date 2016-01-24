{
   "columns" : {
      "did_id" : {
         "name" : "did_id",
         "null" : 0,
         "type" : "record"
      },
      "did_label" : {
         "length" : "64",
         "name" : "did_label",
         "null" : 0,
         "type" : "text"
      },
      "did_type" : {
         "length" : "16",
         "name" : "did_type",
         "null" : 0,
         "type" : "text"
      },
      "ts_added" : {
         "name" : "ts_added",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      },
      "verified" : {
         "default" : "0",
         "name" : "verified",
         "null" : 0,
         "type" : "boolean"
      }
   },
   "index" : {
      "user_id_1" : {
         "columns" : [
            "user_id",
            "did_id"
         ],
         "name" : "user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
