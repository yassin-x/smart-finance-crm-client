"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/#why-us" },
    { name: "برامجنا", href: "/programs" },
  ];

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-secondary"
                    : "text-accent hover:text-secondary",
                )}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="
                      absolute left-0 -bottom-1
                      h-0.5 w-full
                      bg-secondary
                      rounded-full
                    "
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
