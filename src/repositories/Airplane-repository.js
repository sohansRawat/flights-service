let crudRepository=require('./crud-repository')
let {Airplane}=require('../models')


class AirplaneRepository extends crudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports=AirplaneRepository