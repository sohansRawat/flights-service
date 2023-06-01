let crudRepository=require('./crud-repository')
let {Flight,Airplane,Airport,City}=require('../models')
//let {comingdata}=require('../models')
let {Sequelize}=require('sequelize')


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
}

module.exports=FlightRepository