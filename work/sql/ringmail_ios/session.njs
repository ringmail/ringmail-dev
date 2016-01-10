{
   "columns" : {
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
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
