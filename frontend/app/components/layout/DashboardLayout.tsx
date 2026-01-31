import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-[#e1e1e3]  pt-5 pl-5 pr-5">
        <Topbar />

        <main className="flex-1 p-6 pt-3 pb-3 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
