import {
  Calendar,
  ChevronDown,
  CircleDollarSign,
  NotepadText,
  Sparkles,
  TextSearch,
} from "lucide-react";

export default function CompanyPreview() {
  return (
    <div className="bg-blue-30 px-4 py-3">
      <div className="flex justify-between py-4 px-3 items-end border-b-2 border-gray-200">
        <div className="flex gap-3.5">
          <TextSearch size={20} className=" hover:bg-[#015c55] rounded-full " />
          <CircleDollarSign size={20} />
          <Calendar size={20} />
          <NotepadText size={20} />
          <Sparkles size={20} />
        </div>
        <div>
          <button className="text-sm w-6 h-6 bg-white rounded-full border border-gray-300 flex justify-center items-center">
            <ChevronDown size={20} stroke="#015c55" />
          </button>
        </div>
      </div>

      <div className="pt-1 pb-5 border-b-2 border-gray-200">
        <h4 className="tracking-wider text-gray-500 text-sm ">PREVIEW</h4>
        <div className="py-2 flex gap-2 items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-[#58e1d576] rounded-full ">
            <CircleDollarSign size={20} />
          </div>
          <div className="flex flex-col">
            <h1 className="font-mediu text-xl text-blue-600">
              45 Components - RTS
            </h1>
            <span className="-mt-2">17 344 EUR</span>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 ">
          <p className="font-medium text-gray-600">Company:</p>
          <p className="font-semibold text-blue-500">SuperCompany Ltd ASA</p>

          <p className="font-medium text-gray-600">Contact:</p>
          <p className="font-semibold text-blue-500">Peter Elliot</p>

          <p className="font-medium text-gray-600">Sale date:</p>
          <p className="font-semibold text-gray-900">01/02/2025</p>

          <p className="font-medium text-gray-600">Owner:</p>
          <p className="font-semibold text-gray-900">Eric Davies</p>

          <p className="font-medium text-gray-600">Sale type:</p>
          <p className="font-semibold text-gray-900">Cross-sale to existing cus.</p>

          <p className="font-medium text-gray-600">Status:</p>
          <p className="font-semibold text-gray-900">Open (20%)</p>
        </div>
      </div>

      <div className="border-b border-gray-200 pt-3 pb-7">
        <h1 className="font-semibold">Activities</h1>
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 pt-2.5">
          <p className="font-medium text-gray-600">04/11/2024</p>
          <p className="font-semibold text-blue-500">Follow-up call</p>
          <p className="font-medium text-gray-600">01/11/2024</p>
          <p className="font-semibold text-blue-500">Quote for 45</p>
          <p className="font-medium text-gray-600">23/09/2024</p>
          <p className="font-semibold text-blue-500">Prospect meeting</p>
          <p className="font-medium text-gray-600">22/09/2024</p>
          <p className="font-semibold text-blue-500">Introduction call</p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold">Stakeholders</h1>
          <p className="font-medium text-gray-600 mt-3">James Vargas</p>
          <p className="font-medium text-gray-600 mt-2">Lisa Jansson</p>

      </div>
    </div>
  );
}
