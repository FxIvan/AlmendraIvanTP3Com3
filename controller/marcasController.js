const fs = require('fs')

const concesionario = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf8'))


const marcasController ={
    allMarca:(req,res)=>{
        res.set({'content-type': 'text/plain; charset=utf-8'})
        let marcasArray=[]
        res.write('  Estas son nuestras marcas Actuales\n')
        res.write('-------------------------------------- \n')
        concesionario.forEach(concesionaria =>{
            concesionaria.autos.forEach((auto)=>{
                    marcasArray.push(auto.marca)
            })
        })
    
        let nuevoArrayS =[...new Set(marcasArray)]
        
        nuevoArrayS.map(x =>{
            res.write(`${x}\n`)
        })
        res.write('--------------------------------------\n')
        res.write('     Concesionarias Ivan :D ') 
        res.end()
    
    },
    inputMarca:(req,res)=>{
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

module.exports = marcasController