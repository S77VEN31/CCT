// Connect User model to DB
import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isOrganization: {
        type: Boolean,
        required: true,
    },
    members: {
        type: [userModel],
    }
}, { timestamps: true })
export default mongoose.model("User", userModel);