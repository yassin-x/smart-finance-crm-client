"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          w-full max-w-md
          rounded-2xl
          p-8 text-center

          bg-background/70
          backdrop-blur-2xl
          border border-border

          shadow-md
        "
      >
        <h1 className="text-6xl font-bold text-primary tracking-tight">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          الصفحة غير موجودة
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة اللي بتحاول توصلها مش موجودة أو تم نقلها
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/"
            className="
              w-full rounded-xl
              bg-primary text-primary-foreground
              py-2.5 text-sm font-medium
              hover:opacity-90
              transition
            "
          >
            الرجوع للرئيسية
          </Link>

          <Link
            href="/programs"
            className="
              w-full rounded-xl
              bg-secondary text-secondary-foreground
              py-2.5 text-sm font-medium
              hover:bg-secondary/80
              transition
            "
          >
            تصفح البرامج
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
