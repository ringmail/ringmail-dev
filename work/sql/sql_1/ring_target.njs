{
   "columns" : {
      "did_id" : {
         "default_null" : 1,
         "name" : "did_id",
         "null" : 1,
         "type" : "record"
      },
      "domain_id" : {
         "default_null" : 1,
         "name" : "domain_id",
         "null" : 1,
         "type" : "record"
      },
      "email_id" : {
         "default_null" : 1,
         "name" : "email_id",
         "null" : 1,
         "type" : "record"
      },
      "target_type" : {
         "length" : "16",
         "name" : "target_type",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "constraint" : {
      "ring_target-did_id" : {
         "columns" : [
            "did_id"
         ],
         "name" : "ring_target-did_id",
         "reference_columns" : "id",
         "reference_table" : "ring_did",
         "type" : "constraint"
      },
      "ring_target-domain_id" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "ring_target-domain_id",
         "reference_columns" : "id",
         "reference_table" : "ring_domain",
         "type" : "constraint"
      },
      "ring_target-email_id" : {
         "columns" : [
            "email_id"
         ],
         "name" : "ring_target-email_id",
         "reference_columns" : "id",
         "reference_table" : "ring_email",
         "type" : "constraint"
      },
      "ring_target-id" : {
         "columns" : [
            "id"
         ],
         "name" : "ring_target-id",
         "reference_columns" : "id",
         "reference_table" : "note_sequence",
         "type" : "constraint"
      },
      "ring_target-user_id" : {
         "columns" : [
            "user_id"
         ],
         "name" : "ring_target-user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_user",
         "type" : "constraint"
      }
   },
   "index" : {
      "did_id_1" : {
         "columns" : [
            "did_id"
         ],
         "name" : "did_id_1",
         "type" : "unique"
      },
      "domain_id_1" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "domain_id_1",
         "type" : "unique"
      },
      "email_id_1" : {
         "columns" : [
            "email_id"
         ],
         "name" : "email_id_1",
         "type" : "unique"
      },
      "user_id_1" : {
         "columns" : [
            "user_id"
         ],
         "name" : "user_id_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
