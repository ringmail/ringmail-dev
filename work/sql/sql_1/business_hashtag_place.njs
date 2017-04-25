{
   "columns" : {
      "hashtag" : {
         "default" : "",
         "length" : "255",
         "name" : "hashtag",
         "null" : 0,
         "type" : "text"
      },
      "place_id" : {
         "name" : "place_id",
         "null" : 0,
         "table" : "business_place",
         "type" : "record"
      }
   },
   "index" : {
      "hashtag_1" : {
         "columns" : [
            "hashtag"
         ],
         "name" : "hashtag_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
