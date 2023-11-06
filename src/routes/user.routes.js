// Router
import { Router } from 'express';
// User Controllers
import { addMember, deleteMember, getMembers, getOrganizations, getProfile, updateProfileInfo } from '../controllers/users.controller.js';
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.middleware.js';

const router = Router();

// General
router.get('/profile', authRequired, getProfile);
router.put("/profile/update", authRequired, updateProfileInfo);
// Organization
router.get("/organizations", authRequired, getOrganizations);
router.get("/organization/members", authRequired, getMembers);
router.put("/organization/member/join", authRequired, addMember);
router.put("/organization/member/delete", authRequired, deleteMember);

export default router;