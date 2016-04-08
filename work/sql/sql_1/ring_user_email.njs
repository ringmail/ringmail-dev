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
      "email_id" : {
         "columns" : [
            "email_id"
         ],
         "name" : "email_id",
         "type" : "index"
      },
      "user_id" : {
         "columns" : [
            "user_id",
            "email_id"
         ],
         "name" : "user_id",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
