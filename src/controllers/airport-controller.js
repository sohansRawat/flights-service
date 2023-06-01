let { StatusCodes } = require('http-status-codes')
let { AirportService } = require('../services')
let { ErrorResponse, SuccessResponse } = require('../utils/common')
let AppError = require('../utils/errors/app-error')

async function createAirport(req, res) {
    try {
        let airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId,
        })
        SuccessResponse.data = airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getAirports(req, res) {
    try {
        let airports = await AirportService.getAirports()
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json({ SuccessResponse })
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getAirport(req, res) {
    try {
        let airport = await AirportService.getAirport(req.params.id)
        SuccessResponse.data = airport
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}


async function updateAirport(req, res) {
    try {
        let updateAirport = await AirportService.updateAirport(req.body.id, {
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId,
        })
        SuccessResponse.data = updateAirport
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function destroyAirport(req, res) {
    try {
        let airport = await AirportService.destroyAirport(req.params.id)
        SuccessResponse.data = airport
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}



module.exports = {
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    destroyAirport,
    
}