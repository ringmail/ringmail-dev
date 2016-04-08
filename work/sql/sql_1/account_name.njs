{
   "columns" : {
      "account" : {
         "default_null" : 1,
         "name" : "account",
         "null" : 1,
         "type" : "record"
      },
      "name" : {
         "length" : "255",
         "name" : "name",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "name" : {
         "columns" : [
            "name"
         ],
         "name" : "name",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
