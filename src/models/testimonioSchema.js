import {model, models, Schema} from "mongoose";

const testimonioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default models.testimonios || model("testimonios", testimonioSchema);