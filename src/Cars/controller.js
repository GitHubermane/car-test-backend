let CarsService = require('./service')

const CarsController = {
    async getAll(req, res) {
        try {
            const page = Number(req.query.page) || 0
            const limit = Number(req.query.limit) || 20
            const { mark, models } = req.query

            let cars

            if (mark && models) {
                cars = await CarsService.getCars(limit, page, mark, models)
            }
            else if (mark) {

                cars = await CarsService.getCars(limit, page, mark)
            } 
            else {
                cars = await CarsService.getCars(limit, page)
            }

            return res.json(cars)
        } catch (error) {
            console.log(error)
        }
    },

    async getAllMarks(req, res) {
        try {
            let marks = await CarsService.getMarks()

            return res.json(marks)
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = CarsController