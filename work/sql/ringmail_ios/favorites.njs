{
   "columns" : {
      "contact_id" : {
         "name" : "contact_id",
         "null" : 1,
         "type" : "record"
      },
      "favorite_type" : {
         "default" : "",
         "length" : "64",
         "name" : "favorite_type",
         "null" : 0,
         "type" : "text"
      },
      "session_id" : {
         "name" : "session_id",
         "null" : 1,
         "type" : "record"
      }
   },
   "index" : {
      "contact_id_1" : {
         "columns" : [
            "contact_id"
         ],
         "name" : "contact_id_1",
         "type" : "unique"
      },
      "session_id_1" : {
         "columns" : [
            "session_id"
         ],
         "name" : "session_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
