{
   "columns" : {
      "account" : {
         "name" : "account",
         "null" : 0,
         "table" : "account",
         "type" : "record"
      },
      "attempt" : {
         "name" : "attempt",
         "null" : 1,
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "constraint" : {},
   "index" : {
      "account_id" : {
         "columns" : [
            "account"
         ],
         "name" : "account_id",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
