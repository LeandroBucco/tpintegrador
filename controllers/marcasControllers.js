const fs = require("fs");
const leerJson = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8")); 

let marcaArray = []

const marcas = {


    index:(req,res) =>{
        res.set({"content-type":"text/plain=utf-8"});
        res.write("Marcas disponibles ")
        res.write("\n\n");


        dataJson.forEach(marcaAuto =>{
            marcaAuto.autos.forEach(marcaAuto =>{
                marcaArray.push(marcaAuto.marca);
            })
        })

        marcaArray= marcaArray.filter((auto,planilla) => marcaArray.indexOf(auto) === planilla)
        marcaArray.forEach(marca =>{
            res.write(`► ${marca} \n`);
        })
        res.write("==============");
        res.end();     
    
    },

    marcas:(req,res)=>{
        res.set({"content-type":"text/plain=utf-8"})

        let id = req.params.id

        dataJson.forEach(marca =>{
            marca.autos.forEach(marca =>{
                marca.push(marca)
            })
        })
        res.write("Marcas: " + id);
        marcaArray.forEach(marca =>{
            if(marca.marca == id){
                res.write("El modelo es: " + marca.modelo)
                res.write("\n\n")
                res.write("El año es: " + marca.anio)
            }
        })

        res.end()      
        
    }
}
module.exports=marcas