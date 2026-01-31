export type SaleStatus = "Open" | "Lost" | "Sold" | "Stalled";

export interface Sale {
  _id?: string;           // from MongoDB (backend uses _id)
  id?: string;            // keep your frontend id for compatibility
  name: string;
  status: SaleStatus;
  amount: number;
  stage: string;
  nextActivityDate: string | Date;  // API sends string, we convert to Date
  saleDate: string | Date;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// What we send when creating/updating
export interface CreateSaleDTO {
  name: string;
  status: SaleStatus;
  amount: number;
  stage: string;
  nextActivityDate: string;   // ISO string or "YYYY-MM-DD"
}