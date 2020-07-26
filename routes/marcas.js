const express = require('express')
const router = express.Router()
const marcasRouter = require('../controller/marcasController')

router.get('/', marcasRouter.allMarca)
router.get('/:marca', marcasRouter.inputMarca)

module.exports = router