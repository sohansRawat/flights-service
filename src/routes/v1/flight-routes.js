let express=require('express')

let {FlightController}=require('../../controllers')
let {FlightMiddleware}=require('../../middlewares')

let router = express.Router();

router.post('/' , FlightMiddleware.validatCreateRequest,FlightController.createFlight)

router.get('/' , FlightController.getFlights)

router.get('/:id' , FlightController.getFlight)

router.patch('/:id/seats',FlightMiddleware.validateUpdateSeatsRequest,FlightController.updateSeats )

// router.delete('/:id' , AirplaneController.destroyAirplane)

module.exports=router


