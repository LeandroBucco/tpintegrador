const fs = require ('fs')
const marcasController = require('./marcasController');

dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
    autos:(req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('aca hay auttios')
    dbConce.forEach((a)=>{
            dato.autos.forEach((a)=>{
                res.write('Marca:' + a.marca)
                res.write('Modelo:' + a.modelo)
                res.write('Año:' + a.anio)
            })
    })
},
    marca:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
    let parametroAuto = req.params.marca;
    let rs = false;

        res.write(parametroAuto)

        dbConce.forEach((a)=>{
            a.autos.forEach((a)=>{
            if(a.marca == parametroAuto){
                    res.write("----------------------------------\n\n")
               res.write('Marca: ' + a.marca + '\n')
               res.write('Modelo: ' + a.modelo + '\n')
               res.write('Año: ' + a.anio + '\n\n')
               res.write('Color: ' + a.color + '\n\n')
        
               rs = true;
                  }              
                      })
                             })
           if(rs == false){
            res.write('no pa, sory')
            }
            res.end()   
            },

    dato: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'});
                let parametroMarca = req.params.marca;
                let parametroDato = req.params.a    ;
                let rs = false;
                dbConce.forEach(function(a){
                    dato.autos.forEach(function(auto){
                        if(auto.anio == parametroDato){
                            rs = true
                        }
                    })
                })
                dbConce.forEach(function(a){
                    dato.autos.forEach(function(auto){
                        if(auto.color == parametroDato){
                            rs = true
                        }
                    })
                })
                if (rs == true) {
                    res.write ("hay papa")

    }
    rs== false

        
    dbConce.forEach(function(sucursal){
        let color = sucursal.autos.filter(function(auto){
            return (auto.color == parametroDato || auto.anio == parametroDato) && auto.marca == parametroMarca
        })
        color.forEach(function(dato){
           
            res.write('MARCA: '+ a.marca+  ' \n')
            res.write('MODELO: '+ a.modelo+' \n')
            res.write('AÑO: '+ a.anio+     ' \n')
            res.write('COLOR: '+ a.color+  ' \n')
            res.write('--------------------------- \n')
            rs == true;
        })
    })
    if(rs == false){
        res.write("\n\n\n")
        res.write("nada")
        }
        res.end()
        }
        }

module.exports = autosController