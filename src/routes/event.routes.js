// Router 
import { Router } from 'express';
// Controllers
import { sendMailTest } from '../controllers/email.controller.js';
import {
    addUserToEvent,
    createEvent,
    createEventActivity,
    deleteEvent,
    getActivitiesFromEvent,
    getAllEvents,
    getOrganizationEvents,
    getUserEvents,
    rateActivity,
    removeUserFromEvent,
    updateCollaboratorsList,
    updateEvent
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
router.post("/organization/event/activity/create", authRequired, createEventActivity);
router.get("/organization/event/activities/:id", authRequired, getActivitiesFromEvent);
router.post("/organization/event/activity/rate", authRequired, rateActivity);
// User Events
router.get("/user/events", authRequired, getUserEvents);
router.put("/user/event/join", authRequired, addUserToEvent);
router.put("/user/event/leave", authRequired, removeUserFromEvent);



// complete and utter test route to send email
router.get('/sendmail', sendMailTest)

export default router;