const express = require('express')
const router = express.Router()
const autosRouter = require('../controller/autosController')

router.get('/', autosRouter.allCars)
router.get('/:marca' , autosRouter.inputCars)

module.exports = router