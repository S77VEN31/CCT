// Router
import { Router } from 'express';
// Data Controllers
import {
    createCarrer,
    createEventCategory,
    getCarrers,
    getEventCategories
} from '../controllers/data.controller.js';

const router = Router();

// Event Categories
router.post('/data/eventCategory', createEventCategory);
router.get('/data/eventCategories', getEventCategories);
// Carrers
router.post('/data/carrer', createCarrer);
router.get('/data/carrers', getCarrers);

export default router;