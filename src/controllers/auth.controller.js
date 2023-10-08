// Model
import User from "../models/user.model.js"
// Encrypt library
import bcrypt from "bcryptjs"
// Create token
import { createAccessToken } from "../libs/jwt.js"
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
            isOrganization
        })
        await newUser.save()
        // Create token
        const token = await createAccessToken({ id: newUser._id })
        res.cookie("token", token)
        // Send userSaved in response
        res.status(200).json(newUser)
    }
    catch (error) {
        // Email or username is already in use
        if (error.code === 11000) {
            const { code, error, message } = ErrorMessages.inUse
            return res.status(code).json({ error, message })
        }
        res.status(500).json({ message: error })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        // Find user
        const userFound = await User.findOne({ email })
        if (!userFound) {
            const { code, error, message } = ErrorMessages.userNotFound
            return res.status(code).json({ error, message })
        }
        // Compare password
        const isCorrect = await bcrypt.compare(password, userFound.password)
        if (!isCorrect) {
            const { code, error, message } = ErrorMessages.invalidPassword
            return res.status(code).json({ error, message })
        }
        // Create token with userFound._id
        const token = await createAccessToken({ id: userFound._id })
        res.cookie("token", token)
        // Send user in response
        res.status(200).json(userFound)
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
