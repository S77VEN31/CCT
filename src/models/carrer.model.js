import mongoose from "mongoose";

const carrerModel = new mongoose.Schema({
    name: {
        type: String,
    },
    code: {
        type: String,
    }
})
export default mongoose.model("Carrer", carrerModel);