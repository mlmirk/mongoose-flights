import  mongoose  from "mongoose";

const Schema= mongoose.Schema

const ticketSchema= {
seat:{
type:String,
match: /[A-F][1-9]\d?/,

},
price:{
  type:Number,
  min:0,

}

}








const flightSchema = {
airline: {
  type: String,
  enum:['American', 'Southwest', 'United'],

},
airport:{
  type: String,
default: 'DEN',
enum: ['AUS','DFW','DEN','LAX','SAN']
},
flightNo:{
type: Number,
required: true,
min:10,
max:9999

},
departs: Date,

tickets:[ticketSchema]


}

const Flight = mongoose.model('Flight', flightSchema)

//console.log(flightSchema)
export{
  Flight
}