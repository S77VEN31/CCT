// Router
import { Router } from 'express';
// Data Controllers
import { createCarrer, createEventCategory, getCarrers, getEventCategories } from '../controllers/data.controller.js';

const router = Router();

router.post('/data/event/category', createEventCategory);
router.post('/data/carrer', createCarrer);
router.get('/data/event/categories', getEventCategories);
router.get('/data/carrers', getCarrers);

export default router;
