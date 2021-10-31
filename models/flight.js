import  mongoose  from "mongoose";

const Schema= mongoose.Schema

const flightSchema = {
airline: {
  type: String,
  enum:['American', 'Southwest,', 'United'],

},
airport:{
  type: String,
default: 'DEN',
enum: ['AUS','DFW','DEN','LAX','SAN']
},
flightNo:{
type: Number,
required: True,
min:10,
max:9999
},
departs:{
  type: Date
}

}