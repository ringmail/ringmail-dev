{
   "columns" : {
      "button_id" : {
         "name" : "button_id",
         "null" : 0,
         "table" : "button",
         "type" : "record"
      },
      "ringpage_id" : {
         "name" : "ringpage_id",
         "null" : 0,
         "table" : "ringpage",
         "type" : "record"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "ringpage_button-button_id" : {
         "columns" : [
            "button_id"
         ],
         "name" : "ringpage_button-button_id",
         "type" : "index"
      },
      "ringpage_button-ringpage_id" : {
         "columns" : [
            "ringpage_id"
         ],
         "name" : "ringpage_button-ringpage_id",
         "type" : "index"
      },
      "ringpage_button-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ringpage_button-user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
