{
   "columns" : {
      "data" : {
         "length" : "long",
         "name" : "data",
         "null" : 0,
         "type" : "binary"
      },
      "ipv4_addr" : {
         "default" : "",
         "length" : "15",
         "name" : "ipv4_addr",
         "null" : 0,
         "type" : "text"
      },
      "secure" : {
         "default" : "0",
         "name" : "secure",
         "null" : 0,
         "type" : "boolean"
      },
      "skey" : {
         "default" : "",
         "length" : "32",
         "name" : "skey",
         "null" : 0,
         "type" : "text"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "type" : "datetime"
      },
      "ts_expires" : {
         "name" : "ts_expires",
         "null" : 0,
         "type" : "datetime"
      }
   },
   "index" : {
      "skey" : {
         "columns" : [
            "skey"
         ],
         "name" : "skey",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
