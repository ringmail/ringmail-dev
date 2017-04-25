{
   "columns" : {
      "business_category_name" : {
         "default" : "",
         "length" : "64",
         "name" : "business_category_name",
         "null" : 0,
         "type" : "text"
      },
      "factual_category_id" : {
         "name" : "factual_category_id",
         "null" : 1,
         "type" : "record"
      },
      "header_img_url" : {
         "default" : "",
         "length" : "64",
         "name" : "header_img_url",
         "null" : 1,
         "type" : "text"
      },
      "img_url" : {
         "default" : "",
         "length" : "64",
         "name" : "img_url",
         "null" : 1,
         "type" : "text"
      },
      "parent" : {
         "default_null" : 1,
         "name" : "parent",
         "null" : 1,
         "type" : "integer"
      }
   },
   "index" : {
      "category_1" : {
         "columns" : [
            "factual_category_id"
         ],
         "name" : "category_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
