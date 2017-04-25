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
         "null" : 1,
         "type" : "text"
      },
      "ts" : {
         "name" : "ts",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "constraint" : {},
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
