{
   "columns" : {
      "active" : {
         "default" : "0",
         "name" : "active",
         "null" : 0,
         "type" : "boolean"
      },
      "aws_user_id" : {
         "default_null" : 1,
         "length" : "32",
         "name" : "aws_user_id",
         "null" : 1,
         "type" : "text"
      },
      "login" : {
         "length" : "255",
         "name" : "login",
         "null" : 0,
         "type" : "text"
      },
      "password_chat" : {
         "default_null" : 1,
         "length" : "32",
         "name" : "password_chat",
         "null" : 1,
         "type" : "text"
      },
      "password_fs" : {
         "default" : "NULL",
         "length" : "32",
         "name" : "password_fs",
         "null" : 1,
         "type" : "text"
      },
      "password_hash" : {
         "default" : "NULL",
         "length" : "128",
         "name" : "password_hash",
         "null" : 1,
         "type" : "text"
      },
      "password_salt" : {
         "default" : "NULL",
         "length" : "128",
         "name" : "password_salt",
         "null" : 1,
         "type" : "text"
      },
      "person" : {
         "default_null" : 1,
         "name" : "person",
         "null" : 1,
         "type" : "record"
      },
      "verified" : {
         "default" : "0",
         "name" : "verified",
         "null" : 1,
         "type" : "boolean"
      }
   },
   "constraint" : {
   },
   "index" : {
      "aws_user_id_1" : {
         "columns" : [
            "aws_user_id"
         ],
         "name" : "aws_user_id_1",
         "type" : "unique"
      },
      "login_1" : {
         "columns" : [
            "login"
         ],
         "name" : "login_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
