// Router
import { Router } from 'express';
// Auth Controllers
import { updateProfileInfo, addMember, getMembers, deleteMember } from '../controllers/users.controller.js';
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();
// General
router.put("/users/updateProfileInfo", authRequired, updateProfileInfo);
// Organization
router.put("/organization/addMember", authRequired, addMember);
router.get("/organization/getMembers", authRequired, getMembers);
router.put("/organization/deleteMember", authRequired, deleteMember);

export default router;