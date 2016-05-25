{
   "columns" : {
      "item_hash" : {
         "default" : "",
         "length" : "64k",
         "name" : "item_hash",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "item_hash_1" : {
         "columns" : [
            "item_hash"
         ],
         "name" : "item_hash_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
