import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarAdmin from "./_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider dir="rtl">
      <SidebarAdmin />
      <SidebarInset dir="rtl" className="p-4">
        <SidebarTrigger className="md:hidden" />
        <main className="">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
