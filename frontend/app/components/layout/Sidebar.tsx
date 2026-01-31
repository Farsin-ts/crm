import {
  AtSign,
  Building2,
  Calendar,
  ChartColumnIncreasing,
  ChevronRight,
  CircleDollarSign,
  CircleUser,
  Gauge,
  MessageCircle,
  NotepadText,
  PictureInPicture2,
  Target,
  Ticket,
  Wrench,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-[#015c55] min-h-screen flex flex-col items-center w-16 text-white ">
      <ul className="flex flex-col items-center gap-6 pt-3">
        <li className="mb-7">
          <div className="flex items-center justify-center w-10 h-10 text-white font-semi-bold text-5xl">
            L
          </div>
        </li>

        <li>
          <Gauge size={24}/>
        </li>
        <li>
          <Building2 size={24}/>
        </li>
        <li>
          <CircleUser size={24}/>
        </li>
        <li>
          <Calendar size={24}/>
        </li>
        <li>
          <CircleDollarSign size={24}/>
        </li>
        <li>
          <NotepadText size={24}/>
        </li>
        <li>
          <Ticket size={24}/>
        </li>
        <li>
          <PictureInPicture2 size={24}/>
        </li>
        <li>
          <AtSign size={24}/>
        </li>
        <li>
          <MessageCircle size={24}/>
        </li>
        <li>
          <ChartColumnIncreasing size={24}/>
        </li>
        <li>
          <Target size={24}/>
        </li>
        <li>
          <Wrench size={24}/>
        </li>
      </ul>
      <div className="text-gray-400 mt-auto w-full border-t border-white/30 h-16 flex items-center justify-center">
  <ChevronRight size={22} />
</div>

    </aside>
  );
}
