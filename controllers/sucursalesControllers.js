const fs = require("fs");
const express = require("express");
const leerJson = JSON.parse(fs.readFileSync("./data/concesionarias.json"));


const sucursal={
    index:(req,res)=>{
        res.set({"content-type":"text/plain;charset=utf-8"});
        res.write(`     SUCURSALES Y DIRECCIONES`);
        res.write("\n\n");
        
        //Hago un forEach sonbre leerJson
        leerJson.forEach(call =>{
            res.write(`
            Sucursal ${call.sucursal}
            Direccion ${call.direccion}
            `)
        })
        res.end();        
    },

    sucur:(req,res)=>{
        res.set({"content-type":"text/plain;utf-8"});
        //variable id 
        let id=req.params.id;
        leerJson.forEach(call =>{

            if(call.sucursal == id){

                res.write("Sucursal: "+ call.sucursal)
                res.write("\n\n");
                res.write("Telefono: "+ call.telefono)               
                res.write("\n\n");
                res.write("----------------------------------------")
                res.write("\n\n");
                res.write("Autos disponibles:");
                res.write("\n\n");
                call.autos.forEach(call =>{
                    res.write("Marca: " + call.marca)
                    res.write("\n\n");
                    res.write("Modelo: "+ call.modelo)
                    res.write("\n\n");
                    res.write("Año: "+ call.anio)
                    res.write("\n\n");
                    res.write("color: "+ call.color)
                    res.write("\n\n");
                });
            }
                
            })          
        res.end()       
        }   
        }       

module.exports = sucursal;
