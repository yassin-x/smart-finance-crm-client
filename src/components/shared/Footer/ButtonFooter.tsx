"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileEditIcon } from "lucide-react";

export default function ButtonFooter() {
  return (
    <Link
      href="/programs"
      className={cn(
        buttonVariants({ variant: "default", size: "icon" }),
        "fixed bottom-5 right-5 z-50 rounded-full shadow-lg w-16 h-16",
      )}
    >
      <FileEditIcon className="w-8 h-8" />
    </Link>
  );
}
