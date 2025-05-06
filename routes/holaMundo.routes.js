 const express = require("express")
 const router = express.Router()
const holaController = require("../controllers/holaMundon.controllers")

 router.get("/", holaController.holaMundo)
router.get("/esteban",(req,res)=>{
    res.send("hola esteban")
})

router.get("/cesar",(req,res)=>{
    res.send("hola cesar") 
})
 module.exports = router