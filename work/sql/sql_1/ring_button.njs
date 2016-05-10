{
   "columns" : {
      "button" : {
         "default" : "",
         "length" : "64k",
         "name" : "button",
         "null" : 0,
         "type" : "text"
      },
      "ringpage_id" : {
         "name" : "ringpage_id",
         "null" : 0,
         "table" : "ring_page",
         "type" : "record"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 1,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "uri" : {
         "default" : "",
         "length" : "64k",
         "name" : "uri",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "button-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "button-user_id",
         "type" : "index"
      },
      "ring_button-ringpage_id" : {
         "columns" : [
            "ringpage_id"
         ],
         "name" : "ring_button-ringpage_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
