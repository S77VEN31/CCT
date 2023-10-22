// Models
import Carrer from '../models/carrer.model.js'
import EventCategory from '../models/eventCategory.model.js'

export const createEventCategory = async (req, res) => {
    const { name, description, code } = req.body
    try {
        const newEventCategory = new EventCategory({ name, description, code })
        await newEventCategory.save()
        res.status(200).json(newEventCategory)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getEventCategories = async (req, res) => {
    try {
        const eventCategories = await EventCategory.find()
        res.status(200).json(eventCategories)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createCarrer = async (req, res) => {
    const { name, code } = req.body
    try {
        const newCarrer = new Carrer({ name, code })
        await newCarrer.save()
        res.status(200).json(newCarrer)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getCarrers = async (req, res) => {
    try {
        const carrers = await Carrer.find()
        res.status(200).json(carrers)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}