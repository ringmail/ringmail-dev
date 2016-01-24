{
   "columns" : {
      "caller_type" : {
         "length" : "16",
         "name" : "caller_type",
         "null" : 0,
         "type" : "text"
      },
      "cid_name" : {
         "length" : "128",
         "name" : "cid_name",
         "null" : 0,
         "type" : "text"
      },
      "cid_number" : {
         "length" : "15",
         "name" : "cid_number",
         "null" : 0,
         "type" : "text"
      },
      "did_id" : {
         "default_null" : 1,
         "name" : "did_id",
         "null" : 1,
         "type" : "record"
      },
      "phone_id" : {
         "default_null" : 1,
         "name" : "phone_id",
         "null" : 1,
         "type" : "record"
      },
      "sip_id" : {
         "default_null" : 1,
         "name" : "sip_id",
         "null" : 1,
         "type" : "record"
      }
   },
   "index" : {
      "cid_number_1" : {
         "columns" : [
            "cid_number"
         ],
         "name" : "cid_number_1",
         "type" : "index"
      },
      "did_id_1" : {
         "columns" : [
            "did_id"
         ],
         "name" : "did_id_1",
         "type" : "index"
      },
      "phone_id_1" : {
         "columns" : [
            "phone_id"
         ],
         "name" : "phone_id_1",
         "type" : "index"
      },
      "sip_id_1" : {
         "columns" : [
            "sip_id"
         ],
         "name" : "sip_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
