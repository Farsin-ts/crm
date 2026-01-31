"use client";

import { useEffect, useState } from "react";
import {
  MoveDown,
  Check,
  DollarSign,
  X,
  Pause,
  Circle,
  CirclePlus,
  Trash2,
  Fuel as Funnel,
  Download,
} from "lucide-react";
import SaleForm from "../modals/AddSaleModal";
import { CreateSaleDTO, Sale, SaleStatus } from "@/app/types/sale";
import { createSale, fetchSales } from "@/app/lib/api";

// test

const getStatusConfig = (status: SaleStatus) => {
  switch (status) {
    case "Open":
      return {
        className: "bg-green-100 text-green-800",
        Icon: Check,
        iconClass: "text-green-600",
      };
    case "Sold":
      return {
        className: "bg-blue-100 text-blue-800",
        Icon: DollarSign,
        iconClass: "text-blue-600",
      };
    case "Lost":
      return {
        className: "bg-red-100 text-red-800",
        Icon: X,
        iconClass: "text-red-600",
      };
    case "Stalled":
      return {
        className: "bg-yellow-100 text-yellow-800",
        Icon: Pause,
        iconClass: "text-yellow-600",
      };
    default:
      return {
        className: "bg-gray-100 text-gray-800",
        Icon: Circle,
        iconClass: "text-gray-600",
      };
  }
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const truncateText = (text: string, maxLength: number = 25) =>
  text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSales, setSelectedSales] = useState<Set<string>>(new Set());

  const toggleSale = (id: string) => {
    setSelectedSales((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedSales.size === 0) return;

    if (
      !confirm(
        `Delete ${selectedSales.size} selected sale(s)? This cannot be undone.`,
      )
    ) {
      return;
    }

    try {
      for (const id of selectedSales) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/sales/${id}`,
          {
            method: "DELETE",
          },
        );

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || `Failed to delete sale ${id}`);
        }
      }

      // Clear selection and reload current page
      setSelectedSales(new Set());
      loadSales(currentPage);
      alert(`${selectedSales.size} sale(s) deleted successfully`);
    } catch (err: any) {
      alert("Error deleting sales: " + (err.message || "Unknown error"));
    }
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalSales, setTotalSales] = useState(0);
  const limit = 5;
  //farsin

  const loadSales = async (page: number = currentPage) => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchSales(page, limit);
      console.log("API Response:", data);

      // Convert string dates → Date objects
      const formatted = data.data.map((s: Sale) => ({
        ...s,
        nextActivityDate: new Date(s.nextActivityDate),
        saleDate: new Date(s.saleDate),
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt),
      }));

      setSales(formatted);
      setTotalPages(data.pages || 1);
      setTotalSales(data.total || 0);

      // If we added a sale and now on page > 1 → go to page 1
      if (page !== currentPage) setCurrentPage(page);
    } catch (err: any) {
      setError(err.message || "Could not load sales");
    } finally {
      setLoading(false);
    }
  };

  // Load on mount + when page changes
  useEffect(() => {
    loadSales(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAddClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleSaveSale = async (formData: any) => {
    try {
      const payload: CreateSaleDTO = {
        name: formData.saleName,
        status: formData.status,
        amount: Number(formData.amount),
        stage: formData.stage,
        nextActivityDate: formData.nextActivityDate,
      };

      await createSale(payload);

      // After create → reload current page (or go to page 1)
      loadSales(1); // most users expect new item at top → page 1
      handleModalClose();
    } catch (err: any) {
      alert("Failed to save sale: " + (err.message || "Unknown error"));
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading sales...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Table area */}
        <div className="overflow-hidden">
          <div className="p-2">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="border-b-2 border-gray-200">
                    <th className="w-12 p-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded text-[#029A8E] accent-[#029A8E] focus:ring-[#029A8E] cursor-pointer"
                        
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSales(new Set(sales.map((s) => s._id || s.id || "")));
                          } else {
                            setSelectedSales(new Set());
                          }
                        }}
                      />
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      Status
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      Sale Date
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      Amount
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      <div className="flex items-center gap-1">
                        Stage <MoveDown size={14} className="text-gray-400" />
                      </div>
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      Next Activity
                    </th>
                    <th className="px-6 py-1 text-left text-sm font-normal">
                      Sale Name
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {sales.map((sale) => {
                    const config = getStatusConfig(sale.status as SaleStatus);
                    const Icon = config.Icon;
                    const isSelected = selectedSales.has(sale._id || sale.id);

                    return (
                      <tr
                        key={sale._id || sale.id}
                        className={`transition-colors border-b-2 border-gray-200 ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
                      >
                        <td className="px-4 py-1 whitespace-nowrap">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded text-[#029A8E] accent-[#029A8E] focus:ring-[#029A8E] cursor-pointer"
                            checked={selectedSales.has(
                              sale._id || sale.id || "",
                            )}
                            onChange={() =>
                              toggleSale(sale._id || sale.id || "")
                            }
                          />
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
                          >
                            <Icon
                              size={12}
                              className={`mr-1.5 ${config.iconClass}`}
                            />
                            {sale.status}
                          </span>
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(sale.saleDate as Date)}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap text-sm font-semibold text-gray-900">
                          {formatCurrency(sale.amount)}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                          {sale.stage as string}
                        </td>
                        <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(sale.nextActivityDate as Date)}
                        </td>
                        <td className="px-6 py-1 text-sm text-gray-900">
                          <div className="font-medium">
                            {truncateText(sale.name)}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* Filler rows to maintain constant height (5 rows) */}
                  {Array.from({
                    length: Math.max(0, limit - sales.length),
                  }).map((_, i) => (
                    <tr
                      key={`filler-${i}`}
                      className="border-b-2 border-gray-200"
                    >
                      <td className="px-4 py-1 whitespace-nowrap">&nbsp;</td>
                      <td
                        className="px-6 py-1 whitespace-nowrap text-sm"
                        colSpan={6}
                      >
                        {sales.length === 0 && i === 2 ? (
                          <div className="text-center text-gray-500">
                            No sales found on this page
                          </div>
                        ) : (
                          <span className="invisible">&nbsp;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              {totalSales === 0
                ? "No sales found"
                : `Showing ${Math.min((currentPage - 1) * limit + 1, totalSales)} to ${Math.min(currentPage * limit, totalSales)} of ${totalSales}`}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className={`px-3 py-1 text-sm font-medium rounded-md border ${
                  currentPage === 1 || loading
                    ? "opacity-50 cursor-not-allowed bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  // Show first 2, last 2, and 3 around current
                  return (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  );
                })
                .map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      pageNum === currentPage
                        ? "bg-[#029A8E] text-white"
                        : "bg-white border hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                className={`px-3 py-1 text-sm font-medium rounded-md border ${
                  currentPage === totalPages || loading
                    ? "opacity-50 cursor-not-allowed bg-gray-100"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          <div className="flex gap-9 justify-start px-6 py-3 border-t border-gray-200 bg-white">
            <button
              onClick={handleAddClick}
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-80"
            >
              <CirclePlus className="text-[#E97451]" size={18} />
              Add
            </button>
            <button
              onClick={handleDeleteSelected}
              disabled={selectedSales.size === 0}
              className={`flex items-center gap-1.5 cursor-pointer hover:opacity-80 ${
                selectedSales.size === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Trash2 className="text-[#E97451]" size={18} />
              Delete {selectedSales.size > 0 ? `(${selectedSales.size})` : ""}
            </button>
            <button className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
              <Funnel className="text-[#E97451]" size={18} />
              Filter
            </button>
            <button className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
              <Download className="text-[#E97451]" size={18} />
              Export
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/25 transition-opacity duration-300"
            onClick={handleModalClose}
          />
          <div className="relative z-10 flex min-h-full items-start justify-center pt-10 sm:pt-16">
            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 transform transition-all duration-300 ease-out translate-y-0 opacity-100">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Add New Sale
                </h2>
                <button
                  onClick={handleModalClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 max-h-[85vh] overflow-y-auto">
                <SaleForm
                  onSubmit={handleSaveSale}
                  onCancel={handleModalClose}
                  initialData={null}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </> 
  );
}
