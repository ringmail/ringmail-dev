{
   "columns" : {
      "body_background_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "body_background_color",
         "null" : 0,
         "type" : "text"
      },
      "body_background_image" : {
         "default" : "",
         "length" : "64k",
         "name" : "body_background_image",
         "null" : 0,
         "type" : "text"
      },
      "body_header" : {
         "default" : "",
         "length" : "64k",
         "name" : "body_header",
         "null" : 0,
         "type" : "text"
      },
      "body_text" : {
         "default" : "",
         "length" : "64k",
         "name" : "body_text",
         "null" : 0,
         "type" : "text"
      },
      "body_text_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "body_text_color",
         "null" : 0,
         "type" : "text"
      },
      "footer_background_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "footer_background_color",
         "null" : 0,
         "type" : "text"
      },
      "footer_text" : {
         "default" : "",
         "length" : "64k",
         "name" : "footer_text",
         "null" : 0,
         "type" : "text"
      },
      "footer_text_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "footer_text_color",
         "null" : 0,
         "type" : "text"
      },
      "header_background_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "header_background_color",
         "null" : 0,
         "type" : "text"
      },
      "header_subtitle" : {
         "default" : "",
         "length" : "64k",
         "name" : "header_subtitle",
         "null" : 0,
         "type" : "text"
      },
      "header_text_color" : {
         "default" : "",
         "length" : "64k",
         "name" : "header_text_color",
         "null" : 0,
         "type" : "text"
      },
      "header_title" : {
         "default" : "",
         "length" : "64k",
         "name" : "header_title",
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
