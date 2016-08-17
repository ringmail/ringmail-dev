{
   "columns" : {
      "did_code" : {
         "default" : "1",
         "length" : "3",
         "name" : "did_code",
         "null" : 0,
         "type" : "text"
      },
      "did_hash" : {
         "default" : "NULL",
         "length" : "64",
         "name" : "did_hash",
         "null" : 1,
         "type" : "text"
      },
      "did_number" : {
         "length" : "14",
         "name" : "did_number",
         "null" : 0,
         "type" : "text"
      }
   },
   "constraint" : {
      "ring_did-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_did-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      }
   },
   "index" : {
      "did_code_1" : {
         "columns" : [
            "did_code",
            "did_number"
         ],
         "name" : "did_code_1",
         "type" : "unique"
      },
      "did_hash_1" : {
         "columns" : [
            "did_hash"
         ],
         "name" : "did_hash_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
