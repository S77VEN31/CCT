// Router 
import { Router } from 'express';
// Controllers
import { sendMailTest } from '../controllers/email.controller.js';
import {
    acceptEventRequest,
    addUserToEvent,
    commentEvent,
    createEvent,
    deleteEvent,
    getAllEvents,
    getEvent,
    getEventRequests,
    getEvents,
    getOrganizationEvents,
    getUserEvents,
    joinEvent,
    rejectEventRequest,
    removeUserFromEvent,
    updateCollaboratorsList,
    updateEvent,
    valorateEvent
} from '../controllers/event.controller.js';
// Schemas
import { eventSchema } from '../schemas/event.schema.js';
// Middlewares
import { validateInput } from '../middlewares/inputValidate.middleware.js';
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();

// General
router.get("/events", authRequired, getAllEvents);
// Organization Events
router.get("/organization/events", authRequired, getOrganizationEvents);
router.post('/organization/event/create', authRequired, validateInput(eventSchema), createEvent)
router.put('/organization/event/update', authRequired, updateEvent)
router.delete('/organization/event/delete/:id', authRequired, deleteEvent)
router.put('/organization/event/update/collaborators', authRequired, updateCollaboratorsList)
// User Events
router.get("/user/events", authRequired, getUserEvents);
router.put("/user/event/join", authRequired, addUserToEvent);
router.put("/user/event/leave", authRequired, removeUserFromEvent);

// edit event
router.put('/events/:id', authRequired, updateEvent)
// delete event
router.delete('/events/:id', authRequired, deleteEvent)
// view all events
router.get('/events', authRequired, getEvents)
// view one event 
router.get('/events/:id', authRequired, getEvent)
// comment on event
router.post('/events/:id/comment', authRequired, commentEvent)
// join an event 
router.post('/events/:id/join', authRequired, joinEvent)
// view event requests (event collaborator only)
router.get('/events/:id/requests', authRequired, getEventRequests)
// accept event request (event collaborator only)
router.post('/events/:id/requests/:userId/accept', authRequired, acceptEventRequest)
// reject event request (event collaborator only)
router.post('/events/:id/requests/:userId/reject', authRequired, rejectEventRequest)
// add valoration to event (event attendee only)
router.post('/events/:id/valorate', authRequired, valorateEvent)


// complete and utter test route to send email
router.get('/sendmail', sendMailTest)

export default router;