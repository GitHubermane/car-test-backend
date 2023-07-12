let { Router } = require('express')
let ModelsController = require('./controller')

const router = Router()

router.get('/:mark', ModelsController.getByMark)

module.exports = router