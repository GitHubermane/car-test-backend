let { Router } = require('express')
let MarksController = require('./controller')

const router = Router()

router.get('/', MarksController.getAll)

module.exports = router