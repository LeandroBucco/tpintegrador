const express = require('express');
const router = express.Router();
const marcasControllers = require("../controllers/marcasControllers");


router.get("/", marcasControllers.index)
router.get("/:id", marcasControllers.marcas);


module.exports = router;