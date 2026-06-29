"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { motion } from "motion/react";
import { easeOut } from "motion";
import { buttonVariants } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-8 pt-4">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="
          container
          flex items-center justify-between
          rounded-2xl
          px-4 py-3
          backdrop-blur-xl
          bg-black/4
          border border-background/10
          shadow-md
        "
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
        </Link>

        <Nav />

        <div className="flex items-center gap-2">
          <Link
            href="/programs"
            className={cn(
              buttonVariants({
                size: "sm",
              }),
            )}
          >
            سجل الان
          </Link>
          <Link
            href="/programs"
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "secondary",
              }),
            )}
          >
            تواصل معنا
          </Link>

          <MobileNav />
        </div>
      </motion.div>
    </header>
  );
}
