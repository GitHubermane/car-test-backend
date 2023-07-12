let MarksService = require('./service')

const MarksController = {
    async getAll(req, res) {
        try {
            let marks = await MarksService.getMarks()

            return res.json(marks)
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = MarksController