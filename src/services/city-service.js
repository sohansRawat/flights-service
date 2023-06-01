const { StatusCodes } = require('http-status-codes');
let { CityRepository } = require('../repositories')
let AppError = require('../utils/errors/app-error')



let cityRepository = new CityRepository();

async function createCity(data) {
    try {
        let city = await cityRepository.create(data)
        return city
    } catch (error) {
        if (error.name == 'SequelizeValidationError'||error.name=='SequelizeUniqueConstraintError') {
            let explanation = []
            error.errors.forEach(errElement => {
                explanation.push(errElement.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getCities() {
    try {
        let cities= await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('cannot fetch data of all the Cities', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getCity(id) {
    try {
        let City = await cityRepository.get(id);
        if (!City) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return City
    } catch (error) {
        if (error.statusode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch City', StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function updateCity(id, data) {
    try {
        let updateCity = await cityRepository.update(id, data)
        console.log('updatecity',updateCity[0])
        if (!updateCity[0]) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        console.log('sohan bhai run he ne hua')
        return updateCity
    }catch(error){
        console.log('error',error.statusCode)
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch City', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyCity(id) {
    try {
        let destroyCity = await cityRepository.destroy(id)
        if (!destroyCity) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        return destroyCity
    } catch (error) {
        if (error.statusCode = StatusCodes.NOT_FOUND) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
        throw new AppError('cant fetch City', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
}
