{
   "columns" : {
      "service_id" : {
         "name" : "service_id",
         "null" : 0,
         "type" : "record"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "user_id_1" : {
         "columns" : [
            "user_id",
            "service_id"
         ],
         "name" : "user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
