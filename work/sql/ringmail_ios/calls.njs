{
   "columns" : {
      "call_duration" : {
         "default" : "",
         "length" : "64k",
         "name" : "call_duration",
         "null" : 0,
         "type" : "text"
      },
      "call_inbound" : {
         "default" : "0",
         "name" : "call_inbound",
         "null" : 0,
         "type" : "boolean"
      },
      "call_sip" : {
         "default" : "",
         "length" : "64k",
         "name" : "call_sip",
         "null" : 0,
         "type" : "text"
      },
      "call_state" : {
         "default" : "0",
         "name" : "call_state",
         "null" : 0,
         "type" : "integer"
      },
      "call_time" : {
         "default" : "",
         "length" : "64k",
         "name" : "call_time",
         "null" : 0,
         "type" : "text"
      },
      "call_uuid" : {
         "default" : "",
         "length" : "64k",
         "name" : "call_uuid",
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
      "call_sip_1" : {
         "columns" : [
            "call_sip"
         ],
         "name" : "call_sip_1",
         "type" : "index"
      },
      "call_uuid_1" : {
         "columns" : [
            "call_uuid"
         ],
         "name" : "call_uuid_1",
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
