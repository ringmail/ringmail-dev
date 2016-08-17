{
   "columns" : {
      "gruu" : {
         "default" : "NULL",
         "length" : "36",
         "name" : "gruu",
         "null" : 1,
         "type" : "text"
      },
      "login" : {
         "length" : "255",
         "name" : "login",
         "null" : 0,
         "type" : "text"
      },
      "password" : {
         "length" : "32",
         "name" : "password",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "constraint" : {
      "ring_phone-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_phone-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "ring_phone-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_phone-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "gruu_1" : {
         "columns" : [
            "gruu"
         ],
         "name" : "gruu_1",
         "type" : "index"
      },
      "login_1" : {
         "columns" : [
            "login"
         ],
         "name" : "login_1",
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
      "name" : "id",
      "type" : "record"
   }
}
