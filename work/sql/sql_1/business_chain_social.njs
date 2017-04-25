{
   "columns" : {
      "chain_name" : {
         "default" : "",
         "length" : "128",
         "name" : "chain_name",
         "null" : 0,
         "type" : "text"
      },
      "twitter_id" : {
         "default" : "",
         "length" : "128",
         "name" : "twitter_id",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "chain_twitter_1" : {
         "columns" : [
            "chain_name",
            "twitter_id"
         ],
         "name" : "chain_twitter_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
