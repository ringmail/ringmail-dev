{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 0,
         "table" : "ring_domain",
         "type" : "record"
      },
      "username" : {
         "length" : "64",
         "name" : "username",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {
      "ring_domain_user-domain_id" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "ring_domain_user-domain_id",
         "reference_columns" : "id",
         "reference_table" : "ring_domain",
         "type" : "constraint"
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
