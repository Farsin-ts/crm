export interface ISale {
  name: string;
  status: 'Open' | 'Lost' | 'Sold' | 'Stalled';
  amount: number;
  stage: string;
  nextActivityDate: Date;
  saleDate: Date; // Auto-set to creation date
  createdAt: Date;
  updatedAt: Date;
}

export type SaleStatus = 'Open' | 'Lost' | 'Sold' | 'Stalled';

export interface CreateSaleDTO {
  name: string;
  status: SaleStatus;
  amount: number;
  stage: string;
  nextActivityDate: string | Date;
}

export interface UpdateSaleDTO extends Partial<CreateSaleDTO> {}