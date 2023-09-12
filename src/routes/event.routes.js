// Router 
import { Router } from 'express';
// Controllers
import { getEvents, getEvent, commentEvent } from '../controllers/event.controller.js';

// Middlewares
import { authRequired } from '../middlewares/jwtValidate.js';

const router = Router();

// view all events
router.get('/events', authRequired, getEvents)
// view one event 
router.get('/events/:id', authRequired, getEvent)
// comment on event
router.post('/events/:id/comment', authRequired, commentEvent)


export default router;