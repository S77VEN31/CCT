import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentModel = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true })
export default mongoose.model("Comment", commentModel);