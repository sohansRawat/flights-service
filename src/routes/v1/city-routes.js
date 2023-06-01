let express=require('express')

let {CityController}=require('../../controllers')
let {CityMiddleware}=require('../../middlewares')

let router = express.Router();

router.post('/',CityMiddleware.validatCreateRequest,CityController.createCity)

router.get('/',CityController.getCities)

router.get('/:id',CityController.getCity)

router.patch('/',CityController.updateCity)

router.delete('/:id',CityController.destroyCity)

module.exports=router