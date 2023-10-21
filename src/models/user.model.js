// Mongoose
import mongoose, { Schema } from "mongoose";

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
    profilePicture: {
        type: Buffer,
    },
    name: {
        type: String,
    },
    carne: {
        type: String,
    },
    phone: {
        type: String,
    },
    carrerCode: {
        type: Schema.Types.ObjectId,
        ref: "Carrer",
    },
    description: {
        type: String,
    },
}, { timestamps: true })

userModel.add({
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

export default mongoose.model("User", userModel);