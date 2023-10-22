import mongoose from "mongoose";

const eventCategoryModel = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    code: {
        type: String,
    }
})
export default mongoose.model("EventCategory", eventCategoryModel);