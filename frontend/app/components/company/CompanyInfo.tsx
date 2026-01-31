export default function CompanyInfo() {
  const dataRows = [
    [
      { label: "Postal", value: "Storgatan 1, 111 11 Stockholm" },
      { label: "Category", value: "Customer A" },
    ],
    [
      { label: "Country", value: "Sweden" },
      { label: "Code", value: "SUPERCO" },
    ],
    [
      { label: "Phone", value: "+46 8 123 45 67" },
      { label: "Number", value: "2002" },
    ],
    [
      { label: "Webbadress", value: "info@sc.se" },
      { label: "VAT No.", value: "SE123456789101" },
    ],
    [
      { label: "E-mail", value: "www.sc.se" },
      { label: "Business", value: "IT" },
    ],
  ];

  return (
    <div className="space-y-1.5">
      {dataRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-6">
          {/* First pair */}
          <div className=" flex items-start min-w-[180px] gap-4">
            <div className="w-20 shrink-0">
              <p className="text-sm text-gray-600">{row[0].label}:</p>
            </div>
            <div className="flex-1">
              <p className="text-m font-medium text-gray-900">{row[0].value}</p>
            </div>
          </div>

          {/* Second pair */}
          <div className="flex items-start min-w-[180px] gap-4">
            <div className="w-20 shrink-0">
              <p className="text-sm text-gray-600">{row[1].label}:</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{row[1].value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
