import Proposal from "../models/proposal.model.js";

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
        res.status(200).json({ message: "Proposal created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
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