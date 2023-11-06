// Models
import Activity from "../models/activity.model.js";
import Event from "../models/event.model.js";
import EventCategory from "../models/eventCategory.model.js";
import Valoration from "../models/valorations.model.js";
// Enumerables
import { ErrorMessages } from "../enumerables/errorMessages.js";
import { SuccessMessages } from "../enumerables/successMessages.js";

export const getAllEvents = async (req, res) => {
    try {
        // Get all events and return them
        const events = await Event.find().populate('owner');
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

export const updateEvent = async (req, res) => {
    try {
        const eventId = req.body._id;

        const updateFields = {
            ...req.body,
        };
        console.log(req.body)
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
        const { code, name, message } = ErrorMessages.eventNotUpdated;
        res.status(code).json({ message, name });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Find event by id and delete it
        const result = await Event.deleteOne({ _id: eventId });

        // If event is not found or not deleted, return error
        if (result.deletedCount === 0) {
            const { code, name, message } = ErrorMessages.eventNotFound;
            return res.status(code).json({ name, message });
        }

        // Return success message
        const { code, name, message } = SuccessMessages.eventDeleted;
        res.status(code).json({ message, name });

    } catch (error) {
        const { code, name, message } = ErrorMessages.eventNotDeleted;
        res.status(code).json({ message, name });
    }
}



export const getOrganizationEvents = async (req, res) => {
    try {
        const ownerId = req.user.id;
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
        const events = await Event.find({ participants: userId }).populate('owner');
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
        const isParticipant = event.participants.some(element => element._id.toString() === userId);
        // If user is already in event's participants list, return error
        if (isParticipant) {
            const { code, name, message } = ErrorMessages.userAlreadyAdded;
            return res.status(code).json({ message, name });
        }
        // Check if event is full
        if (event.participants.length >= event.capacity) {
            /* Add user to attendanceRequests list, 
            then return error message user is in attendanceRequests list */
            const { code, name, message } = ErrorMessages.eventFull;
            await Event.updateOne({ _id: eventId }, { $addToSet: { attendanceRequests: userId } });
            return res.status(code).json({ message, name });
        }
        // Add user to event's participants list, then return success message
        const { code, name, message } = SuccessMessages.userAdded;
        await Event.updateOne({ _id: eventId }, { $addToSet: { participants: userId } });
        res.status(code).json({ message, name });
    }
    catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.userNotAdded
        res.status(code).json({ message, name });
    }
}

export const removeUserFromEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const { eventId } = req.body;
        // Find event and check if user is already in participants list
        const event = await Event.findById(eventId);
        const isParticipant = event.participants.some(element => element._id.toString() === userId);
        // If user is not in event's participants list, return error
        if (!isParticipant) {
            const { code, name, message } = ErrorMessages.userNotInEvent;
            return res.status(code).json({ message, name });
        }
        // Remove user from event's participants list, then return success message
        const { code, name, message } = SuccessMessages.userRemoved;
        await Event.updateOne({ _id: eventId }, { $pull: { participants: userId } });
        res.status(code).json({ message, name });
    }
    catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.userNotRemoved
        res.status(code).json({ message, name });
    }
}

export const updateCollaboratorsList = async (req, res) => {
    try {
        const { collaborators, eventId } = req.body;
        // Find event and update collaborators list
        const event = await Event.findById(eventId);
        event.collaborators = collaborators;
        await event.save();
        // Return success message
        const { code, name, message } = SuccessMessages.collaboratorsModified;
        res.status(code).json({ message, name });
    }
    catch (error) {
        const { code, name, message } = ErrorMessages.collaboratorsNotModified;
        res.status(code).json({ message, name });
    }
}

export const createEventActivity = async (req, res) => {
    try {
        const { startTime, title, description, location, endTime, collaborator, eventId } = req.body;
        const newActivity = new Activity({
            startTime,
            title,
            description,
            location,
            endTime,
            collaborator,
        });
        await newActivity.save();
        const event = await Event.findById(eventId);
        event.activities.push(newActivity._id);
        await event.save();
        const { code, name, message } = SuccessMessages.activityCreated;
        res.status(code).json({ message, name });
    } catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.activityNotCreated;
        res.status(code).json({ message, name });
    }
}

export const getActivitiesFromEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate({
            path: 'activities',
            populate: {
                path: 'collaborator'
            }
        });
        res.status(200).json(event.activities);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const rateActivity = async (req, res) => {
    try {
        const { userId } = req.user.id;
        const { activityId, rating, comment } = req.body;
        const valoration = new Valoration({
            user: userId,
            rating,
            comment
        });
        await valoration.save();
        const activity = await Activity.findById(activityId);
        activity.valorations.push(valoration._id);
        const { code, name, message } = SuccessMessages.valorationSend;
        res.status(code).json({ message, name });
    } catch (error) {
        console.log(error);
        const { code, name, message } = ErrorMessages.valorationNotSend;
        res.status(code).json({ message, name });
    }
}












