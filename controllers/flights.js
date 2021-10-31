import {  Flight } from "../models/flight.js"



function index(req,res){
  //console.log("good copy")
  //find the flight first thenrender what is found 
  Flight.find({}, function(error,flights){
    res.render('flights/index',{
      flights,
      error,
      title: 'All created flights'
    })
  })
  
}

function newFlight(req,res){
  //console.log('new fligth path!')
  res.render('flights/new')
}


function create(req,res){
const flight= new Flight(req.body)
  flight.save(function(error){
    if(error) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}





export{
  index,
  newFlight as new,
  create
}