{
   "columns" : {
      "favorite" : {
         "default" : "0",
         "name" : "favorite",
         "null" : 0,
         "type" : "boolean"
      },
      "hide" : {
         "default" : "0",
         "name" : "hide",
         "null" : 0,
         "type" : "integer"
      },
      "session_md5" : {
         "default" : "",
         "length" : "64k",
         "name" : "session_md5",
         "null" : 0,
         "type" : "text"
      },
      "session_tag" : {
         "default" : "",
         "length" : "64k",
         "name" : "session_tag",
         "null" : 0,
         "type" : "text"
      },
      "ts_last_event" : {
         "name" : "ts_last_event",
         "null" : 0,
         "type" : "datetime"
      },
      "unread" : {
         "default" : "0",
         "name" : "unread",
         "null" : 0,
         "type" : "integer"
      }
   },
   "index" : {
      "session_md5_1" : {
         "columns" : [
            "session_md5"
         ],
         "name" : "session_md5_1",
         "type" : "index"
      },
      "session_tag_1" : {
         "columns" : [
            "session_tag"
         ],
         "name" : "session_tag_1",
         "type" : "unique"
      },
      "ts_last_event_1" : {
         "columns" : [
            "ts_last_event"
         ],
         "name" : "ts_last_event_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
