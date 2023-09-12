import mongoose from "mongoose";

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
        type: [String],
        required: true,
    },
    feedbackForm: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true })
export default mongoose.model("Event", eventModel);