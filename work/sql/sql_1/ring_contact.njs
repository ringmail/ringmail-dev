{
   "columns" : {
      "device_id" : {
         "name" : "device_id",
         "null" : 0,
         "type" : "record"
      },
      "first_name" : {
         "default" : "NULL",
         "length" : "128",
         "name" : "first_name",
         "null" : 1,
         "type" : "text"
      },
      "internal_id" : {
         "default" : "0",
         "name" : "internal_id",
         "null" : 0,
         "type" : "integer"
      },
      "last_name" : {
         "default" : "NULL",
         "length" : "128",
         "name" : "last_name",
         "null" : 1,
         "type" : "text"
      },
      "matched_user_id" : {
         "default_null" : 1,
         "name" : "matched_user_id",
         "null" : 1,
         "type" : "record"
      },
      "organization" : {
         "default" : "NULL",
         "length" : "128",
         "name" : "organization",
         "null" : 1,
         "type" : "text"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      },
      "ts_updated" : {
         "name" : "ts_updated",
         "null" : 0,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "device_id_1" : {
         "columns" : [
            "device_id",
            "internal_id"
         ],
         "name" : "device_id_1",
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
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
