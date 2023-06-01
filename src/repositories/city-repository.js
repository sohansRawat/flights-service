let crudRepository=require('./crud-repository')
let {City}=require('../models')

class CityRepository extends crudRepository{
    constructor(){
        super(City)
    }
}

module.exports=CityRepository