const express = require('express');
const app = express();


const routerAutos = require("./routers/autos");
const routerHome = require("./routers/home");
const routerMarcas = require("./routers/marcas");
const routerSucursales = require("./routers/sucursales");
const router = require('./routes/marcas');

app.listen(3030,()=>console.log("SERVER UP 3030"));

app.use("/autos", routerAutos);
app.use("/", routerHome);
app.use("/home",routerHome);
app.use("/marcas",routerMarcas);
app.use("/sucursales",routerSucursales);