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