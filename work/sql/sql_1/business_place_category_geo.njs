{
   "columns" : {
      "business_hashtag_id" : {
         "name" : "business_hashtag_id",
         "null" : 0,
         "table" : "business_hashtag",
         "type" : "record"
      },
      "category_id" : {
         "name" : "category_id",
         "null" : 0,
         "table" : "business_category",
         "type" : "record"
      },
      "latitude" : {
         "default_null" : 1,
         "name" : "latitude",
         "null" : 1,
         "type" : "float"
      },
      "longitude" : {
         "default_null" : 1,
         "name" : "longitude",
         "null" : 1,
         "type" : "float"
      },
      "place_id" : {
         "name" : "place_id",
         "null" : 0,
         "table" : "business_place",
         "type" : "record"
      }
   },
   "index" : {
      "business_hashtag_id_1" : {
         "columns" : [
            "business_hashtag_id"
         ],
         "name" : "business_hashtag_id_1",
         "type" : "index"
      },
      "category_id_1" : {
         "columns" : [
            "category_id"
         ],
         "name" : "category_id_1",
         "type" : "index"
      },
      "latitude_1" : {
         "columns" : [
            "latitude"
         ],
         "name" : "latitude_1",
         "type" : "index"
      },
      "longitude_1" : {
         "columns" : [
            "longitude"
         ],
         "name" : "longitude_1",
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
