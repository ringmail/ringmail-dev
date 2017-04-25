{
   "columns" : {
      "domain" : {
         "length" : "64",
         "name" : "domain",
         "null" : 0,
         "type" : "text"
      },
      "domain_reverse" : {
         "length" : "64",
         "name" : "domain_reverse",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {
   },
   "index" : {
      "domain_1" : {
         "columns" : [
            "domain"
         ],
         "name" : "domain_1",
         "type" : "unique"
      },
      "domain_reverse_2" : {
         "columns" : [
            "domain_reverse"
         ],
         "name" : "domain_reverse_2",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
