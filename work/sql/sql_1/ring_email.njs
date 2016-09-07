{
   "columns" : {
      "domain_id" : {
         "name" : "domain_id",
         "null" : 1,
         "table" : "ring_domain",
         "type" : "record"
      },
      "domain_user_id" : {
         "name" : "domain_user_id",
         "null" : 1,
         "table" : "ring_domain_user",
         "type" : "record"
      },
      "email" : {
         "length" : "255",
         "name" : "email",
         "null" : 0,
         "type" : "text"
      },
      "email_hash" : {
         "default" : "NULL",
         "length" : "64",
         "name" : "email_hash",
         "null" : 1,
         "type" : "text"
      }
   },
   "constraint" : {
      "ring_email-domain_id" : {
         "columns" : [
            "domain_id"
         ],
         "name" : "ring_email-domain_id",
         "reference_columns" : "id",
         "reference_table" : "ring_domain",
         "type" : "constraint"
      },
      "ring_email-domain_user_id" : {
         "columns" : [
            "domain_user_id"
         ],
         "name" : "ring_email-domain_user_id",
         "reference_columns" : "id",
         "reference_table" : "ring_domain_user",
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
      "domain_user_id_1" : {
         "columns" : [
            "domain_user_id"
         ],
         "name" : "domain_user_id_1",
         "type" : "unique"
      },
      "email_1" : {
         "columns" : [
            "email"
         ],
         "name" : "email_1",
         "type" : "unique"
      },
      "email_hash_1" : {
         "columns" : [
            "email_hash"
         ],
         "name" : "email_hash_1",
         "type" : "index"
      }
   },
   "primary_key" : {
      "name" : "id",
      "type" : "record"
   }
}
