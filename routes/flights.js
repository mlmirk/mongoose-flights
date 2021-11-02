import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'
const router = Router()

/* GET users listing. */
router.get('/', flightCtrl.index)
router.get('/new', flightCtrl.new)
router.get('/:id', flightCtrl.show)

//router.get('/:id/tickets/new', flightCtrl.newTicket)


router.post('/', flightCtrl.create)
router.post('/:id/tickets', flightCtrl.createTicket)
router.post('/:id/destinations', flightCtrl.addDestination)

router.delete("/:id", flightCtrl.delete)


export {
  router
}
