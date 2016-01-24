{
   "columns" : {
      "route_id" : {
         "name" : "route_id",
         "null" : 0,
         "type" : "record"
      },
      "seq" : {
         "name" : "seq",
         "null" : 0,
         "type" : "integer"
      },
      "target_id" : {
         "name" : "target_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "route_id_1" : {
         "columns" : [
            "route_id"
         ],
         "name" : "route_id_1",
         "type" : "index"
      },
      "target_id_1" : {
         "columns" : [
            "target_id",
            "seq"
         ],
         "name" : "target_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
