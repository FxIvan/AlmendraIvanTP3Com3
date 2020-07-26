const express= require('express')
const router = express.Router()
const autosHome = require('../controller/homeController')

router.get('/', autosHome.home)



module.exports= router