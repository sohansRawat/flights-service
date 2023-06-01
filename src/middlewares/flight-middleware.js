let {StatusCodes}=require('http-status-codes')
let {ErrorResponse}=require('../utils/common')
let AppError =require('../utils/errors/app-error')


function validatCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' flgiht number not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' airplane id not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' Airport code not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' Airport code not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError(['arrival time  not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.departureTime){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' departure time not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.price){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError([' price not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.totalSeats){
        ErrorResponse.message="something went wrong while creating the flight"
        ErrorResponse.error=new AppError(['total seats not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}
module.exports={
    validatCreateRequest
}