{
   "columns" : {
      "error_data" : {
         "length" : "64k",
         "name" : "error_data",
         "null" : 0,
         "type" : "binary"
      },
      "error_summary" : {
         "length" : "16",
         "name" : "error_summary",
         "null" : 0,
         "type" : "text"
      },
      "error_text" : {
         "length" : "255",
         "name" : "error_text",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {
      "payment_error-id" : {
         "columns" : [
            "id"
         ],
         "name" : "payment_error-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      }
   },
   "index" : {},
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
