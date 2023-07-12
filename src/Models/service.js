let { getDb } = require('../db')

class ModelsService {
    async getModels(mark) {
        const stock = getDb().collection('stock')
        let models = []
        let findedModels = stock.aggregate([
            { $match: { mark } },
            { $group: { "_id": "$model", } }
        ])

        for await (let model of findedModels) {
            models.push(model)
        }

        return models
    }
}

module.exports = new ModelsService()