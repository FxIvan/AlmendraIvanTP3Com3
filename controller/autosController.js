const fs = require('fs')

const concesionario = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf8'))

const autosControllers ={
    allCars:(req,res)=>{
        res.set({'content-type': 'text/plain; charset=utf8'})
        const todosMisAutos=[]
        res.write(' Estos son nuestros Autos, lo puedes encontrar dependiendo la concesionaria \n')
        res.write('--------------------------------------------------------------------- \n')
        concesionario.forEach(misAutos =>{
            misAutos.autos.forEach(Allcars => {
                todosMisAutos.push(`Marca:${Allcars.marca}    Modelo:${Allcars.modelo}    Año:${Allcars.anio} \n`)
              
            });
        })
    
        const nuevoMisAutos=[...new Set(todosMisAutos)]
    
        nuevoMisAutos.map(x=>{
            res.write(`${x}\n`)
        })
        res.end()
        
        
    },
    inputCars:(req,res)=>{
        res.set({'content-type': 'text/plain; charset=utf-8'})
        let marca = req.params.marca
        res.write(' Acutalmente Tenemos Estos Autos con sus respectivo modelo , año y  marca')
        res.write('\n')
        res.write('--------------------------------------------------------------------------------------------------------\n')
        concesionario.forEach((marcaIngresada)=>{
            marcaIngresada.autos.forEach( buscaMarca =>{
                if( marca == buscaMarca.marca){
                    res.write(`Auto marca: ${ buscaMarca.marca} el año es: ${buscaMarca.anio} y el modelo es: ${buscaMarca.modelo} \n`)
                    res.write('--------------------------------------------------------------------------------------------------------\n')
                }
            })
        })
        res.end()
    }
    
    
}

module.exports = autosControllers