{
   "columns" : {
      "call_length" : {
         "default_null" : 1,
         "name" : "call_length",
         "null" : 1,
         "type" : "integer"
      },
      "caller_id" : {
         "name" : "caller_id",
         "null" : 0,
         "type" : "record"
      },
      "caller_user_id" : {
         "name" : "caller_user_id",
         "null" : 0,
         "type" : "record"
      },
      "fs_uuid_aleg" : {
         "default" : "NULL",
         "length" : "36",
         "name" : "fs_uuid_aleg",
         "null" : 1,
         "type" : "text"
      },
      "target_did_id" : {
         "default_null" : 1,
         "name" : "target_did_id",
         "null" : 1,
         "type" : "record"
      },
      "target_domain_id" : {
         "default_null" : 1,
         "name" : "target_domain_id",
         "null" : 1,
         "type" : "record"
      },
      "target_email_id" : {
         "default_null" : 1,
         "name" : "target_email_id",
         "null" : 1,
         "type" : "record"
      },
      "target_type" : {
         "name" : "target_type",
         "null" : 0,
         "type" : "record"
      },
      "target_user_id" : {
         "default_null" : 1,
         "name" : "target_user_id",
         "null" : 1,
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "index" : {
      "caller_user_id_1" : {
         "columns" : [
            "caller_user_id",
            "ts"
         ],
         "name" : "caller_user_id_1",
         "type" : "index"
      },
      "fs_uuid_aleg_1" : {
         "columns" : [
            "fs_uuid_aleg"
         ],
         "name" : "fs_uuid_aleg_1",
         "type" : "index"
      },
      "target_user_id_1" : {
         "columns" : [
            "target_user_id",
            "ts"
         ],
         "name" : "target_user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
