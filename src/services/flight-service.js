let { StatusCodes } = require('http-status-codes');
let { FlightRepository } = require('../repositories')
let AppError = require('../utils/errors/app-error')   
let {Op}=require('sequelize')


let flightRepository = new FlightRepository();


async function createFlight(data) {
    try {
        let flight= await flightRepository.create(data);
        return flight;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = []
            error.errors.forEach(errElement => {
                explanation.push(errElement.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getFlights(query){
    let customFilter={}
    let sortFilter = []
    
    if(query.Trips){
        let [departureAirportId,arrivalAirportId]=query.Trips.split('-')
        customFilter.departureAirportId=departureAirportId
        customFilter.arrivalAirportId=arrivalAirportId
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split('-')
        customFilter.price={
            [Op.between]:[minPrice,((maxPrice==undefined)?1000:maxPrice)]
        }
    }
    
    if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }

    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+"23:59:00"]
        }
    }

    if(query.sort){
        const params=query.sort.split(',')
        const sortFilters=params.map((param)=>param.split('_'))
        sortFilter=sortFilters
    }
    
    try{
        let flights=await flightRepository.getAllFlights(customFilter,sortFilter)
        return flights
    }catch (error) {
        console.log('error',error)
        throw new AppError('cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createFlight, 
    getFlights,  
}      