{
   "columns" : {
      "link" : {
         "default" : "",
         "length" : "64k",
         "name" : "link",
         "null" : 0,
         "type" : "text"
      },
      "ringpage" : {
         "default" : "",
         "length" : "128",
         "name" : "ringpage",
         "null" : 0,
         "type" : "text"
      },
      "ringurl" : {
         "default" : "",
         "length" : "64k",
         "name" : "ringurl",
         "null" : 0,
         "type" : "text"
      },
      "template_id" : {
         "name" : "template_id",
         "null" : 0,
         "table" : "template",
         "type" : "record"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "table" : "ring_user",
         "type" : "record"
      }
   },
   "index" : {
      "ringpage-template_id" : {
         "columns" : [
            "template_id"
         ],
         "name" : "ringpage-template_id",
         "type" : "index"
      },
      "ringpage-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ringpage-user_id",
         "type" : "index"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
