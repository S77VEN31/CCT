// Router
import { Router } from 'express';
// Auth Controllers
import { login, register, logout, profile } from '../controllers/auth.controller.js';
// Middlewares
import { authRequired } from '../middlewares/jwtValidate.js';

const router = Router();

// Register a new user
router.post('/register', register);
// Login
router.post('/login', login);
// Logout
router.post('/logout', logout);
// Access to profile only if user is logged in
router.get("/profile", authRequired, profile);

export default router;
