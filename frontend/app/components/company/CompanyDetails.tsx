"use client";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Layers,
  Pencil,
  Star,
} from "lucide-react";

import { useState } from "react";
import CompanyTabs from "./CompanyTab";

const tabs = [
  { id: "company", label: "Company" },
  { id: "more", label: "More" },
  { id: "interest", label: "Interest" },
  { id: "note", label: "Note" },
  { id: "market", label: "Market Data" },
  { id: "misc", label: "Misc" },
];

export default function CompanyDetails() {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col">
      <div className="flex justify-between ">
        <div className="flex gap-4">
          <div className="relative w-[45px] h-[45px] flex items-center justify-center bg-[#9090e0] rounded-full">
            <Layers
              size={35}
              className="absolute text-[#4444bd]"
              style={{
                clipPath: "inset(0 50% 0 0)", // Show only left half
              }}
            />
            <Layers
              size={35}
              className="absolute text-[#1010a3]"
              style={{
                clipPath: "inset(0 0 0 50%)", // Show only right half
              }}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-5 items-center-safe">
              <h1 className="font-ligh text-xl">SuperCompany Ltd ASA</h1>{" "}
              <Star size={15} className="text-red-500" />
            </div>
            <span className="text-sm font-light">Department Stockholm</span>
          </div>
        </div>

        <div className="flex gap-1">
          {/* Edit button - small and tight */}
          <button className="w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-sm">
            <Pencil
              size={16}
              stroke="white"
              strokeWidth={2.5}
              className="-m-0.5"
            />
          </button>

          {/* Menu button - subtle */}
          <button className="w-7 h-7 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors border border-[#015c55] shadow-sm">
            <EllipsisVertical
              size={16}
              stroke="#015c55"
              strokeWidth={2.5}
              className="-m-0.5"
            />
          </button>
        </div>
      </div>

  <div className="min-h-0 flex flex-col "> 
          <CompanyTabs />
        </div>

      

      <div className="mt-2 flex justify-between items-center shrink-0 pt-2 border-t border-gray-100 ">
        <div className="flex gap-1.5 items-center">
          <input 
            type="checkbox" 
            name="stop" 
            id="stop" 
            className="h-4 w-4 rounded text-[#029A8E] accent-[#029A8E] focus:ring-[#029A8E] cursor-pointer"
          />
          <label className="text-sm" htmlFor="stop">
            Stop
          </label>

          <input 
            type="checkbox" 
            name="nomailings" 
            id="nomailings" 
            className="h-4 w-4 rounded text-[#029A8E] accent-[#029A8E] focus:ring-[#029A8E] cursor-pointer"
          />
          <label className="text-sm" htmlFor="nomailings">
            No mailings
          </label>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            Updated: <span>18/09/2023</span> OG
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm w-6 h-6 bg-white rounded-full border border-gray-300">
            <ChevronLeft size={20} stroke="#015c55" />
          </button>

          <button className="text-sm w-6 h-6 bg-white rounded-full border border-gray-300">
            <ChevronRight size={20} stroke="#015c55" />
          </button>
        </div>
      </div>
    </div>
  );
}
