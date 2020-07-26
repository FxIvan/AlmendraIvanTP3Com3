const fs = require('fs')

const concesionario = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const homeController={
    home:(req, res)=>{
  
        res.write('       Bienvenido Usuario a mi Concesionaria Ivan Almendra  ')
        res.write('\n')
        res.write('                      Nuestra Sucursales')
        res.write('\n')
        res.write('    ------------------------------------------------   ')
        res.write('\n')      
        concesionario.forEach(concesionaria =>{ 
          res.write(` ${concesionaria.sucursal}   `)
        })  
        res.write('\n') 
        res.write('    ------------------------------------------------   ')
        res.end()
    }
}
module.exports = homeController