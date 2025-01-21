import {model, Schema, models} from "mongoose";

const inscripcionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default models.inscripciones || model("inscripciones", inscripcionSchema);