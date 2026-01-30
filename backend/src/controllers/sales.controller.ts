import type { Request, Response, NextFunction } from 'express';
import saleService from '../services/sales.service.js';
import { AppError } from '../middleware/error.middleware.js';

export class SalesController {
 // src/controllers/sales.controller.ts

async getAllSales(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const skip = (page - 1) * limit;

    const sales = await saleService.getPaginatedSales(skip, limit);
    const total = await saleService.getTotalSalesCount();

    res.status(200).json({
      success: true,
      count: sales.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: sales,
    });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    next(new AppError(error.message || 'Failed to fetch sales', 500));
  }
}

  async getSale(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
    if (!id) {
      throw new AppError('Sale ID is required', 400);
    }
      const sale = await saleService.getSaleById(id);
      if (!sale) {
        throw new AppError('Sale not found', 404);
      }
      res.status(200).json({
        success: true,
        data: sale
      });
    } catch (err: unknown) {
  const error = err instanceof Error ? err : new Error(String(err));
  throw new Error(`Failed to fetch sales: ${error.message}`);
}
  }

  async createSale(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sale = await saleService.createSale(req.body);
      res.status(201).json({
        success: true,
        message: 'Sale created successfully',
        data: sale
      });
    } catch (err: unknown) {
  const error = err instanceof Error ? err : new Error(String(err));
  throw new Error(`Failed to fetch sales: ${error.message}`);
}
  }



  async deleteSale(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
    if (!id) {
      throw new AppError('Sale ID is required', 400);
    }
      const deleted = await saleService.deleteSale(id);
      if (!deleted) {
        throw new AppError('Sale not found', 404);
      }
      res.status(200).json({
        success: true,
        message: 'Sale deleted successfully'
      });
    } catch (err: unknown) {
  const error = err instanceof Error ? err : new Error(String(err));
  throw new Error(`Failed to fetch sales: ${error.message}`);
}
  }
}

export default new SalesController();