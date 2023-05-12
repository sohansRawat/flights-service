let {StatusCodes}=require('http-status-codes')
let {ErrorResponse}=require('../utils/common')
function validatCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="something went wrong while creating the Airplane"
        ErrorResponse.error={explanation:'model number not found in the incoming request in the correct form'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}
module.exports={
    validatCreateRequest
}