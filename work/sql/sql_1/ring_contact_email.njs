{
   "columns" : {
      "contact_id" : {
         "name" : "contact_id",
         "null" : 0,
         "type" : "record"
      },
      "email_hash" : {
         "default" : "",
         "length" : "64",
         "name" : "email_hash",
         "null" : 0,
         "type" : "text"
      },
      "matched_user_id" : {
         "default_null" : 1,
         "name" : "matched_user_id",
         "null" : 1,
         "type" : "record"
      }
   },
   "index" : {
      "contact_id_1" : {
         "columns" : [
            "contact_id",
            "email_hash"
         ],
         "name" : "contact_id_1",
         "type" : "unique"
      },
      "email_hash_1" : {
         "columns" : [
            "email_hash"
         ],
         "name" : "email_hash_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
