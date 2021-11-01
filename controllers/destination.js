import { Destination } from "../models/destination.js"

function newDestination(req,res){
//console.log("new route created!")
Destination.find({}, function(error,destinations){
  res.render('destinations/new',{
    title: 'Add Destination',
    destinations
  }
  )
})
}

function create(req, res){
//console.log("submit button works")
Destination.create(req.body, function(error, destination){
  res.redirect('/destinations/new')
})
}



export{
newDestination as new,
create
}