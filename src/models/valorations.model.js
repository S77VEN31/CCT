// Connect event rating model to DB
import mongoose, { Schema } from "mongoose";

const valorationModel = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, { timestamps: true })
export default mongoose.model("Valoration", valorationModel);