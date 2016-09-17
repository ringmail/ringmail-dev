{
   "columns" : {
      "category" : {
         "default" : "",
         "length" : "255",
         "name" : "category",
         "null" : 0,
         "type" : "text"
      },
      "category_id" : {
         "name" : "category_id",
         "null" : 1,
         "table" : "ring_category",
         "type" : "record"
      },
      "color_hex" : {
         "default" : "",
         "length" : "64k",
         "name" : "color_hex",
         "null" : 0,
         "type" : "text"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "constraint" : {
      "ring_category-category_id" : {
         "columns" : [
            "category_id"
         ],
         "name" : "ring_category-category_id",
         "reference_columns" : "id",
         "reference_table" : "ring_category",
         "type" : "constraint"
      }
   },
   "index" : {
      "category" : {
         "columns" : [
            "category"
         ],
         "name" : "category",
         "type" : "unique"
      },
      "category_id_1" : {
         "columns" : [
            "category_id"
         ],
         "name" : "category_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
