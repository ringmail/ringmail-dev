{
   "columns" : {
      "hashtag" : {
         "default" : "",
         "length" : "255",
         "name" : "hashtag",
         "null" : 0,
         "type" : "text"
      },
      "target_url" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "target_url",
         "null" : 1,
         "type" : "text"
      },
      "ts_expires" : {
         "default_null" : 1,
         "name" : "ts_expires",
         "null" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "hashtag_1" : {
         "columns" : [
            "hashtag"
         ],
         "name" : "hashtag_1",
         "type" : "unique"
      },
      "ts_expires_1" : {
         "columns" : [
            "ts_expires"
         ],
         "name" : "ts_expires_1",
         "type" : "index"
      },
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
