
import User from "../models/user.model.js"

export const register = async (req, res) => {
    console.log(req.body)

    const { userName, email, password } = req.body

    try {
        const newUser = new User({ userName, email, password })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }

}
export const login = (req, res) => res.send("login")
