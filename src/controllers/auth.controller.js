// Model
import User from "../models/user.model.js"
// Encrypt library
import bcrypt from "bcryptjs"
// Create token
import { createAccessToken } from "../libs/jwt.js"

export const register = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        // Hash password
        const passwordHash = await bcrypt.hash(password, 10)
        // Create new user
        const newUser = new User({
            userName,
            email,
            password: passwordHash
        })
        // Save user in DB
        const userSaved = await newUser.save()
        // Create token
        const token = await createAccessToken({ id: userSaved._id })
        // Send token in cookie
        res.cookie("token", token, { httpOnly: true })
        // Send user in response
        res.json({
            id: userSaved._id,
            userName: userSaved.userName,
            email: userSaved.email,
            createdAt: userSaved.createdAt
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Validar cuando se mandan datos extra
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        // Find user
        const userFound = await User.findOne({ email })
        // If user not found
        if (!userFound) return res.status(400).json({ message: "User not found" })
        // Compare password
        const isCorrect = await bcrypt.compare(password, userFound.password)
        // If password is incorrect
        if (!isCorrect) return res.status(400).json({ message: "Incorrect password" })
        // Create token with userFound._id
        const token = await createAccessToken({ id: userFound._id })
        // Send token in cookie
        res.cookie("token", token)
        // Send user in response
        res.json({
            id: userFound._id,
            userName: userFound.userName,
            email: userFound.email,
            createdAt: userFound.createdAt
        })
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
    // Find user await 
    const profileFound = await User.findById(req.user.id)
    // If user not found
    if (!profileFound) return res.status(400).json({ message: "Profile not found" })
    // If user found send user
    res.json({
        id: profileFound._id,
        userName: profileFound.userName,
        email: profileFound.email,
        createdAt: profileFound.createdAt
    })
}
