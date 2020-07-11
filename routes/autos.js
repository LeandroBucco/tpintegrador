const express = require('express');
const router = express.Router();
const autosControllers = require("../controllers/autosControllers");


router.get("/", autosControllers.autos);
router.get("/:marca", autosControllers.marca)
router.get("/:marca/:dato",autosControllers.dato)



module.exports = router