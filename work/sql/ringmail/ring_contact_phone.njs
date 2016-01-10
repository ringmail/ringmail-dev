{
   "columns" : {
      "contact_id" : {
         "name" : "contact_id",
         "null" : 0,
         "table" : "ring_contact",
         "type" : "record"
      },
      "matched_user_id" : {
         "name" : "matched_user_id",
         "null" : 1,
         "table" : "ring_user",
         "type" : "record"
      },
      "phone_hash" : {
         "default" : "",
         "length" : "64",
         "name" : "phone_hash",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "contact_id_1" : {
         "columns" : [
            "contact_id",
            "phone_hash"
         ],
         "name" : "contact_id_1",
         "type" : "unique"
      },
      "phone_hash_1" : {
         "columns" : [
            "phone_hash"
         ],
         "name" : "phone_hash_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
