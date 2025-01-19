
import { model, Schema, models } from "mongoose";


const spotifySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

export default models.spotifies || model("spotifies", spotifySchema);
