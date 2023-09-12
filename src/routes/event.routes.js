// Router 
import { Router } from 'express';
// Controllers
import { getEvents, getEvent } from '../controllers/event.controller.js';

// Middlewares
import { authRequired } from '../middlewares/jwtValidate.js';

const router = Router();

// view all events
router.get('/events', authRequired, getEvents)
// view one event 
router.get('/events/:id', authRequired, getEvent)



export default router;