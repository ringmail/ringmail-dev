{
   "columns" : {
      "address" : {
         "default" : "",
         "length" : "255",
         "name" : "address",
         "null" : 0,
         "type" : "text"
      },
      "address_extended" : {
         "default" : "",
         "length" : "64",
         "name" : "address_extended",
         "null" : 0,
         "type" : "text"
      },
      "admin_region" : {
         "default" : "",
         "length" : "40",
         "name" : "admin_region",
         "null" : 0,
         "type" : "text"
      },
      "chain_id" : {
         "default" : "",
         "length" : "64",
         "name" : "chain_id",
         "null" : 0,
         "type" : "text"
      },
      "chain_name" : {
         "default" : "",
         "length" : "64",
         "name" : "chain_name",
         "null" : 0,
         "type" : "text"
      },
      "country" : {
         "default" : "",
         "length" : "40",
         "name" : "country",
         "null" : 0,
         "type" : "text"
      },
      "email" : {
         "default" : "",
         "length" : "64",
         "name" : "email",
         "null" : 0,
         "type" : "text"
      },
      "existence" : {
         "default" : "0",
         "name" : "existence",
         "null" : 0,
         "type" : "float"
      },
      "factual_id" : {
         "default" : "",
         "length" : "36",
         "name" : "factual_id",
         "null" : 0,
         "type" : "text"
      },
      "fax" : {
         "default" : "",
         "length" : "12",
         "name" : "fax",
         "null" : 0,
         "type" : "text"
      },
      "hours" : {
         "default" : "",
         "length" : "64k",
         "name" : "hours",
         "null" : 0,
         "type" : "text"
      },
      "hours_display" : {
         "default" : "",
         "length" : "64k",
         "name" : "hours_display",
         "null" : 0,
         "type" : "text"
      },
      "latitude" : {
         "default" : "",
         "length" : "64",
         "name" : "latitude",
         "null" : 0,
         "type" : "text"
      },
      "locality" : {
         "default" : "",
         "length" : "40",
         "name" : "locality",
         "null" : 0,
         "type" : "text"
      },
      "longitude" : {
         "default" : "",
         "length" : "64",
         "name" : "longitude",
         "null" : 0,
         "type" : "text"
      },
      "name" : {
         "default" : "",
         "length" : "255",
         "name" : "name",
         "null" : 0,
         "type" : "text"
      },
      "neighborhood" : {
         "default" : "",
         "length" : "64",
         "name" : "neighborhood",
         "null" : 0,
         "type" : "text"
      },
      "po_box" : {
         "default" : "",
         "length" : "10",
         "name" : "po_box",
         "null" : 0,
         "type" : "text"
      },
      "post_town" : {
         "default" : "",
         "length" : "40",
         "name" : "post_town",
         "null" : 0,
         "type" : "text"
      },
      "postcode" : {
         "default" : "",
         "length" : "5",
         "name" : "postcode",
         "null" : 0,
         "type" : "text"
      },
      "region" : {
         "default" : "",
         "length" : "40",
         "name" : "region",
         "null" : 0,
         "type" : "text"
      },
      "tel" : {
         "default" : "",
         "length" : "12",
         "name" : "tel",
         "null" : 0,
         "type" : "text"
      },
      "ts_created" : {
         "name" : "ts_created",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "ts_updated" : {
         "default_null" : 1,
         "name" : "ts_updated",
         "null" : 1,
         "type" : "datetime"
      },
      "website" : {
         "default" : "",
         "length" : "255",
         "name" : "website",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "factual_id_1" : {
         "columns" : [
            "factual_id"
         ],
         "name" : "factual_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "mode" : "auto_inc",
      "name" : "id",
      "type" : "record"
   }
}
