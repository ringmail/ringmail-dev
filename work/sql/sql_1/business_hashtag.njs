{
   "columns" : {
      "hashtag" : {
         "default" : "",
         "length" : "255",
         "name" : "hashtag",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "uk_hashtag" : {
         "columns" : [
            "hashtag"
         ],
         "name" : "uk_hashtag",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
