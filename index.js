 const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const holaRoutes = require("./routes/holaMundo.routes")
const app = express()
const PORT = process.env.PORT || 3006

app.set("port",PORT)
app.use("/api/hola",holaRoutes)

app.get("/",(req,res)=>{
    res.send("hola mundo")
})

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos conectada"))
.catch(err=>console.error("No se pudo conectar a la BD",err))

app.listen(PORT,()=>{
     console.log(`Escuchando en el puerto ${PORT}`)
})
