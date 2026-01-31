// // app/components/company/CompanyTabs.tsx
// "use client";

// import { useState } from "react";
// import CompanyInfo from "./CompanyInfo";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const tabs = [
//   { id: "company", label: "Company" },
//   { id: "more", label: "More" },
//   { id: "interest", label: "Interest" },
//   { id: "note", label: "Note" },
//   { id: "market", label: "Market Data" },
//   { id: "misc", label: "Misc" },
// ];

// export default function CompanyTabs() {
//   const [activeTab, setActiveTab] = useState("company");

//   return (
//     <div className="mt-6">
//       {/* Tab Headers with gray bottom border */}
//       <div className="flex border-b border-gray-200 pb-0.5">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-2xl mx-0.5 ${
//               activeTab === tab.id
//                 ? "text-[#015c55] bg-[#e6f7f6]" // Light green background for active
//                 : "text-black font-light-500 hover:text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="mt-4">
//         {activeTab === "company" && <CompanyInfo />}
//         {activeTab === "more" && (
//           <div className="p-4 text-center text-gray-500">
//             <p>More information about the company</p>
//           </div>
//         )}
//         {activeTab === "interest" && (
//           <div className="p-4 text-center text-gray-500">
//             <p>Interest and preferences</p>
//           </div>
//         )}
//         {activeTab === "note" && (
//           <div className="p-4">
//             <textarea
//               className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#015c55] focus:border-transparent"
//               placeholder="Add notes about the company..."
//               defaultValue="Customer is interested in upgrading to enterprise plan. Follow up scheduled for next week."
//             />
//           </div>
//         )}
//         {activeTab === "market" && (
//           <div className="p-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <p className="text-sm text-gray-600">Market Share</p>
//                 <p className="text-xl font-bold text-blue-700">15%</p>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <p className="text-sm text-gray-600">Growth Rate</p>
//                 <p className="text-xl font-bold text-green-700">+24%</p>
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === "misc" && (
//           <div className="p-4 text-center text-gray-500">
//             <p>Miscellaneous information</p>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }
// app/components/company/CompanyTabs.tsx
"use client";

import { useState } from "react";
import CompanyInfo from "./CompanyInfo";

const tabs = [
  { id: "company", label: "Company" },
  { id: "more", label: "More" },
  { id: "interest", label: "Interest" },
  { id: "note", label: "Note" },
  { id: "market", label: "Market Data" },
  { id: "misc", label: "Misc" },
];

export default function CompanyTabs() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="flex flex-col min-h-0 ">
      <div className="shrink-0 mt-3">
        {" "}
       
        <div className="flex items-center gap-1 overflow-x-auto px-1 pb-1.5 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors rounded-xl whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-[#e6f7f6] text-[#015c55] shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content area - NO mt-3 here */}
      <div className="min-h-0 overflow-y-auto px-1 pt-5">
        {activeTab === "company" && <CompanyInfo />}

        {activeTab === "more" && (
          <div className="p-5 text-center text-gray-500">
            <p>More information about the company</p>
          </div>
        )}

        {activeTab === "interest" && (
          <div className="p-5 text-center text-gray-500">
            <p>Interest and preferences</p>
          </div>
        )}

        {activeTab === "note" && (
          <div className="p-5">
            <textarea
              className="w-full min-h-[140px] p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#015c55]/50 focus:border-[#015c55]/60 resize-y bg-white"
              placeholder="Add notes about the company..."
              defaultValue="Customer is interested in upgrading to enterprise plan. Follow up scheduled for next week."
            />
          </div>
        )}

        {activeTab === "market" && (
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-600 mb-1">Market Share</p>
                <p className="text-2xl font-bold text-blue-700">15%</p>
              </div>
              <div className="bg-green-50/60 p-5 rounded-xl border border-green-100">
                <p className="text-sm text-gray-600 mb-1">Growth Rate</p>
                <p className="text-2xl font-bold text-green-700">+24%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "misc" && (
          <div className="p-5 text-center text-gray-500">
            <p>Miscellaneous information</p>
          </div>
        )}
      </div>
    </div>
  );
}
