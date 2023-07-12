let { getDb } = require('../db')

class CarsService {

    async getCars(limit, page, mark, models) {
        //  Не удалось вынести. За пределами 
        //  метода и класса выдает ошибку
        const stock = getDb().collection('stock')

        let cars = []
        let findedCars

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
        }
        else if (mark) {
            findedCars = stock
                .find({ mark: mark })
                .limit(limit)
                .skip(page)
        }
        else {
            findedCars = stock
                .find()
                .limit(limit)
                .skip(page)
        }

        for await (let i of findedCars) {
            cars.push(i)
        }

        return cars
    }

    async getMarks() {
        const stock = getDb().collection('stock')
        let marks = []
        let findedMarks = stock.aggregate([
            { $group: { "_id": "$mark", count: { $sum: 1 } } }
        ])

        for await (let mark of findedMarks) {
            marks.push(mark)
        }

        return marks
    }
}

module.exports = new CarsService()