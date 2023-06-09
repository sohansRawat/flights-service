const { StatusCodes } = require('http-status-codes');
let { AirplaneRepository } = require('../repositories')
let AppError = require('../utils/errors/app-error')   



let airplaneRepository = new AirplaneRepository();


async function createAirplane(data) {
    try {
        let airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = []
            error.errors.forEach(errElement => {
                explanation.push(errElement.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes() {
    try {
        let airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirplane(id) {
    try {
        let airplane = await airplaneRepository.get(id);
        if (!airplane) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return airplane
    } catch (error) {
        if (error.statusode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch airplane', StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function updateAirplane(id, data) {
    try {
        let updateAirplane = await airplaneRepository.update(id, data)
        if (!updateAirplane[0]) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return updateAirplane
    }catch(error){
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch airplane', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



async function destroyAirplane(id) {
    try {
        let destroyAirplane = await airplaneRepository.destroy(id)
        if (!destroyAirplane) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return destroyAirplane
    } catch (error) {
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch airplane', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    destroyAirplane,
    
}      