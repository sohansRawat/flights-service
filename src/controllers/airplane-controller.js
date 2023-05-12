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
        console.log(error)
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane
}