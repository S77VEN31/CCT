import mongoose, { Schema } from 'mongoose';

const activityModel = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    collaborator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })
export default mongoose.model("Activity", activityModel);