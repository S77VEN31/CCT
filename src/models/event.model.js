import mongoose from "mongoose";
import userModel from "./user.model";

const activityModel = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true })

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

const eventModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    comments: {
        type: [commentModel],
        required: true,
    },
    requiresApproval: {
        type: Boolean,
        required: true,
    },
    attendanceRequests: {
        type: [userModel],
        required: true,
    },
    collaborators: {
        type: [userModel],
        required: true,
    },
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
    attendees: {
        type: [userModel],
        required: true,
    },
    feedbackForm: {
        type: String,
        required: true,
        trim: true,
    },
    activities: {
        type: [activityModel],
        required: true,
    },
}, { timestamps: true })
export default mongoose.model("Event", eventModel);