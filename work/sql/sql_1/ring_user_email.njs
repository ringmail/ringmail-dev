{
   "columns" : {
      "email_id" : {
         "name" : "email_id",
         "null" : 0,
         "type" : "record"
      },
      "primary_email" : {
         "default" : "0",
         "name" : "primary_email",
         "null" : 0,
         "type" : "boolean"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "email_id_1" : {
         "columns" : [
            "email_id"
         ],
         "name" : "email_id_1",
         "type" : "index"
      },
      "user_1" : {
         "columns" : [
            "user_id",
            "email_id"
         ],
         "name" : "user_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
