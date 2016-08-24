{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 0,
         "type" : "record"
      },
      "ts_added" : {
         "name" : "ts_added",
         "null" : 0,
         "timestamp" : 1,
         "type" : "datetime"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      },
      "verified" : {
         "default" : "0",
         "name" : "verified",
         "null" : 0,
         "type" : "boolean"
      }
   },
   "constraint" : {
      "ring_user_domain-domain_id" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "ring_user_domain-domain_id",
         "reference_columns" : "id",
         "reference_table" : "ring_domain",
         "type" : "constraint"
      },
      "ring_user_domain-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_user_domain-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "ring_user_domain-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_user_domain-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "domain_id_1" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id_1",
         "type" : "index"
      },
      "user_id_1" : {
         "columns" : [
            "user_id",
            "domain_id"
         ],
         "name" : "user_id_1",
         "type" : "unique"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
