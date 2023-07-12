let ModelsService = require('./service')

const ModelsController = {
    async getByMark(req, res) {
        try {
            const { mark } = req.params
            let models = await ModelsService.getModels(mark)

            return res.json(models)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = ModelsController