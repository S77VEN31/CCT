import mongoose from "mongoose";
import userModel from "./user.model.js";

const commentModel = new mongoose.Schema({
    user: {
        type: userModel,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true })
export default mongoose.model("Comment", commentModel);