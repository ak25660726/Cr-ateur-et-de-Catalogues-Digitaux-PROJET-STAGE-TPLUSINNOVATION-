import { Router } from 'express';
import { create, getAll } from '../controllers/establishment.controller.js';

import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

// Protected routes
router.post('/', authMiddleware, create);

router.get('/', authMiddleware, getAll);

export default router;
