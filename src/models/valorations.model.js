// Connect event rating model to DB
import mongoose from "mongoose";
// Keep track of who rated the event 
import userModel from "./user.model.js";


const valorationModel = new mongoose.Schema({
    user: {
        type: userModel,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },

    recommendationProbability: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },

    assistanceProbability: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },

    comment: {
        type: String,
        trim: true,
    },
    likesComment: {
        type: String,
        trim: true,
    },
    dislikesComment: {
        type: String,
        trim: true,
    }
}, { timestamps: true })

export default mongoose.model("Valoration", valorationModel);