// Models
import Carrer from "../models/carrer.model.js";
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
        // Find carrer by code and replace it with the carrer object
        const carrer = await Carrer.findOne({ code: updateFields.carrer });
        updateFields.carrer = carrer;
        // Find user by id and update it with the new fields
        const result = await User.updateOne({ _id: userId }, { $set: updateFields });
        // If user is not found, return error
        if (result.nModified === 0) {
            const { code, name, message } = ErrorMessages.userNotFound
            return res.status(code).json({ name, message });
        }
        // Return success message
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
        // Find member by carne and check if it exists, if not, return error
        const member = await User.findOne({ carne });
        if (!member) {
            const { code, name, message } = ErrorMessages.memberNotFound;
            return res.status(code).json({ message, name });
        }
        const user = await User.findById(userId);
        // Check if member is already in user's members list, if so, return error
        const isMember = user.members.some(element => member._id.equals(element._id));
        if (isMember) {
            const { code, name, message } = ErrorMessages.memberAlreadyExists;
            return res.status(code).json({ message, name });
        }
        // Add member to user's members list and return success message
        const { code, name, message } = SuccessMessages.memberAdded;
        await User.updateOne({ _id: userId }, { $addToSet: { members: member._id } });
        return res.status(code).json({ message, name });
    } catch (error) {
        const { code, name, message } = ErrorMessages.memberNotAdded;
        res.status(code).json({ message, name });
    }
}

export const getMembers = async (req, res) => {
    try {
        const userId = req.user.id;
        // Find user by id, populate members and return them
        const user = await User.findById(userId).populate("members");
        res.status(200).json(user.members);
    } catch (error) {
        const { code, name, message } = ErrorMessages.membersNotFound;
        res.status(code).json({ message, name });
    }
}

export const deleteMember = async (req, res) => {
    try {
        const userId = req.user.id;
        const { carne } = req.body;
        // Find member by carne
        const member = await User.findOne({ carne });
        // Find user by id and check if member is in members list
        const user = await User.findById(userId);
        const isMember = user.members.some(element => member._id.equals(element._id));
        // If member is not in members list, return error
        if (!isMember) {
            const { code, name, message } = ErrorMessages.memberNotFound;
            return res.status(code).json({ message, name });
        }
        // If member is in members list, delete it and return success message
        await User.updateOne({ _id: userId }, { $pull: { members: member._id } });
        const { code, name, message } = SuccessMessages.memberDeleted;
        res.status(code).json({ message, name });
    }
    catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.memberNotDeleted;
        res.status(code).json({ message, name });
    }
}
