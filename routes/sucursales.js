const express = require('express')
const router=express.Router()
const sucursalesRouter = require('../controller/sucursalesController')

router.get('/' , sucursalesRouter.sucursalesConcesionaria)
router.get('/:sucursal' , sucursalesRouter.inputsConcesionaria)

module.exports = router