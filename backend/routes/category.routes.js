import { Router } from 'express';

import { create, getAll } from '../controllers/category.controller.js';

const router = Router();

router.post('/', create);

router.get('/:establishmentId', getAll);

export default router;
