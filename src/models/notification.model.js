import mongoose from "mongoose";

import userModel from "./user.model.js";

const notificationModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String
    },
    reciepients: {
        type: [userModel],
        required: true,
    },
    sender: {
        type: userModel,
        required: true,
    },
    QRLinks: {
        type: [String],
    }
}, {timestamps: true});

export default mongoose.model("Notification", notificationModel);