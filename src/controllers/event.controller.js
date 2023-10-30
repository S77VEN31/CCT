// Models
import Comment from "../models/comment.model.js";
import Event from "../models/event.model.js";
import EventCategory from "../models/eventCategory.model.js";
import User from "../models/user.model.js";
// Enumerables
import { ErrorMessages } from "../enumerables/errorMessages.js";
import { SuccessMessages } from "../enumerables/successMessages.js";

export const getAllEvents = async (req, res) => {
    try {
        // Get all events and return them
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        const { code, name, message } = ErrorMessages.notEventsFound;
        res.status(code).json({ message, name });
    }
}

export const createEvent = async (req, res) => {
    try {
        const { categoryName, ...eventData } = req.body;

        // Search category by name and get the object
        const category = await EventCategory.findOne({ name: categoryName });

        // Check if category was found
        if (!category) {
            return res.status(400).json({ message: 'Category not found' });
        }

        // Create event object and save it, then return success message
        const event = new Event({
            ...eventData,
            category: category._id,
            owner: req.user.id,
            activities: [],
            collaborators: [],
            valorations: [],
            attendees: [],
            attendanceRequests: [],
            comments: [],
            participants: []
        });

        await event.save();

        const { code, name, message } = SuccessMessages.eventCreated;
        res.status(code).json({ message, name });

    } catch (error) {
        const { code, name, message } = ErrorMessages.createEvent;
        res.status(code).json({ message, name });
    }
}

export const updateEventInfo = async (req, res) => {
    console.log(req.body)
    try {
        const eventId = req.body._id;

        const updateFields = {
            ...req.body,
        };

        // Find event by id and update it with the new fields
        const result = await Event.updateOne({ _id: eventId }, { $set: updateFields });

        // If event is not found or not modified, return error
        if (result.nModified === 0) {
            const { code, name, message } = ErrorMessages.eventNotFound;
            return res.status(code).json({ name, message });
        }

        // Return success message
        const { code, name, message } = SuccessMessages.eventUpdated;
        res.status(code).json({ message, name });

    } catch (error) {
        const { code, name, message } = ErrorMessages.updateEvent;
        res.status(code).json({ message, name });
    }
};



export const getOrganizationEvents = async (req, res) => {
    try {
        const ownerId = req.user.id;
        console.log(ownerId);
        // Get events that have the owner id in the owner field, then return them
        const events = await Event.find({ owner: ownerId });
        res.status(200).json(events);
    } catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.notEventsFound;
        res.status(code).json({ message, name });
    }
}

export const getUserEvents = async (req, res) => {
    try {
        const userId = req.user.id;
        // Get events that have the user id in the participants field, then return them
        const events = await Event.find({ participants: userId });
        res.status(200).json(events);
    } catch (error) {
        const { code, name, message } = ErrorMessages.notEventsFound;
        res.status(code).json({ message, name });
    }
}

export const addUserToEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const { eventId } = req.body;
        // Find event and check if user is already in participants list
        const event = await Event.findById(eventId);
        const isParticipant = event.participants.some(element => userId.equals(element._id));
        // If user is already in event's participants list, return error
        if (isParticipant) {
            const { code, name, message } = ErrorMessages.userAlreadyAdded;
            return res.status(code).json({ message, name });
        }
        // Add user to event's participants list, then return success message
        const { code, name, message } = SuccessMessages.userAdded;
        await Event.updateOne({ _id: eventId }, { $addToSet: { participants: userId } });
        res.status(code).json({ message, name });
    }
    catch (error) {
        const { code, name, message } = ErrorMessages.userNotAdded
        res.status(code).json({ message, name });
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