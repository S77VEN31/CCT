// Router
import { Router } from 'express';
// Auth Controllers
import { updateProfileInfo } from '../controllers/users.controller.js';
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();

router.put("/users/updateProfileInfo", authRequired, updateProfileInfo);

export default router;