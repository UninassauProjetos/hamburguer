import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = Router();

router.post('/', ProdutoController.create);
router.get('/', ProdutoController.findAll);

export default router;