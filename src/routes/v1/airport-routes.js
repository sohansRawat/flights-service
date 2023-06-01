let express=require('express')

let {AirportController}=require('../../controllers')
let {AirportMiddleware}=require('../../middlewares')

let router = express.Router();

// /api/v1/aiports  POST
router.post('/' , AirportMiddleware.validatCreateRequest,AirportController.createAirport)

// /api/v1/airports  GET
router.get('/' , AirportController.getAirports)

// /api/v1/airports/:id  GET
router.get('/:id' , AirportController.getAirport)

// /api/v1/airports  PATCH
router.patch('/',AirportController.updateAirport)

// /api/v1/airports/:id  DELETE
router.delete('/:id' , AirportController.destroyAirport)

module.exports=router

