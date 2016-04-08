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
      "account_id" : {
         "columns" : [
            "account"
         ],
         "name" : "account_id",
         "type" : "index"
      },
      "card_id" : {
         "columns" : [
            "card_id"
         ],
         "name" : "card_id",
         "type" : "index"
      },
      "ref_id" : {
         "columns" : [
            "ref_id(12)"
         ],
         "name" : "ref_id",
         "type" : "index"
      },
      "reversed" : {
         "columns" : [
            "reversed"
         ],
         "name" : "reversed",
         "type" : "index"
      },
      "user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
