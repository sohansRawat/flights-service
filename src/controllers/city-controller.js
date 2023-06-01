let { StatusCodes } = require('http-status-codes')
let { ErrorResponse, SuccessResponse } = require('../utils/common')
let AppError = require('../utils/errors/app-error')
let {CityService}=require('../services')


async function createCity(req,res){
    try{
        let city = await CityService.createCity({name:req.body.name})
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json({SuccessResponse})
    }catch(error){
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function getCities(req, res) {
    try {
        let cities = await CityService.getCities()
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json({ SuccessResponse })
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}



async function getCity(req, res) {
    try {
        let City = await CityService.getCity(req.params.id)
        SuccessResponse.data = City
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}


async function updateCity(req, res) {
    try {
        console.log('sohna bhai obj',req.body)
        let updateCity = await CityService.updateCity(req.body.id, {
            name:req.body.name
        })
        SuccessResponse.data = updateCity
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}

async function destroyCity(req, res) {
    try {
        let City = await CityService.destroyCity(req.params.id)
        SuccessResponse.data = City
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.stautsCode).json(ErrorResponse)
    }
}


module.exports={
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
}