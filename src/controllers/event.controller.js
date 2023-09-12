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

export const joinEvent = async (req, res) => {
    try {
        // get event from id param
        const event = await Event.findById(req.params.id)


        // ensure the user is not in the attendees list or attendance requests list
        if (event.attendees.includes(req.user)) {
            throw new Error("You are already an attendee of this event")
        }
        if (event.attendanceRequests.includes(req.user)) {
            throw new Error("You have already requested to join this event")
        }
        // if the event requires approval
        if (event.requiresApproval) {
            // add user to attendanceRequests
            event.attendanceRequests.push(req.user)
        } else {
            // add user to attendees
            event.attendees.push(req.user)
        }
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getEventRequests = async (req, res) => {
    try {
        // get event from id 
        const event = await Event.findById(req.params.id)
        // if user is not collaborator
        if (!event.collaborators.includes(req.user)) {
            // throw error
            throw new Error("You are not a collaborator of this event")
        }
        // return event attendance requests
        res.json(event.attendanceRequests)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const acceptEventRequest = async (req, res) => {
    try {
        // get event requests from id 
        const event = await Event.findById(req.params.id)
        // if user is not collaborator
        if (!event.collaborators.includes(req.user)) {
            // throw error
            throw new Error("You are not a collaborator of this event")
        }
        // find user in attendance requests
        const user = event.attendanceRequests.find(user => user._id == req.params.userId)
        if (!user) {
            throw new Error("User not found")
        }
        // remove user from attendance requests
        event.attendanceRequests = event.attendanceRequests.filter(user => user._id != req.params.userId)
        // add user to attendees
        event.attendees.push(user)
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const rejectEventRequest = async (req, res) => {
    try {
        // get event requests from id 
        const event = await Event.findById(req.params.id)
        // if user is not collaborator
        if (!event.collaborators.includes(req.user)) {
            // throw error
            throw new Error("You are not a collaborator of this event")
        }
        // remove user from attendance requests
        event.attendanceRequests = event.attendanceRequests.filter(user => user._id != req.params.userId)
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
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
        // save event
        await event.save()
        // return 
        res.json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
