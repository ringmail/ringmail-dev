{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 0,
         "type" : "record"
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
         "length" : "32",
         "name" : "verify_code",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {},
   "index" : {
      "domain_id_1" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id_1",
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
