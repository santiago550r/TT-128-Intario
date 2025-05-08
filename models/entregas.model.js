 import mongoose from "mongoose";
 const Schema = mongoose.Schema
 const EntregaSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    link_repo:{
        type:String,
        required:false,
        default:" "
    },
    estado:{
        type:Boolean,
        default:false
    },
    avance:{
        type:Number,
        default:0
    }
 })
 export default mongoose.model("Etrega",EntregaSchema)