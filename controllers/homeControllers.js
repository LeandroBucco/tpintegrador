const fs = require ("fs");
const leerJson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));

const home ={

        index: (req,res) => {

                res.set({"content-type":"text/plain;charset=utf-8"});
                res.write("Bienvenidos")
                res.write("\n")
                res.write("Nuestras sucursales: ")
                res.write("\n")
                leerJson.forEach((a)=> {
                        res.write(a.sucursales + "\n")   
         });
        res.end()
    }
}




module.exports = home;