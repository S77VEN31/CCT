// Models
import Event from "../models/event.model.js"
import Comment from "../models/comment.model.js"
import User from "../models/user.model.js"

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        res.json(event)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const commentEvent = async (req, res) => {
    try {
        // get user id from req.user
        const userId = req.user._id
        // get user from user id
        const user = await User.findById(userId)
        // get event id from req.params
        const eventId = req.params.id
        // get event from id 
        const event = await Event.findById(eventId)
        // create comment 
        const comment = new Comment({
            user: user,
            content: req.body.comment
        })
        event.comments.push(comment)
        // return 
        res.json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
