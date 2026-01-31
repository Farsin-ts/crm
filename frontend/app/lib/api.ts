import { CreateSaleDTO, Sale } from "../types/sale";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  pages: number;
  currentPage: number;
}


export async function fetchSales(page: number = 1, limit: number = 5): Promise<PaginatedResponse<Sale>> {
  const res = await fetch(`${API_BASE}/api/sales?page=${page}&limit=${limit}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch sales: ${res.status} - ${errorText}`);
  }

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "API returned unsuccessful response");
  }

  return json as PaginatedResponse<Sale>;
}

export async function createSale(data: CreateSaleDTO): Promise<Sale> {
  const res = await fetch(`${API_BASE}/api/sales`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to create sale: ${res.status} - ${errorText}`);
  }

  const json = await res.json();

  if (!json.success || !json.data) {
    throw new Error(json.message || "API returned unsuccessful response");
  }

  return json.data as Sale;
}
