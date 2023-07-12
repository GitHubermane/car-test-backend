let { getDb } = require('../db')

class MarksService {
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

module.exports = new MarksService()