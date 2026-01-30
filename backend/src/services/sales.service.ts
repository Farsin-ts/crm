import Sale, { type ISaleDocument } from "../models/Sale.model.js";
import type { CreateSaleDTO } from "../types/sales.type.js";

export class SaleService {
  async getAllSales(): Promise<ISaleDocument[]> {
    try {
      return await Sale.find().sort({ createdAt: -1 });
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      throw new Error(`Failed to fetch sales: ${error.message}`);
    }
  }

  async getSaleById(id: string): Promise<ISaleDocument | null> {
    try {
      const sale = await Sale.findById(id);
      if (!sale) {
        throw new Error("Sale not found");
      }
      return sale;
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      throw new Error(`Failed to fetch sales: ${error.message}`);
    }
  }

  async createSale(saleData: CreateSaleDTO): Promise<ISaleDocument> {
    try {
      const sale = new Sale({
        ...saleData,
        nextActivityDate: new Date(saleData.nextActivityDate),
      });
      return await sale.save();
    } catch (error: any) {
      throw new Error(`Failed to create sale: ${error.message}`);
    }
  }

  async deleteSale(id: string): Promise<boolean> {
    try {
      const result = await Sale.findByIdAndDelete(id);
      return !!result;
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      throw new Error(`Failed to fetch sales: ${error.message}`);
    }
  }

  // src/services/sales.service.ts

async getPaginatedSales(skip: number, limit: number): Promise<ISaleDocument[]> {
  try {
    return await Sale.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
  } catch (error: any) {
    throw new Error(`Failed to fetch paginated sales: ${error.message}`);
  }
}

async getTotalSalesCount(): Promise<number> {
  try {
    return await Sale.countDocuments();
  } catch (error: any) {
    throw new Error(`Failed to count sales: ${error.message}`);
  }
}
}

export default new SaleService();
