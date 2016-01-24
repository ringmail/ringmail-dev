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
      "acct_dst_1" : {
         "columns" : [
            "acct_dst"
         ],
         "name" : "acct_dst_1",
         "type" : "index"
      },
      "acct_src_1" : {
         "columns" : [
            "acct_src"
         ],
         "name" : "acct_src_1",
         "type" : "index"
      },
      "entity_1" : {
         "columns" : [
            "entity"
         ],
         "name" : "entity_1",
         "type" : "index"
      },
      "ts_1" : {
         "columns" : [
            "ts"
         ],
         "name" : "ts_1",
         "type" : "index"
      },
      "tx_type_1" : {
         "columns" : [
            "tx_type"
         ],
         "name" : "tx_type_1",
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
