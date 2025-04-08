// app/dashboard/layout.tsx

import Sidebar from "../components/ui/adminSidebar";
import Topbar from "../components/ui/topper";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[250px]">
        <Topbar />
        <main className="pt-20 px-6">{children}</main>
      </div>
    </div>
  );
}
