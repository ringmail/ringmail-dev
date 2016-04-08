{
   "columns" : {
      "did_id" : {
         "default_null" : 1,
         "name" : "did_id",
         "null" : 1,
         "type" : "record"
      },
      "domain_id" : {
         "default_null" : 1,
         "name" : "domain_id",
         "null" : 1,
         "type" : "record"
      },
      "email_id" : {
         "default_null" : 1,
         "name" : "email_id",
         "null" : 1,
         "type" : "record"
      },
      "target_type" : {
         "length" : "16",
         "name" : "target_type",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "did_id" : {
         "columns" : [
            "did_id"
         ],
         "name" : "did_id",
         "type" : "unique"
      },
      "domain_id" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id",
         "type" : "unique"
      },
      "email_id" : {
         "columns" : [
            "email_id"
         ],
         "name" : "email_id",
         "type" : "unique"
      },
      "user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
