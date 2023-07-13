let { getDb } = require('../db')

class CarsService {
    async getCars(limit, page, mark, models) {
        //  Не удалось вынести. За пределами 
        //  метода и класса выдает ошибку
        const stock = getDb().collection('stock')
        let cars = []
        let findedCars
        let count
        if (mark && models) {
            let modelsArray = []
            //  Переводим строку моделей в массив
            for (let model of models.split(',')) {
                modelsArray.push(model)
            }

            findedCars = stock
                .find({ mark, model: { $in: modelsArray } })
                .limit(limit)
                .skip(page)
            count = await stock
                .find({ mark, model: { $in: modelsArray } })
                .count()
        }
        else if (mark) {
            findedCars = stock.
                find({ mark })
                .limit(limit)
                .skip(page)
            count = await stock
                .find({ mark })
                .count()
        }
        else {
            findedCars = stock
                .find()
                .limit(limit)
                .skip(page)
            count = await stock.countDocuments()
        }

        for await (let i of findedCars) {
            cars.push(i)
        }

        // const count = await stock.count()

        return { cars, count }
    }
}

module.exports = new CarsService()