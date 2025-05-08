const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const holaRoutes = require("./routes/holaMundo.routes")
const entregasRoutes =require("./routes/entregas.routes")
const app = express()
const PORT = process.env.PORT || 3006

app.set("port",PORT)
app.use(express.json())
app.use("/api/hola",holaRoutes)
app.use("/api/entregas",entregasRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos conectada"))
.catch(err=>console.error("No se pudo conectar a la BD",err))

app.listen(PORT,()=>{
     console.log(`Escuchando en el puerto ${PORT}`)
})