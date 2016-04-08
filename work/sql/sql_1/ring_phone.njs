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
   "index" : {
      "gruu" : {
         "columns" : [
            "gruu"
         ],
         "name" : "gruu",
         "type" : "index"
      },
      "login" : {
         "columns" : [
            "login"
         ],
         "name" : "login",
         "type" : "unique"
      },
      "user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
