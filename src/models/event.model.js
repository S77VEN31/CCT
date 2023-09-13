import mongoose, { Schema } from "mongoose";
import userModel from "./user.model.js";
import activityModel from "./activity.model.js";
import commentModel from "./comment.model.js";
import valorationsModel from "./valorations.model.js";


const eventModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
    }],
    requiresApproval: {
        type: Boolean,
        required: true,
    },
    attendanceRequests: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    collaborators: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    description: {
        type: String
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    activities: [{
        type: Schema.Types.ObjectId,
        ref: "Activity",
        required: true,
    }],
    valorations: [{
        type: Schema.Types.ObjectId,
        ref: "Valorations",
        required: true,
    }]
}, { timestamps: true })
export default mongoose.model("Event", eventModel);