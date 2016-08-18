{
   "columns" : {
      "button" : {
         "default" : "",
         "length" : "64k",
         "name" : "button",
         "null" : 0,
         "type" : "text"
      },
      "position" : {
         "default_null" : 1,
         "name" : "position",
         "null" : 1,
         "type" : "integer"
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
   "constraint" : {
      "ring_button-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_button-id",
         "on_delete" : "",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "ring_button-ringpage_id" : {
         "columns" : [
            "ringpage_id"
         ],
         "name" : "ring_button-ringpage_id",
         "on_delete" : "CASCADE",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "ring_page",
         "type" : "constraint"
      },
      "ring_button-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_button-user_id",
         "on_delete" : "",
         "on_update" : "",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "ringpage_id_1" : {
         "columns" : [
            "ringpage_id"
         ],
         "name" : "ringpage_id_1",
         "type" : "index"
      },
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
