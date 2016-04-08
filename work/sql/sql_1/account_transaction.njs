{
   "columns" : {
      "acct_dst" : {
         "name" : "acct_dst",
         "null" : 0,
         "type" : "record"
      },
      "acct_src" : {
         "name" : "acct_src",
         "null" : 0,
         "type" : "record"
      },
      "amount" : {
         "name" : "amount",
         "null" : 0,
         "type" : "currency"
      },
      "entity" : {
         "default_null" : 1,
         "name" : "entity",
         "null" : 1,
         "type" : "record"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "tx_type" : {
         "name" : "tx_type",
         "null" : 0,
         "type" : "record"
      },
      "user_id" : {
         "default_null" : 1,
         "name" : "user_id",
         "null" : 1,
         "type" : "record"
      }
   },
   "index" : {
      "acct_dst" : {
         "columns" : [
            "acct_dst"
         ],
         "name" : "acct_dst",
         "type" : "index"
      },
      "acct_src" : {
         "columns" : [
            "acct_src"
         ],
         "name" : "acct_src",
         "type" : "index"
      },
      "entity" : {
         "columns" : [
            "entity"
         ],
         "name" : "entity",
         "type" : "index"
      },
      "tx_type" : {
         "columns" : [
            "tx_type"
         ],
         "name" : "tx_type",
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
