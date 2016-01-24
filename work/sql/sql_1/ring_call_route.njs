{
   "columns" : {
      "call_id" : {
         "name" : "call_id",
         "null" : 0,
         "type" : "record"
      },
      "fs_uuid_bleg" : {
         "default" : "NULL",
         "length" : "36",
         "name" : "fs_uuid_bleg",
         "null" : 1,
         "type" : "text"
      },
      "result" : {
         "length" : "32",
         "name" : "result",
         "null" : 0,
         "type" : "text"
      },
      "route_did_id" : {
         "default_null" : 1,
         "name" : "route_did_id",
         "null" : 1,
         "type" : "record"
      },
      "route_phone_id" : {
         "default_null" : 1,
         "name" : "route_phone_id",
         "null" : 1,
         "type" : "record"
      },
      "route_seq" : {
         "name" : "route_seq",
         "null" : 0,
         "type" : "integer"
      },
      "route_sip_id" : {
         "default_null" : 1,
         "name" : "route_sip_id",
         "null" : 1,
         "type" : "record"
      },
      "route_type" : {
         "length" : "16",
         "name" : "route_type",
         "null" : 0,
         "type" : "text"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "ts_bridged" : {
         "default_null" : 1,
         "name" : "ts_bridged",
         "null" : 1,
         "type" : "datetime"
      },
      "ts_end" : {
         "default_null" : 1,
         "name" : "ts_end",
         "null" : 1,
         "type" : "datetime"
      }
   },
   "index" : {
      "call_id_1" : {
         "columns" : [
            "call_id"
         ],
         "name" : "call_id_1",
         "type" : "index"
      },
      "fs_uuid_bleg_1" : {
         "columns" : [
            "fs_uuid_bleg"
         ],
         "name" : "fs_uuid_bleg_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
