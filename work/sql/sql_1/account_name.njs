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
      "name_1" : {
         "columns" : [
            "name"
         ],
         "name" : "name_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}