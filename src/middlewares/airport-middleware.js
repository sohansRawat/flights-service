let {StatusCodes}=require('http-status-codes')
let {ErrorResponse}=require('../utils/common')
let AppError =require('../utils/errors/app-error')


function validatCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message="something went wrong while creating the Airport"
        ErrorResponse.error=new AppError([' Airport name not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message="something went wrong while creating the Airport"
        ErrorResponse.error=new AppError([' Airport code  not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message="something went wrong while creating the Airport"
        ErrorResponse.error=new AppError([' city Id not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}
module.exports={
    validatCreateRequest
}