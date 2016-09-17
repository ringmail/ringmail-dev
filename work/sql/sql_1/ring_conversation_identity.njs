{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 1,
         "table" : "ring_domain",
         "type" : "record"
      },
      "hashtag_id" : {
         "name" : "hashtag_id",
         "null" : 1,
         "table" : "ring_hashtag",
         "type" : "record"
      },
      "identity_type" : {
         "default" : "",
         "length" : "32",
         "name" : "identity_type",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "domain_id_1" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id_1",
         "type" : "unique"
      },
      "hashtag_id_1" : {
         "columns" : [
            "hashtag_id"
         ],
         "name" : "hashtag_id_1",
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
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
