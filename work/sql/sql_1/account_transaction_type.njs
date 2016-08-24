{
   "columns" : {
      "name" : {
         "length" : "255",
         "name" : "name",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {
      "account_transaction_type-id" : {
         "columns" : [
            "id"
         ],
         "name" : "account_transaction_type-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
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
