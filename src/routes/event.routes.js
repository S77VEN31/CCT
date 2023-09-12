// Router 
import { Router } from 'express';
// Controllers
import { getEvents, getEvent, commentEvent, joinEvent, getEventRequests, acceptEventRequest, rejectEventRequest } from '../controllers/event.controller.js';

// Middlewares
import { authRequired } from '../middlewares/jwtValidate.js';

const router = Router();

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
export default router;