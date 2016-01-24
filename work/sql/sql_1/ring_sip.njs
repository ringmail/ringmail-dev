{
   "columns" : {
      "sip_url" : {
         "length" : "255",
         "name" : "sip_url",
         "null" : 0,
         "type" : "text"
      }
   },
   "index" : {
      "sip_url_1" : {
         "columns" : [
            "sip_url"
         ],
         "name" : "sip_url_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
