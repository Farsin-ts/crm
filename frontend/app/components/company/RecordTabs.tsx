"use client";

import { useState } from "react";
import SalesTable from "../sales/SalesTable";

const tabs = [
  { id: "activities", label: "Activities" },
  { id: "contacts", label: "Contacts" },
  { id: "projects", label: "Projects" },
  { id: "sales", label: "Sales" },
  { id: "requests", label: "Requests" },
];

export default function RecordTabs() {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <div className="bg-white rounded-2xl h-fit flex flex-col">
      <div className="flex border-b pt-2 border-gray-200 pb-1.5 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-2xl mx-0.5 ${
              activeTab === tab.id
                ? "text-[#015c55] bg-[#e6f7f6]" 
                : "text-black font-light-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden">
        {activeTab === "activities" && (
          <div className="p-4 text-center text-gray-500">
            <p>More information about the Activities</p>
          </div>
        )}
        {activeTab === "contacts" && (
          <div className="p-4 text-center text-gray-500">
            <p>More information about the Contacts</p>
          </div>
        )}
        {activeTab === "projects" && (
          <div className="p-4 text-center text-gray-500">
            <p>More information about the Projects</p>
          </div>
        )}
        {activeTab === "sales" && <SalesTable />}
        {activeTab === "requests" && (
          <div className="p-4 text-center text-gray-500">
            <p>More information about the Requests</p>
          </div>
        )}
      </div>
    </div>
  );
}
