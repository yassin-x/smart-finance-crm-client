"use client";

import Link from "next/link";
import { usePrograms } from "@/app/(admin)/dashboard/admin/programs/_actions/getPrograms";

type Program = {
  id: string;
  title: string;
  desc: string;
  slug: string;
};

export default function MyPrograms() {
  const { data, isLoading } = usePrograms();

  const templates: Program[] = data?.data?.templates ?? [];

  return (
    <section className="section-gap container" id="programs">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <h2 className="text-3xl font-bold text-primary tracking-tight">
          برامجنا
        </h2>
        <p className="text-muted-foreground max-w-md">
          حلول تمويلية متنوعة مصممة لتناسب احتياجاتك المختلفة
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 gap-6 mt-10">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-42.5 rounded-2xl bg-muted animate-pulse"
              />
            ))
          : templates.map((program) => (
              <Link
                href={`/programs/${program.slug}`}
                key={program.id}
                className="group block"
              >
                <div
                  className="relative h-full p-6 rounded-2xl border
                  bg-background hover:bg-background/80
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1"
                >
                  {/* Top Accent */}
                  <div className="w-12 h-1 bg-primary rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                      {program.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {program.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </section>
  );
}
