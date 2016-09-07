{
   "columns" : {
      "accepted" : {
         "default" : "0",
         "name" : "accepted",
         "null" : 0,
         "type" : "boolean"
      },
      "account" : {
         "name" : "account",
         "null" : 0,
         "table" : "account",
         "type" : "record"
      },
      "amount" : {
         "default" : "0",
         "name" : "amount",
         "null" : 0,
         "type" : "currency"
      },
      "card_id" : {
         "name" : "card_id",
         "null" : 0,
         "table" : "payment_card",
         "type" : "record"
      },
      "error" : {
         "name" : "error",
         "null" : 1,
         "table" : "payment_error",
         "type" : "record"
      },
      "payment" : {
         "name" : "payment",
         "null" : 1,
         "table" : "payment",
         "type" : "record"
      },
      "proc_id" : {
         "name" : "proc_id",
         "null" : 0,
         "table" : "payment_proc",
         "type" : "record"
      },
      "result" : {
         "length" : "16",
         "name" : "result",
         "null" : 0,
         "type" : "text"
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
      "payment_attempt-account_id" : {
         "columns" : [
            "account"
         ],
         "name" : "payment_attempt-account_id",
         "reference_columns" : "id",
         "reference_table" : "account",
         "type" : "constraint"
      },
      "payment_attempt-card_id" : {
         "columns" : [
            "card_id"
         ],
         "name" : "payment_attempt-card_id",
         "reference_columns" : "id",
         "reference_table" : "payment_card",
         "type" : "constraint"
      },
      "payment_attempt-error_id" : {
         "columns" : [
            "error"
         ],
         "name" : "payment_attempt-error_id",
         "reference_columns" : "id",
         "reference_table" : "payment_error",
         "type" : "constraint"
      },
      "payment_attempt-payment_id" : {
         "columns" : [
            "payment"
         ],
         "name" : "payment_attempt-payment_id",
         "reference_columns" : "id",
         "reference_table" : "payment",
         "type" : "constraint"
      },
      "payment_attempt-proc_id" : {
         "columns" : [
            "proc_id"
         ],
         "name" : "payment_attempt-proc_id",
         "reference_columns" : "id",
         "reference_table" : "payment_proc",
         "type" : "constraint"
      },
      "payment_attempt-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "payment_attempt-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "account_1" : {
         "columns" : [
            "account"
         ],
         "name" : "account_1",
         "type" : "index"
      },
      "card_id_1" : {
         "columns" : [
            "card_id"
         ],
         "name" : "card_id_1",
         "type" : "index"
      },
      "error_id_1" : {
         "columns" : [
            "error"
         ],
         "name" : "error_id_1",
         "type" : "index"
      },
      "payment_id" : {
         "columns" : [
            "payment"
         ],
         "name" : "payment_id",
         "type" : "index"
      },
      "proc_id_1" : {
         "columns" : [
            "proc_id"
         ],
         "name" : "proc_id_1",
         "type" : "index"
      },
      "user_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
