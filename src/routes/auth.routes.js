// Router
import { Router } from 'express';
// Auth Controllers
import { login, logout, profile, register } from '../controllers/auth.controller.js';
// Middlewares
import { validateInput } from '../middlewares/inputValidate.middleware.js';
import { authRequired } from '../middlewares/jwtValidate.middleware.js';
// Schemas
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';

const router = Router();

// Register a new user
router.post('/register', validateInput(registerSchema), register);
// Login
router.post('/login', validateInput(loginSchema), login);
// Logout
router.post('/logout', logout);
// Access to profile only if user is logged in
router.get('/profile', authRequired, profile);

export default router;
