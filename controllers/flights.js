import { Flight } from "../models/flight.js"
import { Destination } from '../models/destination.js'

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





// function show(req,res){
// //console.log("SHOW VIEW connected ")
//   Flight.findById(req.params.id, function(error,flight){
//     res.render("flights/show",{
//       flight,
//       error,
//       title: `Flight Number ${flight.flightNo}`
//     })

//   })
// }


function show(req,res){
  //console.log("SHOW VIEW connected ")
    Flight.findById(req.params.id)
    .populate('destinations')
    .exec(function(error,flight){
      Destination.find({_id: {$nin:flight.destinations}}, function(err, destinations){
        res.render('flights/show', {
          title: `Flight Number ${flight.flightNo}`,
          flight:flight,
          error,
          destinations:destinations,
          
        })
      })
    })
    console.log('went through')
  }


function createTicket(req,res){
  console.log(req.body)
  Flight.findById(req.params.id,function(error, flight){
    flight.tickets.push(req.body) 
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


function addDestination(req,res){
Flight.findById(req.params.id, function(error,flight){
  flight.destinations.push(req.body.addedDestination)
  flight.save(function(error){
    res.redirect(`/flights/${flight._id}`)
  })
})
console.log("connected")
}
export{
  index,
  newFlight as new,
  create,
  show,
  //newTicket,
  createTicket,
  addDestination
}