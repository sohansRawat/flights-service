let express=require('express')

let {AirplaneController}=require('../../controllers')
let {AirplaneMiddleware}=require('../../middlewares')

let router = express.Router();

router.post('/' , AirplaneMiddleware.validatCreateRequest,AirplaneController.createAirplane)

router.get('/' , AirplaneController.getAirplanes)

router.get('/:id' , AirplaneController.getAirplane)

router.patch('/',AirplaneController.updateAirplane)

router.delete('/:id' , AirplaneController.destroyAirplane)

module.exports=router


