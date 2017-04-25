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
   "constraint" : {},
   "index" : {
      "domain_id_1" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id_1",
         "type" : "index"
      },
      "user_id_1" : {
         "columns" : [
            "user_id",
            "domain_id"
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
