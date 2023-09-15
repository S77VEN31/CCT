// Model
import User from "../models/user.model.js"
// Encrypt library
import bcrypt from "bcryptjs"
// Create token
import { createAccessToken } from "../libs/jwt.js"
// Libs
import { customErrorMessages } from "../libs/errorMessages.js"
// Enumerables
import { ErrorMessages } from "../enumerables/errorMessages.js"

export const register = async (req, res) => {
    const {
        userName,
        email,
        password,
        isOrganization
    } = req.body
    try {
        // Hash password
        const passwordHash = await bcrypt.hash(password, 10)
        // Create new user and save it
        const newUser = new User({
            userName,
            email,
            password: passwordHash,
            isOrganization,
        })
        await newUser.save()
        // Create token
        const token = await createAccessToken({ id: newUser._id })
        res.cookie("token", token)
        // Send userSaved in response
        res.json(newUser)
    }
    catch (error) {
        // Email or username is already in use
        if (error.code === 11000) {
            // Error messages object destructuring
            const { validation, name, code, messages } = ErrorMessages.inUse
            const { userName, email } = messages
            // Get key and message
            const key = Object.keys(error.keyValue)[0]
            const message = key === "userName"
                ? userName
                : email
            // Send error message
            return res.status(400).json(customErrorMessages(
                key,
                message,
                code,
                validation,
                name
            ))
        }
        // Other errors
        res.status(500).json({ message: error })
    }
}

// Validar cuando se mandan datos extra
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        // Find user
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "User not found" })
        // Compare password
        const isCorrect = await bcrypt.compare(password, userFound.password)
        if (!isCorrect) return res.status(400).json({ message: "Incorrect password" })
        // Create token with userFound._id
        const token = await createAccessToken({ id: userFound._id })
        res.cookie("token", token)
        // Send user in response
        res.json(userFound)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    // Clear cookie
    res.cookie("token", "", { expires: new Date(0) })
    // Send status
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    // Find user
    const profileFound = await User.findById(req.user.id)
    if (!profileFound) return res.status(400).json({ message: "Profile not found" })
    // Send user in response
    const response = {
        id: profileFound._id,
        userName: profileFound.userName,
        email: profileFound.email,
        createdAt: profileFound.createdAt
    }
    res.json(response)
}
