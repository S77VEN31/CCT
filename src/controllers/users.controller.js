import User from "../models/user.model.js";

export const updateProfileInfo = async (req, res) => {
    try {
        const userId = '651a8bfd6df0d6d4c13d48d8';
        const { name, carne, phone, profilePicture } = req.body;
        // Encuentra el usuario por su ID
        const user = await User.findById(userId);
        // Si no existe el usuario
        if (!user) {
            return res.status(404).json({ message: "No existe el usuario." });
        }
        // Si existe el usuario
        user.name = name;
        user.carne = carne;
        user.phone = phone;
        user.profilePicture = profilePicture;
        await user.save();
        res.json({ message: "Información actualizada." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al actualizar la imagen de perfil." });
    }
};