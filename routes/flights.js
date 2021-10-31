import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'
const router = Router()

/* GET users listing. */
router.get('/', flightCtrl.index)
router.get('/new', flightCtrl.new)



router.post('/', flightCtrl.create)

export {
  router
}
