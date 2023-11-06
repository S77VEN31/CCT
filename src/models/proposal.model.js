import mongoose, { Schema } from 'mongoose';

const proposalModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    proposer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timeStamps: true });
export default mongoose.model("Proposal", proposalModel);