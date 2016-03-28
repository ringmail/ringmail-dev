{
   "columns" : {
      "call_id" : {
         "name" : "call_id",
         "null" : 1,
         "table" : "calls",
         "type" : "record"
      },
      "chat_id" : {
         "name" : "chat_id",
         "null" : 1,
         "table" : "chat",
         "type" : "record"
      },
      "session_id" : {
         "name" : "session_id",
         "null" : 0,
         "table" : "session",
         "type" : "record"
      },
      "ts_latest" : {
         "name" : "ts_latest",
         "null" : 0,
         "type" : "datetime"
      }
   },
   "index" : {},
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
