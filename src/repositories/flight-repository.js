let crudRepository=require('./crud-repository')
let {Flight,Airplane,Airport,City}=require('../models')
//let {comingdata}=require('../models')
let {Sequelize}=require('sequelize')
let db=require('../models')

let {addRowLocksOnFlights}=require('./queries')

class FlightRepository extends crudRepository{
    constructor(){
        super(Flight)
    }

    async getAllFlights(filter,sort){
        let response=await Flight.findAll({
            where:filter,
            order:sort,
            include: [
            {
                model:Airplane,
                required:true
            },
            {
                model:Airport,
                as:'departureAirport',
                required:true,
                on: {
                    col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=",Sequelize.col("departureAirport.code")),
                },
                include:[{
                    model:City,
                    required:true
                }]
                
            },
            {
                model:Airport,
                as:'arrivalAirport',
                required:true,
                on: {
                    col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=",Sequelize.col("arrivalAirport.code"))
                },
                include:[{
                    model:City,
                    required:true
                }]
            }
            ]
        })
        return response
    }

    async updateRemaingSeats(flightId,seats,dec='true'){
        await db.sequelize.query(addRowLocksOnFlights(flightId))
        const flight=await Flight.findByPk(flightId)
        console.log('dec',dec)
        if(dec === 'true'){
            const response=await flight.decrement('totalSeats',{by:seats})
            return response
        }else if(dec==='false'){
            const response=await flight.increment('totalSeats',{by:seats})
            return response
        }else{}
    }
}

module.exports=FlightRepository