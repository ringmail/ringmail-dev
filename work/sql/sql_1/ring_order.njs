{
   "columns" : {
      "total" : {
         "default" : "0.00",
         "name" : "total",
         "null" : 0,
         "type" : "currency"
      },
      "transaction_id" : {
         "name" : "transaction_id",
         "null" : 1,
         "table" : "account_transaction",
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "constraint" : {
      "ring_order-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_order-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "ring_order-transaction_id" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "ring_order-transaction_id",
         "reference_columns" : "id",
         "reference_table" : "account_transaction",
         "type" : "constraint"
      },
      "ring_order-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_order-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "transaction_id_1" : {
         "columns" : [
            "transaction_id"
         ],
         "name" : "transaction_id_1",
         "type" : "unique"
      },
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
