{
   "columns" : {
      "card_id" : {
         "name" : "card_id",
         "null" : 0,
         "type" : "record"
      },
      "rebill_date" : {
         "name" : "rebill_date",
         "null" : 0,
         "type" : "date"
      },
      "rebill_freq" : {
         "length" : "16",
         "name" : "rebill_freq",
         "null" : 0,
         "type" : "text"
      },
      "user_id" : {
         "name" : "user_id",
         "null" : 0,
         "type" : "record"
      }
   },
   "index" : {
      "rebill_date_1" : {
         "columns" : [
            "rebill_date"
         ],
         "name" : "rebill_date_1",
         "type" : "index"
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
