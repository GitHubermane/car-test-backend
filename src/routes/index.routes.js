let { Router } = require('express')
let CarsRouter = require('../Cars/router')
let MarksRouter = require('../Marks/router')
let ModelsRouter = require('../Models/router')

const router = Router()

router.use('/cars', CarsRouter)
    .use('/marks', MarksRouter)
    .use('/models', ModelsRouter)
module.exports = router