// Models
import User from "../models/user.model.js";
// Enumerables
import { ErrorMessages } from "../enumerables/errorMessages.js";
import { SuccessMessages } from "../enumerables/successMessages.js";

export const updateProfileInfo = async (req, res) => {
    try {
        const userId = req.user.id;
        const updateFields = {
            ...req.body,
        };
        // Encuentra el usuario por su ID y actualiza los campos proporcionados en req.body
        const result = await User.updateOne({ _id: userId }, { $set: updateFields });
        if (result.nModified === 0) {
            const { code, name, message } = ErrorMessages.userNotFound
            return res.status(code).json({ name, message });
        }
        const { code, name, message } = SuccessMessages.updateProfile;
        res.status(code).json({ message, name });
    } catch (error) {
        const { code, name, message } = ErrorMessages.updateProfile;
        res.status(code).json({ message, name });
    }
};

export const addMember = async (req, res) => {
    try {
        const userId = req.user.id;
        const { carne } = req.body;
        // find member by carne
        const member = await User.findOne({ carne });
        if (!member) {
            const { code, name, message } = ErrorMessages.memberNotFound;
            return res.status(code).json({ message, name });
        }
        const user = await User.findById(userId);
        // Check if member is already in user's members list
        const isMember = user.members.some(element => member._id.equals(element._id));
        if (isMember) {
            const { code, name, message } = ErrorMessages.memberAlreadyExists;
            return res.status(code).json({ message, name });
        } else {
            const { code, name, message } = SuccessMessages.memberAdded;
            await User.updateOne({ _id: userId }, { $addToSet: { members: member._id } });
            return res.status(code).json({ message, name });
        }
    } catch (error) {
        const { code, name, message } = ErrorMessages.memberNotAdded;
        res.status(code).json({ message, name });
    }
}

export const getMembers = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate("members");
        res.status(200).json(user.members);
    } catch (error) {
        const { code, name, message } = ErrorMessages.membersNotFound;
        res.status(code).json({ message, name });
    }
}

