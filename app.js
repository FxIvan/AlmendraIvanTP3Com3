const express = require('express')
const app = express()
const fs = require('fs')

app.listen(3030 , ()=> console.log('Servidor levantado por el puerto 3030'))

const rutaHome = require('./routes/home')
const rutaSucursal = require('./routes/sucursales')
const rutaMarcas = require('./routes/marcas')
const rutaAutos = require('./routes/autos')

app.use('/', rutaHome)
app.use('/sucursales',rutaSucursal)
app.use('/marcas',rutaMarcas)
app.use('/autos', rutaAutos)

