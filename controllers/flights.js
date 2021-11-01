import {  Flight } from "../models/flight.js"

const datePlus1 = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
console.log(datePlus1);

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

for (let key in req.body) {
  if (req.body[key] === '') delete req.body[key]
}  

const flight= new Flight(req.body)
  flight.save(function(error){
    if(error) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}
function show(req,res){
//console.log("SHOW VIEW connected ")
  Flight.findById(req.params.id, function(error,flight){
    res.render("flights/show",{
      flight,
      error,
      title: `Flight Number ${flight.flightNo}`
    })

  })
}

// function newTicket(req,res){
//   //console.log('generating a ticket form')
//   Flight.findById(req.params.id, function(error,flight){
//     res.render("flights/newTicket",{
//       flight,
//       error,
//       title: `Create ticket for flight ${flight.flightNo}`
//     })

//   })
// }

function createTicket(req,res){
  console.log(req.body)
  Flight.findById(req.params.id,function(error, flight){
    flight.tickets.push(req.body) 
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export{
  index,
  newFlight as new,
  create,
  show,
  //newTicket,
  createTicket
}