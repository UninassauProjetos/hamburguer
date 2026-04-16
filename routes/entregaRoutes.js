import { Router } from 'express';
import EntregaController from '../controllers/EntregaController.js';

const router = Router();

router.post('/', EntregaController.create);
router.get('/', EntregaController.findAll);

export default router;