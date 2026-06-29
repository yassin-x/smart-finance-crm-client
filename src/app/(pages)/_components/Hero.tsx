"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { easeOut } from "motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: easeOut }}
      >
        <Image
          src="/images/hero.jpg"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/80 via-black/45 to-primary/80" />

      <div className="container px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            mx-auto w-full max-w-xl
            text-center
            rounded-3xl
            p-6 sm:p-8 md:p-12

            backdrop-blur-xl
            bg-white/5

            border border-white/10
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]

            relative overflow-hidden
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-white/.5 to-white/10" />

          <div className="relative z-10">
            {/* Title */}
            <motion.h1
              variants={item}
              className="
                text-2xl sm:text-3xl md:text-5xl
                font-bold text-primary
                mb-3 sm:mb-4
                leading-tight
              "
            >
              التمويل الإلكتروني
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={item}
              className="
                text-xs sm:text-sm md:text-base
                text-secondary
                mb-5 sm:mb-6
              "
            >
              سيولة نقدية تصل إلى
              <span className="font-bold text-primary"> 6,000,000 </span>
              جنيه بأقل إجراءات ممكنة
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={item}
              className="
                text-xs sm:text-sm
                text-white/60
                mb-6 sm:mb-8
                leading-relaxed
              "
            >
              منصة استشارية متخصصة في الحلول الائتمانية، بنساعدك توصل لأفضل
              تمويل مناسب ليك بسهولة وسرعة.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button className="w-full">ابدأ الآن</Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button variant="outline" className="w-full">
                  اعرف أكثر
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
