import mongoose from 'mongoose';

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
export default mongoose.model("Activity", activityModel);