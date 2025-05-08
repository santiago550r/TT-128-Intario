 const express = require("express")
 const router = express.Router()

const entregasController = require("../controllers/entregas.controllers")
const { default: entregasModel } = require("../models/entregas.model")


router.get("/",entregasController.leerEntregas)
router.get("/id/:id",entregasController.consultarEntregaById)
//router.get("/status/.status")
router.post("".entregasController.crearEntraga)
router.put("/id/id",entregasController.modificarEntregaById)

 module.exports = router