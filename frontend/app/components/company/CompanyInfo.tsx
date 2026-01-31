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
      { label: "Webbadress", value: "www.sc.se" },         // Fixed: was wrong before
      { label: "VAT No.", value: "SE123456789101" },
    ],
    [
      { label: "E-mail", value: "info@sc.se" },             // Fixed: swapped values
      { label: "Business", value: "IT" },
    ],
  ];

  return (
    <div className="space-y-3 max-w-4xl">
      {dataRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-x-12">
          {/* Left pair */}
          <div className="flex gap-4">
            <span className="text-sm text-gray-600 w-32 shrink-0">
              {row[0].label}:
            </span>
            <span className="text-base font-medium text-gray-900">
              {row[0].value}
            </span>
          </div>

          {/* Right pair */}
          <div className="flex gap-4">
            <span className="text-sm text-gray-600 w-32 shrink-0">
              {row[1].label}:
            </span>
            <span className="text-base font-medium text-gray-900">
              {row[1].value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}