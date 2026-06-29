"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function ButtonFooter() {
  return (
    <Link
      href="/programs"
      className={cn(
        buttonVariants({ variant: "default", size: "icon" }),
        "fixed bottom-5 right-5 z-50 rounded-full shadow-lg w-14 h-14",
      )}
    >
      <ArrowUpRight className="w-5 h-5" />
    </Link>
  );
}
