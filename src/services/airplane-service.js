const { StatusCodes } = require('http-status-codes');
let {AirplaneRepository}=require('../repositories')
let AppError=require('../utils/errors/app-error')
let airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try{
        let airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explanation =[]
            error.errors.forEach(errElement => {
                explanation.push(errElement.message)                
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createAirplane
}