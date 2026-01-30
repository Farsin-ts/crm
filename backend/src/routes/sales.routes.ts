import { Router } from 'express';
import salesController from '../controllers/sales.controller.js';
import { validateCreateSale, validateUpdateSale } from '../middleware/validation.middleware.js';

const router = Router();

// GET /api/sales - Get all sales
router.get('/', salesController.getAllSales);

// GET /api/sales/:id - Get single sale
router.get('/:id', salesController.getSale);

// POST /api/sales - Create new sale
router.post('/', validateCreateSale, salesController.createSale);


// DELETE /api/sales/:id - Delete sale
router.delete('/:id', salesController.deleteSale);

export default router;