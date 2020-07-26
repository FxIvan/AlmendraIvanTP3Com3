const fs = require('fs')
const concesionario = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursalesController={
    sucursalesConcesionaria:function(req, res){

        res.write('                       Estas son las direciones de Nuestra Sucursales   ')
          res.write('\n') 
          res.write('----------------------------------------------------------------------------------------   ')
          res.write('\n')   
      
        concesionario.forEach( sucursalesDireccion => {
          res.write(` ${sucursalesDireccion.sucursal}  \n`)
          res.write(` ${sucursalesDireccion.direccion} \n`)
          res.write(`\n`)
          res.write('----------------------------------------------------------------------------------------   ')
        });
        
        res.write('\n')   
        res.write('                                         Te Esperamos :)                   ')
      
        res.end()
    },
    inputsConcesionaria:(req,res)=>{
        let ubicaciontSucursal = req.params.sucursal
        concesionario.forEach( datosSucursal =>{
          if( ubicaciontSucursal == datosSucursal.sucursal){
      
            res.write(`${datosSucursal.sucursal} \n`)
            res.write(`${datosSucursal.direccion} \n`)
            res.write(`${datosSucursal.telefono} \n`)
            res.write(`${datosSucursal.autos.forEach(datosAuto =>{  
              res.write(`\n`)
              res.write(`${datosAuto.marca} \n`)
              res.write(`${datosAuto.modelo} \n`)
              res.write(`${datosAuto.anio} \n`)
              res.write(`\n`)
              res.write(`----------------------------------------------------    `)
            })} \n`)
      
            res.write(`Tota de autos en la concesionaria:  ${datosSucursal.autos.length} \n`)
      
      
          }
        })
        res.end()
      }
}
module.exports = sucursalesController