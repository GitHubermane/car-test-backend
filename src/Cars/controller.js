let CarsService = require('./service')

const CarsController = {
    async getAll(req, res) {
        try {
            const page = Number(req.query.page) || 0
            const limit = Number(req.query.limit) || 20
            const { mark, models } = req.query

            let data

            if (mark && models) {
                data = await CarsService.getCars(limit, page, mark, models)
            }
            else if (mark) {

                data = await CarsService.getCars(limit, page, mark)
            } 
            else {
                data = await CarsService.getCars(limit, page)
            }

            return res.json(data)
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = CarsController