import {Schema, model, models} from "mongoose";

const eventoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: false
    },
    cupo: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    }

})

export default models.Eventos || model("Eventos", eventoSchema);