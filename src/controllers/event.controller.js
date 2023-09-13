// Models
import Event from "../models/event.model.js"
import Comment from "../models/comment.model.js"
import User from "../models/user.model.js"

export const valorateEvent = async (req, res) => {
    try {
        // validate that the user is an attendee
        const event = await Event.findById(req.params.id)
        if (!event.attendees.includes(req.user)) {
            throw new Error("You are not an attendee of this event")
        }
        // validate that the user has not valorated the event
        if (event.valorations.find(valoration => valoration.user == req.user)) {
            throw new Error("You have already valorated this event")
        }
        // create valoration
        const valoration = {
            user: req.user,
            rating: req.body.rating,
            recommendationProbability: req.body.recommendationProbability,
            assistanceProbability: req.body.assistanceProbability,
            comment: req.body.comment,
            likesComment: req.body.likesComment,
            dislikesComment: req.body.dislikesComment
        }
        // add valoration to event
        event.valorations.push(valoration)
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const createEvent = async (req, res) => {
    ({ title, description, startTime, endTime, location, category, capacity, requiresApproval } = req.body);    
    try {
        // verify user is an organization
        if (!req.user.isOrganization) {
            throw new Error("You are not an organization")
        }
        // find organization members
        const members = await User.find({ _id: { $in: req.user.members } })
        // create event
        const event = new Event({
            title: title,
            description: description,
            startTime,
            endTime,
            location,
            category,
            capacity,
            requiresApproval: requiresApproval,
            activities: [],
            collaborators: [req.user, ...members],
            valorations: [],
            attendees: [req.user],
            attendanceRequests: [],
            comments: []
        })
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateEvent = async (req, res) => {
    try {
        // get event from id param
        const event = await Event.findById(req.params.id)
        // ensure user is a collaborator
        if (!event.collaborators.includes(req.user)) {
            throw new Error("You are not a collaborator of this event")
        }
        // update event
        event.title = req.body.title
        event.description = req.body.description
        event.startTime = req.body.startTime
        event.endTime = req.body.endTime
        event.location = req.body.location
        event.category = req.body.category
        event.capacity = req.body.capacity
        event.requiresApproval = req.body.requiresApproval
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteEvent = async (req, res) => {
    try {
        // get event from id param
        const event = await Event.findById(req.params.id)
        // ensure user is a collaborator
        if (!event.collaborators.includes(req.user)) {
            throw new Error("You are not a collaborator of this event")
        }
        // delete event
        await event.delete()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

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
export const leaveEvent = async (req, res) => {
    try {
        // get event from id param
        const event = await Event.findById(req.params.id)
        // ensure user is an attendee
        if (!event.attendees.includes(req.user)) {
            throw new Error("You are not an attendee of this event")
        }
        // remove user from attendees
        event.attendees = event.attendees.filter(user => user._id != req.user._id)
        // save event
        await event.save()
        // return event
        res.json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const joinEvent = async (req, res) => {
    try {
        // get event from id param
        const event = await Event.findById(req.params.id)

        // ensure the event is not over capacity
        if (event.attendees.length >= event.capacity) {
            throw new Error("Event is over capacity")
        }

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
        // ensure event is not over capacity
        if (event.attendees.length >= event.capacity) {
            throw new Error("Event is over capacity")
        }
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