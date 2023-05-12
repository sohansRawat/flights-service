let express=require('express')

let {AirplaneController}=require('../../controllers')
let {AirplaneMiddleware}=require('../../middlewares')

let router = express.Router();

router.post('/',AirplaneMiddleware.validatCreateRequest,AirplaneController.createAirplane)


module.exports=router


