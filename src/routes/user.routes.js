// Router
import { Router } from 'express';
// Auth Controllers
import { updateProfileInfo, addMember, getMembers, deleteMember } from '../controllers/users.controller.js';
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();

router.put("/users/updateProfileInfo", authRequired, updateProfileInfo);
router.put("/organization/addMember", authRequired, addMember);
router.get("/organization/getMembers", authRequired, getMembers);
router.delete("/organization/deleteMember", authRequired, deleteMember);

export default router;