import {
  Bell,
  Building2,
  ChevronDown,
  CircleUser,
  Menu,
  PanelRight,
  Search,
  TextSearch,
} from "lucide-react";

export default function Topbar() {
  return (
    <div className="text-[#015c55] flex justify-between items-center px-6">
      <div className="flex gap-2">
        <div className="flex bg-white w-30 h-9 rounded-2xl border-1 border-gray-200 shadow-none items-center justify-around">
          <div className="flex items-center gap-1.5 px-3">
            <Building2 size={15} />
            <span className="font-normal">New</span>
          </div>
          <div className="h-full w-px bg-gray-200"></div>
          <div className="px-2">
            <ChevronDown size={20} />
          </div>
        </div>

        <div className="w-9 h-9 flex rounded-full items-center justify-center   bg-white">
          <TextSearch size={20} />
        </div>
      </div>

      <div className="relative w-64">
        <Search
          size={16}
          className="absolute left-3 top-5 -translate-y-1/2 text-gray-400 pointer-events-none"
        />

        <input
          type="text"
          placeholder="Search for anything"
          className="
      w-full
      bg-white
      rounded-2xl
      text-black
      py-1.5
      pl-9
      pr-4
      border border-gray-300
      shadow-sm
      focus:outline-none
      focus:ring-1
      focus:ring-[#029A8E]
    "
        />
      </div>

      <div className="flex gap-6 items-center">
        <Bell size={20} />
        <CircleUser size={20} />
        <Menu size={20} />
        <div className="flex items-center gap-15">
          <span>Help</span>
          <PanelRight size={20} />
        </div>
      </div>
    </div>
  );
}
