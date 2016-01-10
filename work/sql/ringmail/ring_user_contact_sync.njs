{
   "columns" : {
      "device_id" : {
         "name" : "device_id",
         "null" : 0,
         "table" : "ring_device",
         "type" : "record"
      },
      "ts_latest" : {
         "name" : "ts_latest",
         "null" : 0,
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
      "user_id_1" : {
         "columns" : [
            "user_id",
            "device_id"
         ],
         "name" : "user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
