// Router 
import { Router } from 'express';
// Controllers
import { getEvents, createEvent, editEvent, valorateEvent, deleteEvent, getEvent, commentEvent, joinEvent, getEventRequests, acceptEventRequest, rejectEventRequest } from '../controllers/event.controller.js';

// Middlewares
import { authRequired } from '../middlewares/jwtValidate.js';

const router = Router();

// create event 
router.post('/events', authRequired, createEvent)
// edit event
router.put('/events/:id', authRequired, editEvent)
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
export default router;