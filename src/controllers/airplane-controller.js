let { StatusCodes } = require('http-status-codes')
let { AirplaneService } = require('../services')
let { ErrorResponse, SuccessResponse } = require('../utils/common')
let AppError = require('../utils/errors/app-error')

async function createAirplane(req, res) {
    try {
        let airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getAirplanes(req, res) {
    try {
        let airplanes = await AirplaneService.getAirplanes()
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json({ SuccessResponse })
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getAirplane(req, res) {
    try {
        let airplane = await AirplaneService.getAirplane(req.params.id)
        SuccessResponse.data = airplane
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}


async function updateAirplane(req, res) {
    try {
        let updateAirplane = await AirplaneService.updateAirplane(req.body.id, {
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data = updateAirplane
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function destroyAirplane(req, res) {
    try {
        let airplane = await AirplaneService.destroyAirplane(req.params.id)
        SuccessResponse.data = airplane
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    destroyAirplane,
    
}