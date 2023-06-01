let {StatusCodes}=require('http-status-codes')
let {ErrorResponse}=require('../utils/common')
let AppError =require('../utils/errors/app-error')


function validatCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="something went wrong while creating the Airplane"
        ErrorResponse.error=new AppError([' Airplane not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}
module.exports={
    validatCreateRequest
}