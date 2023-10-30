// Router
import { Router } from 'express';
// Data Controllers
import {
    createCarrer,
    createEventCategory,
    getCarrers,
    getEventCategories,
    getEventCategory
} from '../controllers/data.controller.js';

const router = Router();

// Event Categories
router.get('/data/event/categories', getEventCategories);
router.get('/data/event/category', getEventCategory);
router.post('/data/event/category/create', createEventCategory);
// Carrers
router.get('/data/carrers', getCarrers);
router.post('/data/carrer/create', createCarrer);

export default router;