{
   "columns" : {
      "msg_body" : {
         "default" : "",
         "length" : "64k",
         "name" : "msg_body",
         "null" : 0,
         "type" : "text"
      },
      "msg_data" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "msg_data",
         "null" : 1,
         "type" : "text"
      },
      "msg_inbound" : {
         "default" : "0",
         "name" : "msg_inbound",
         "null" : 0,
         "type" : "boolean"
      },
      "msg_read" : {
         "default" : "0",
         "name" : "msg_read",
         "null" : 0,
         "type" : "boolean"
      },
      "msg_status" : {
         "default" : "",
         "length" : "64k",
         "name" : "msg_status",
         "null" : 0,
         "type" : "text"
      },
      "msg_time" : {
         "default" : "",
         "length" : "64k",
         "name" : "msg_time",
         "null" : 0,
         "type" : "text"
      },
      "msg_type" : {
         "default" : "text/plain",
         "length" : "64k",
         "name" : "msg_type",
         "null" : 0,
         "type" : "text"
      },
      "msg_url" : {
         "default_null" : 1,
         "length" : "64k",
         "name" : "msg_url",
         "null" : 1,
         "type" : "text"
      },
      "msg_uuid" : {
         "default" : "",
         "length" : "64k",
         "name" : "msg_uuid",
         "null" : 0,
         "type" : "text"
      },
      "session_id" : {
         "default" : "0",
         "name" : "session_id",
         "null" : 0,
         "type" : "integer"
      }
   },
   "index" : {
      "msg_uuid_1" : {
         "columns" : [
            "msg_uuid"
         ],
         "name" : "msg_uuid_1",
         "type" : "index"
      },
      "session_id_1" : {
         "columns" : [
            "session_id"
         ],
         "name" : "session_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
