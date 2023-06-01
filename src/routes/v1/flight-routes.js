let express=require('express')

let {FlightController}=require('../../controllers')
let {FlightMiddleware}=require('../../middlewares')

let router = express.Router();

router.post('/' , FlightMiddleware.validatCreateRequest,FlightController.createFlight)

router.get('/' , FlightController.getFlights)

// router.get('/:id' , AirplaneController.getAirplane)

// router.patch('/',AirplaneController.updateAirplane)

// router.delete('/:id' , AirplaneController.destroyAirplane)

module.exports=router


