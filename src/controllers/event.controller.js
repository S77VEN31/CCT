// Model
import Event from "../models/event.model.js"

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