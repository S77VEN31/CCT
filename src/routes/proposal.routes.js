// Router
import { Router } from 'express';
// Data Controllers
import { getProposals, sendProposal } from "../controllers/proposal.controller.js";
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();

// Event Categories
router.get('/proposals', authRequired, getProposals);
router.post('/proposal/send', authRequired, sendProposal);

export default router;