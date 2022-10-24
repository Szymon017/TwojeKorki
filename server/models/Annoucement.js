import mongoose from "mongoose";
import User from "./User";

const AnnoucementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: User,
        required: true
    },
    price:{
        type: Float,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Annoucement = mongoose.model("Annoucement", AnnoucementSchema);
export default Annoucement

