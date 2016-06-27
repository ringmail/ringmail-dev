{
   "columns" : {
      "conversation_code" : {
         "default" : "",
         "length" : "8",
         "name" : "conversation_code",
         "null" : 0,
         "type" : "text"
      },
      "from_user_id" : {
         "name" : "from_user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      },
      "to_user_id" : {
         "name" : "to_user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      },
      "to_user_target_id" : {
         "name" : "to_user_target_id",
         "null" : 1,
         "table" : "ring_target",
         "type" : "record"
      }
   },
   "index" : {
      "conversation_code_1" : {
         "columns" : [
            "conversation_code"
         ],
         "name" : "conversation_code_1",
         "type" : "unique"
      },
      "from_user_id_1" : {
         "columns" : [
            "from_user_id",
            "to_user_id",
            "to_user_target_id"
         ],
         "name" : "from_user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
