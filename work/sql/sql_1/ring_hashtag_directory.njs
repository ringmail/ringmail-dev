{
   "columns" : {
      "hashtag_id" : {
         "name" : "hashtag_id",
         "null" : 0,
         "table" : "ring_hashtag",
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      },
      "ts_directory" : {
         "default_null" : 1,
         "name" : "ts_directory",
         "null" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 1,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "constraint" : {
      "ring_hashtag-hashtag_id" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "ring_hashtag-hashtag_id",
         "on_delete" : "CASCADE",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "ring_hashtag",
         "type" : "constraint"
      },
      "ring_user-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_user-user_id",
         "on_delete" : "",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "hashtag_id_1" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "hashtag_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
