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
   "constraint" : {
      "ring_user_email-email_id" : {
         "columns" : [
            "email_id"
         ],
         "name" : "ring_user_email-email_id",
         "reference_columns" : "id",
         "reference_table" : "ring_email",
         "type" : "constraint"
      },
      "ring_user_email-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_user_email-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
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
      "user_id_1" : {
         "columns" : [
            "user_id",
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
