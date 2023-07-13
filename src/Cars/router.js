let { Router } = require('express')
let CarsController = require('./controller')

const router = Router()

router.get('/', CarsController.getAll)
    
module.exports = router