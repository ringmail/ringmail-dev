{
   "columns" : {
      "main_token" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "main_token",
         "null" : 1,
         "type" : "text"
      },
      "push_app" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "push_app",
         "null" : 1,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      },
      "voip_token" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "voip_token",
         "null" : 1,
         "type" : "text"
      }
   },
   "index" : {
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
