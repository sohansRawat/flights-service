let crudRepository=require('./crud-repository')
let {Airport}=require('../models')


class AirportRepository extends crudRepository{
    constructor(){
        super(Airport)
    }
}

module.exports=AirportRepository