{
   "columns" : {
      "factual_category_id" : {
         "name" : "factual_category_id",
         "null" : 0,
         "table" : "business_category",
         "type" : "record"
      },
      "place_id" : {
         "name" : "place_id",
         "null" : 0,
         "table" : "business_place",
         "type" : "record"
      }
   },
   "index" : {
      "factual_category_id_1" : {
         "columns" : [
            "factual_category_id"
         ],
         "name" : "factual_category_id_1",
         "type" : "index"
      },
      "place_id_1" : {
         "columns" : [
            "place_id",
            "factual_category_id"
         ],
         "name" : "place_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
