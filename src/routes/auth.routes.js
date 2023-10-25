// Router
import { Router } from 'express';
// Auth Controllers
import { login, logout, register } from '../controllers/auth.controller.js';
// Middlewares
import { validateInput } from '../middlewares/inputValidate.middleware.js';
// Schemas
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';

const router = Router();

// Register
router.post('/register', validateInput(registerSchema), register);
// Login
router.post('/login', validateInput(loginSchema), login);
// Logout
router.post('/logout', logout);

export default router;