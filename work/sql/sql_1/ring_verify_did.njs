{
   "columns" : {
      "did_id" : {
         "name" : "did_id",
         "null" : 0,
         "type" : "record"
      },
      "tries" : {
         "default" : "0",
         "name" : "tries",
         "null" : 1,
         "type" : "integer"
      },
      "ts_added" : {
         "name" : "ts_added",
         "null" : 0,
         "type" : "datetime"
      },
      "ts_verified" : {
         "default_null" : 1,
         "name" : "ts_verified",
         "null" : 1,
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
      },
      "verify_code" : {
         "length" : "6",
         "name" : "verify_code",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "did_id_1" : {
         "columns" : [
            "did_id"
         ],
         "name" : "did_id_1",
         "type" : "unique"
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
      "name" : "id",
      "type" : "record"
   }
}
