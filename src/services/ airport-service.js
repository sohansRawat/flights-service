const { StatusCodes } = require('http-status-codes');
let { AirportRepository } = require('../repositories')
let AppError = require('../utils/errors/app-error')   



let airportRepository = new AirportRepository();


async function createAirport(data) {
    try {
        let airport= await airportRepository.create(data);
        return airport;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = []
            error.errors.forEach(errElement => {
                explanation.push(errElement.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a new airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports() {
    try {
        let airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirport(id) {
    try {
        let airport = await airportRepository.get(id);
        if (!airport) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return airplane
    } catch (error) {
        if (error.statusode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function updateAirport(id, data) {
    try {
        let updateAirport = await airportRepository.update(id, data)
        if (!updateAirport[0]) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return updateAirplane
    }catch(error){
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch updateAirport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



async function destroyAirport(id) {
    try {
        let destroyAirport= await airportRepository.destroy(id)
        if (!destroyAirport) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return destroyAirplane
    } catch (error) {
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    destroyAirport,    
}      