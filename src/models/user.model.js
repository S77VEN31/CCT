// Connect User model to DB
import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

}, { timestamps: true })


userModel.add({
    members: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export default mongoose.model("User", userModel);