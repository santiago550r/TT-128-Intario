const {default: entregasModel } = require("../models/entregas.model")

exports.leerEntregas = async (req,res)=> {
    try{
        const entregas = await entregasModel.find({})
        await entregas.save()
        return res.status(201).json(entregas)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
exports.crearEntrega = async (req,res)=>{
    try {
        const entrega = new entragasModel(req.body)
        await entrega.save()
        return res.status(201).json(entrega)
    }catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
exports.consultarEntregaById = async (req,res)=>{
    try{
        const id = req.params.id
        const entrega =await entregasModel.findById(id)
        return res.status(200).json(entrega)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
exports.modificarEntregaById = async (req,res)=>{
    try{
        const id = req.params.id
        const entragasModelficada = req.body
        await entregasModel.findByIdAndUpdate(id,entregaModificada)
        return res.status(200).json(entregaModificada)
    }catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
exports.eliminarEntregaById = async (req,res)=>{
    try{
        const id = req.params.id
        await entregasModel.findByIdAndDelete(id)
        return res.status(200).json({message:`entrega eliminada con id ${id}`})
    }catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}

//{message:`entrega eliminada con id ${id}`}