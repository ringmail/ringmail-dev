{
   "columns" : {
      "address" : {
         "default" : "NULL",
         "length" : "255",
         "name" : "address",
         "null" : 1,
         "type" : "text"
      },
      "address2" : {
         "default" : "NULL",
         "length" : "255",
         "name" : "address2",
         "null" : 1,
         "type" : "text"
      },
      "cc_expm" : {
         "length" : "2",
         "name" : "cc_expm",
         "null" : 0,
         "type" : "text"
      },
      "cc_expy" : {
         "length" : "4",
         "name" : "cc_expy",
         "null" : 0,
         "type" : "text"
      },
      "cc_post" : {
         "length" : "6",
         "name" : "cc_post",
         "null" : 0,
         "type" : "text"
      },
      "cc_type" : {
         "length" : "32",
         "name" : "cc_type",
         "null" : 0,
         "type" : "text"
      },
      "city" : {
         "default" : "NULL",
         "length" : "255",
         "name" : "city",
         "null" : 1,
         "type" : "text"
      },
      "data" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "data",
         "null" : 1,
         "type" : "binary"
      },
      "data_enc" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "data_enc",
         "null" : 1,
         "type" : "binary"
      },
      "deleted" : {
         "default" : "0",
         "name" : "deleted",
         "null" : 0,
         "type" : "boolean"
      },
      "first_name" : {
         "default" : "NULL",
         "length" : "255",
         "name" : "first_name",
         "null" : 1,
         "type" : "text"
      },
      "last_name" : {
         "default" : "NULL",
         "length" : "255",
         "name" : "last_name",
         "null" : 1,
         "type" : "text"
      },
      "state" : {
         "default" : "NULL",
         "length" : "2",
         "name" : "state",
         "null" : 1,
         "type" : "text"
      },
      "use_contact" : {
         "default" : "0",
         "name" : "use_contact",
         "null" : 0,
         "type" : "boolean"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      },
      "zip" : {
         "default" : "NULL",
         "length" : "5",
         "name" : "zip",
         "null" : 1,
         "type" : "text"
      }
   },
   "index" : {
      "user_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
