"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import clsx from "clsx";

export default function MobileNav() {
  const pathname = usePathname();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "#why-us" },
    { name: "برامجنا", href: "/programs" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon className="w-5 h-5 text-foreground" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-6 bg-background/70 backdrop-blur-2xl border-r border-background/10 shadow-md
        "
      >
        {/* Nav Links */}
        <nav className="mt-8">
          <ul className="flex flex-col gap-3">
            {links.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className={clsx(
                        `
                        relative flex items-center justify-between
                        px-4 py-3 rounded-xl
                        text-sm font-medium
                        transition-all
                        `,
                        isActive
                          ? `
                            bg-primary/10
                            text-primary
                          `
                          : `
                            text-muted-foreground
                            hover:bg-secondary
                            hover:text-foreground
                          `,
                      )}
                    >
                      {link.name}

                      {isActive && (
                        <motion.span
                          layoutId="mobile-active"
                          className="
                            absolute left-0 top-0 bottom-0
                            w-1 rounded-r-full
                            bg-primary
                          "
                        />
                      )}
                    </Link>
                  </SheetClose>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
