// Router
import { Router } from 'express';
// Data Controllers
import { getProposals, sendProposal } from "../controllers/proposal.controller.js";

const router = Router();

// Event Categories
router.get('/proposals', getProposals);
router.post('/proposal/send', sendProposal);

export default router;