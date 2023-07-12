let { Router } = require('express')
let CarsController = require('./controller')

const router = Router()

router.get('/', CarsController.getAll)
    .get('/marks', CarsController.getAllMarks)
    
module.exports = router