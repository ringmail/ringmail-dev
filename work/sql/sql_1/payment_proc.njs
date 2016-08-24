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
      "payment_proc-id" : {
         "columns" : [
            "id"
         ],
         "name" : "payment_proc-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
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
