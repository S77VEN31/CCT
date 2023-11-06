// Models
import Proposal from "../models/proposal.model.js";
// Enumerables
import { ErrorMessages } from "../enumerables/errorMessages.js";
import { SuccessMessages } from "../enumerables/successMessages.js";

export const sendProposal = async (req, res) => {
    try {
        const proposer = req.user.id;
        const { title, description, organization } = req.body;
        const newProposal = new Proposal({
            title,
            description,
            organization,
            proposer,
        });
        await newProposal.save();
        const { code, name, message } = SuccessMessages.eventProposalSent;
        res.status(code).json({ message, name });
    } catch (error) {
        const { code, name, message } = ErrorMessages.proposalNotSent;
        res.status(code).json({ message, name });
    }
}

export const getProposals = async (req, res) => {
    try {
        const { id } = req.user;
        const proposals = await Proposal.find({ organization: id }).populate("proposer");
        res.status(200).json(proposals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}