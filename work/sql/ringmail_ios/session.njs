{
   "columns" : {
      "contact_id" : {
         "name" : "contact_id",
         "null" : 1,
         "type" : "record"
      },
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
      "label" : {
         "default_null" : 1,
         "length" : "255",
         "name" : "label",
         "null" : 1,
         "type" : "text"
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
      },
      "uuid" : {
         "default" : "",
         "length" : "36",
         "name" : "uuid",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "contact_id_1" : {
         "columns" : [
            "contact_id"
         ],
         "name" : "contact_id_1",
         "type" : "unique"
      },
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
      },
      "uuid_1" : {
         "columns" : [
            "uuid"
         ],
         "name" : "uuid_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
