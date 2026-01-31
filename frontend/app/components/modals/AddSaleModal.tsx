"use client";

import React from "react";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface SaleFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  initialData?: any; // For editing existing sales
}

const statusOptions = ["Open", "Lost", "Sold", "Stalled"];
const stageOptions = [
  "Proposal",
  "Qualification",
  "Negotiation",
  "Closed Won",
  "Closed Lost",
];

export default function SaleForm({
  onSubmit,
  onCancel,
  initialData,
}: SaleFormProps) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      status: "Open",
      amount: "",
      stage: "Proposal",
      nextActivityDate: "",
    },
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Sale Name */}
        <div>
          <label
            htmlFor="saleName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sale Name *
          </label>
            <input
              type="text"
              id="saleName"
              name="saleName"
              value={formData.saleName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#029A8E] focus:border-[#029A8E] outline-none"
              placeholder="Enter sale name"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Status *
            </label>
            <div className="relative">
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#029A8E] focus:border-[#029A8E] outline-none appearance-none"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#029A8E] focus:border-[#029A8E] outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Stage */}
          <div>
            <label
              htmlFor="stage"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Stage *
            </label>
            <div className="relative">
              <select
                id="stage"
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#029A8E] focus:border-[#029A8E] outline-none appearance-none"
              >
                {stageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Next Activity Date */}
          <div>
            <label
              htmlFor="nextActivityDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Next Activity Date *
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
              <input
                type="date"
                id="nextActivityDate"
                name="nextActivityDate"
                value={formData.nextActivityDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#029A8E] focus:border-[#029A8E] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-[#029A8E] rounded-md hover:bg-[#018a7e]"
          >
            Save Sale
          </button>
      </div>
    </form>
  );
}
