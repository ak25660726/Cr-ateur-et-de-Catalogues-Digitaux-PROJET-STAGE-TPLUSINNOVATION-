import { Router } from 'express';

import {
  create,
  getAll,
  update,
  remove,
} from '../controllers/product.controller.js';

const router = Router();

router.post('/', create);

router.get('/:categoryId', getAll);

router.put('/:id', update);

router.delete('/:id', remove);

export default router;
