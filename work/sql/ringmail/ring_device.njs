{
   "columns" : {
      "device_uuid" : {
         "default" : "",
         "length" : "36",
         "name" : "device_uuid",
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
      "device_uuid_1" : {
         "columns" : [
            "device_uuid"
         ],
         "name" : "device_uuid_1",
         "type" : "unique"
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
