{
   "columns" : {
      "active" : {
         "default" : "1",
         "name" : "active",
         "null" : 0,
         "type" : "boolean"
      },
      "category_id" : {
         "name" : "category_id",
         "null" : 1,
         "table" : "ring_category",
         "type" : "record"
      },
      "directory" : {
         "default" : "0",
         "name" : "directory",
         "null" : 0,
         "type" : "boolean"
      },
      "free" : {
         "default" : "0",
         "name" : "free",
         "null" : 0,
         "type" : "boolean"
      },
      "hashtag" : {
         "default" : "",
         "length" : "255",
         "name" : "hashtag",
         "null" : 0,
         "type" : "text"
      },
      "paid" : {
         "default" : "0",
         "name" : "paid",
         "null" : 0,
         "type" : "boolean"
      },
      "ringpage_id" : {
         "name" : "ringpage_id",
         "null" : 1,
         "table" : "ring_page",
         "type" : "record"
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
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "constraint" : {},
   "index" : {
      "category_id_1" : {
         "columns" : [
            "category_id"
         ],
         "name" : "category_id_1",
         "type" : "index"
      },
      "hashtag_1" : {
         "columns" : [
            "hashtag"
         ],
         "name" : "hashtag_1",
         "type" : "unique"
      },
      "ringpage_id_1" : {
         "columns" : [
            "ringpage_id"
         ],
         "name" : "ringpage_id_1",
         "type" : "index"
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
