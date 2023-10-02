// Router
import { Router } from 'express';
// Auth Controllers
import { updateProfileInfo } from '../controllers/users.controller.js';

const router = Router();

router.put("/users/updateProfileInfo", updateProfileInfo);

export default router;