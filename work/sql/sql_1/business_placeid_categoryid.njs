{
   "columns" : {
      "category_id" : {
         "name" : "category_id",
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
      "category_id_1" : {
         "columns" : [
            "category_id"
         ],
         "name" : "category_id_1",
         "type" : "index"
      },
      "place_id_1" : {
         "columns" : [
            "place_id"
         ],
         "name" : "place_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
