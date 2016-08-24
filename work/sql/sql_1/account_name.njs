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
   "constraint" : {
      "account_name-account_id" : {
         "columns" : [
            "account"
         ],
         "name" : "account_name-account_id",
         "reference_columns" : "id",
         "reference_table" : "account",
         "type" : "constraint"
      },
      "account_name-id" : {
         "columns" : [
            "id"
         ],
         "name" : "account_name-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      }
   },
   "index" : {
      "account_id_1" : {
         "columns" : [
            "account"
         ],
         "name" : "account_id_1",
         "type" : "index"
      },
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
