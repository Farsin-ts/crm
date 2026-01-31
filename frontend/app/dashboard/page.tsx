// import CompanyDetails from "../componets/company/CompanyDetails";
// import CompanyPreview from "../componets/company/CompanyPreview";
// import RecordTabs from "../componets/company/RecordTabs";
// import SalesTable from "../componets/sales/SalesTable";

import CompanyDetails from "../components/company/CompanyDetails";
import CompanyPreview from "../components/company/CompanyPreview";
import RecordTabs from "../components/company/RecordTabs";



export default function DashboardPage() {
  return (
    <div className="h-full w-full">
      {/* Main container – full height available from parent (DashboardLayout) */}
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6">

        {/* LEFT COLUMN – main content stack (takes 8–9 cols on lg+) */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-5 xl:gap-6 min-h-0">

            {/* 1. Company Details card – top */}
            <div className="shrink-0 min-h-0 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200/70">
              <CompanyDetails />
            </div>

            {/* 2. RecordTabs / Sales / Activities table – bottom of left column */}
            <div className="h-fit bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200/70">
              <RecordTabs />
            </div>

          
        </div>

        {/* RIGHT COLUMN – Preview sidebar – full height, fixed width */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200/70">
            <CompanyPreview />
          </div>
        </div>

      </div>
    </div>
  );
}

// dashboard/page.tsx