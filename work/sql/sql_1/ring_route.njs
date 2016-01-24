{
   "columns" : {
      "did_id" : {
         "default_null" : 1,
         "name" : "did_id",
         "null" : 1,
         "type" : "record"
      },
      "email_id" : {
         "default_null" : 1,
         "name" : "email_id",
         "null" : 1,
         "type" : "record"
      },
      "phone_id" : {
         "default_null" : 1,
         "name" : "phone_id",
         "null" : 1,
         "type" : "record"
      },
      "route_type" : {
         "length" : "16",
         "name" : "route_type",
         "null" : 0,
         "type" : "text"
      },
      "sip_id" : {
         "default_null" : 1,
         "name" : "sip_id",
         "null" : 1,
         "type" : "record"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "user_id_1" : {
         "columns" : [
            "user_id",
            "sip_id",
            "did_id",
            "phone_id",
            "email_id"
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
