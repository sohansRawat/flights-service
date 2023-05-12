let { logger } = require('../config')

class crudRepository {
    constructor(model) {
        this.model = model
    }


    //create
    async create(data) {
        let response = await this.model.create(data)
        return response
    }
    //Read
    async get(data) {
        try {
            let response = await this.model.findByPk(data)
            return response
        } catch (error) {
            logger.error('something went wrond in the crud repo : get')
            throw error
        }
    }


    async get() {
        try {
            let response = await this.model.findAll();
            return response
        } catch (error) {
            logger.error('something went wrond in the crud repo : get')
            throw error
        }
    }
    //Update
    async update(id, data) {
        try {
            let response = await this.model.update(data, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            logger.error('something went wrond in the crud repo : destroy')
            throw error
        }
    }
    //delete
    async destroy(data) {
        try {
            let response = await this.model.destroy({
                where: {
                    id: data
                }
            })
        } catch (error) {
            logger.error('something went wrond in the crud repo : destroy')
            throw error
        }
    }
}
module.exports = crudRepository