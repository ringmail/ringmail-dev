{
   "columns" : {
      "path" : {
         "default" : "",
         "length" : "128",
         "name" : "path",
         "null" : 0,
         "type" : "text"
      },
      "structure" : {
         "default" : "{      \"fields\":[         {            \"name\":\"body_background_color\",          \"type\":\"color\",          \"default\":\"#FFFFFF\",          \"label\":\"Body Background Color\",          \"value\":\"\"       },       {            \"name\":\"body_background_image\",          \"type\":\"file\",          \"label\":\"Body Background Image\",          \"value\":\"\"       },       {            \"name\":\"body_text_color\",          \"type\":\"color\",          \"default\":\"#000000\",          \"label\":\"Body Text Color\",          \"value\":\"\"       },       {            \"name\":\"footer_background_color\",          \"type\":\"color\",          \"default\":\"#808080\",          \"label\":\"Footer Background Color\",          \"value\":\"\"       },       {            \"name\":\"footer_text_color\",          \"type\":\"color\",          \"default\":\"#000000\",          \"label\":\"Footer Text Color\",          \"value\":\"\"       },       {            \"name\":\"header_background_color\",          \"type\":\"color\",          \"default\":\"#FF0000\",          \"label\":\"Header Background Color\",          \"value\":\"\"       },       {            \"name\":\"header_text_color\",          \"type\":\"color\",          \"default\":\"#FFFFFF\",          \"label\":\"Header Text Color\",          \"value\":\"\"       },       {            \"name\":\"body_header\",          \"type\":\"text\",          \"default\":\"\",          \"label\":\"Body Header\",          \"value\":\"\"       },       {            \"name\":\"body_text\",          \"type\":\"text\",          \"default\":\"\",          \"label\":\"Body Text\",          \"value\":\"\"       },       {            \"name\":\"footer_text\",          \"type\":\"text\",          \"default\":\"\",          \"label\":\"Footer Text\",          \"value\":\"\"       },       {            \"name\":\"header_subtitle\",          \"type\":\"text\",          \"default\":\"\",          \"label\":\"Header Subtitle\",          \"value\":\"\"       },       {            \"name\":\"header_title\",          \"type\":\"text\",          \"default\":\"\",          \"label\":\"Header Title\",          \"value\":\"\"       },       {            \"name\":\"offer\",          \"type\":\"checkbox\",          \"default\":\"0\",          \"label\":\"Contains Offer\",          \"value\":\"\"       },       {            \"name\":\"video\",          \"type\":\"checkbox\",          \"default\":\"0\",          \"label\":\"Contains Video\",          \"value\":\"\"       },       {            \"name\":\"button_background_color\",          \"type\":\"color\",          \"default\":\"#D3D3D3\",          \"label\":\"Button Background Color\",          \"value\":\"\"       },       {            \"name\":\"button_text_color\",          \"type\":\"color\",          \"default\":\"#FFFFFF\",          \"label\":\"Button Background Color\",          \"value\":\"\"       }    ] }",
         "length" : "64k",
         "name" : "structure",
         "null" : 0,
         "type" : "text"
      },
      "template" : {
         "default" : "",
         "length" : "128",
         "name" : "template",
         "null" : 0,
         "type" : "text"
      },
      "timestamp" : {
         "name" : "timestamp",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      }
   },
   "index" : {
      "template" : {
         "columns" : [
            "template"
         ],
         "name" : "template",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
