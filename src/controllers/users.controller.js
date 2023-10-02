import User from "../models/user.model.js";

export const updateProfileInfo = async (req, res) => {
    try {
        const userId = '651b2222e32f0c176545f124';
        const updateFields = {
            ...req.body,
        };

        // Encuentra el usuario por su ID y actualiza los campos proporcionados en req.body
        const result = await User.updateOne({ _id: userId }, { $set: updateFields });

        if (result.nModified === 0) {
        // No se actualizó ningún documento, lo que podría indicar que el usuario no existe
            return res.status(404).json({ message: "No existe el usuario." });
        }

        res.json({ message: "Información actualizada." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al actualizar la imagen de perfil." });
    }
};