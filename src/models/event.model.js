// Mongoose
import mongoose, { Schema } from "mongoose";

const eventModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
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
    capacity: {
        type: Number,
        required: true,
    },
    requiredCollaborators: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "EventCategory",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: "Activity",
        required: true,
    }],
    collaborators: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    valorations: [{
        type: Schema.Types.ObjectId,
        ref: "Valorations",
        required: true,
    }],
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    attendanceRequests: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
    }],
    participants: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
}, { timestamps: true })
export default mongoose.model("Event", eventModel);