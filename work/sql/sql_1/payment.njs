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
         "type" : "record"
      },
      "amount" : {
         "name" : "amount",
         "null" : 0,
         "type" : "currency"
      },
      "card_id" : {
         "default_null" : 1,
         "name" : "card_id",
         "null" : 1,
         "type" : "record"
      },
      "proc_id" : {
         "name" : "proc_id",
         "null" : 0,
         "type" : "record"
      },
      "ref_id" : {
         "length" : "255",
         "name" : "ref_id",
         "null" : 0,
         "type" : "text"
      },
      "ref_id_2" : {
         "length" : "255",
         "name" : "ref_id_2",
         "null" : 0,
         "type" : "text"
      },
      "reversed" : {
         "default_null" : 1,
         "name" : "reversed",
         "null" : 1,
         "type" : "datetime"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
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
      "payment-proc_id" : {
         "columns" : [
            "proc_id"
         ],
         "name" : "payment-proc_id",
         "type" : "index"
      },
      "ref_id_1" : {
         "columns" : [
            "ref_id(12)"
         ],
         "name" : "ref_id_1",
         "type" : "index"
      },
      "reversed_1" : {
         "columns" : [
            "reversed"
         ],
         "name" : "reversed_1",
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
