import mongoose from "mongoose";
import userModel from "./user.model";
import activityModel from "./activity.model";
import commentModel from "./comment.model";
import valorationsModel from "./valorations.model";


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
    valorations: {
        type: [valorationsModel],
        required: true,
    }
}, { timestamps: true })
export default mongoose.model("Event", eventModel);