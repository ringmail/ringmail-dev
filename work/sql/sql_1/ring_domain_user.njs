{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 0,
         "type" : "record"
      },
      "username" : {
         "length" : "64",
         "name" : "username",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "domain_id_1" : {
         "columns" : [
            "domain_id",
            "username"
         ],
         "name" : "domain_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
