"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useUserProfile } from "../../_actions/userProfile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarAdmin() {
  const { data, isLoading } = useUserProfile();
  const pathname = usePathname();

  const links = [
    {
      name: "المسجلين",
      href: "/dashboard/admin",
    },
    {
      name: "البرامج",
      href: "/dashboard/admin/programs",
    },
  ];

  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader>
        {isLoading ? <span>اسمك جي قريب</span> : <span>{data?.fullName}</span>}
      </SidebarHeader>

      <SidebarContent className="p-3">
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                  "flex items-center justify-end",
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}
