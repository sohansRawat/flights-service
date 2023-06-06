let { StatusCodes } = require('http-status-codes')
let { FlightService } = require('../services')
let { ErrorResponse, SuccessResponse } = require('../utils/common')
let AppError = require('../utils/errors/app-error')

async function createFlight(req, res) {
    try {
        let flight = await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats, 
        })
        SuccessResponse.data = flight
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getFlights(req, res) {
    try {
        let flights = await FlightService.getFlights(req.query)
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).json({ SuccessResponse })
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}
async function getFlight(req, res) {
    try {
        let flight = await FlightService.getFlight(req.params.id)
        SuccessResponse.data = flight
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function updateSeats(req,res){
    try{
        let response = await FlightService.updateSeats({
            flighId:req.params.id,
            seats:req.body.seats,
            dec:req.body.dec
        })
        SuccessResponse.data = response
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }catch(error){
        console.log('error',error)
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

module.exports = {
    createFlight, 
    getFlights,
    getFlight,
    updateSeats
}