import type { Request, Response, NextFunction } from 'express';
import type { SaleStatus } from '../types/sales.type.js';

export const validateCreateSale = (req: Request, res: Response, next: NextFunction): void => {
  const { name, status, amount, stage, nextActivityDate } = req.body;
  const errors: string[] = [];

  // Required fields validation
  if (!name || name.trim().length === 0) {
    errors.push('Sale name is required');
  }
  
  if (!status || !['Open', 'Lost', 'Sold', 'Stalled'].includes(status)) {
    errors.push('Status must be one of: Open, Lost, Sold, Stalled');
  }
  
  if (!amount || isNaN(Number(amount)) || Number(amount) < 0) {
    errors.push('Valid amount is required and must be non-negative');
  }
  
  if (!stage || stage.trim().length === 0) {
    errors.push('Stage is required');
  }
  
  if (!nextActivityDate) {
    errors.push('Next activity date is required');
  } else {
    const date = new Date(nextActivityDate);
    if (isNaN(date.getTime())) {
      errors.push('Invalid next activity date');
    }
  }



  if (errors.length > 0) {
    res.status(400).json({ 
      success: false, 
      message: 'Validation failed', 
      errors 
    });
    return;
  }

  next();
};

export const validateUpdateSale = (req: Request, res: Response, next: NextFunction): void => {
  const { status, amount, stagePercentage } = req.body;
  const errors: string[] = [];

  if (status && !['Open', 'Lost', 'Sold', 'Stalled'].includes(status)) {
    errors.push('Status must be one of: Open, Lost, Sold, Stalled');
  }
  
  if (amount && (isNaN(Number(amount)) || Number(amount) < 0)) {
    errors.push('Amount must be a non-negative number');
  }
  


  if (errors.length > 0) {
    res.status(400).json({ 
      success: false, 
      message: 'Validation failed', 
      errors 
    });
    return;
  }

  next();
};