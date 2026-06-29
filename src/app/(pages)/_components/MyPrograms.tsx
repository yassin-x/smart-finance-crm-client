// "use client";

// import Link from "next/link";
// import { usePrograms } from "@/app/(admin)/dashboard/admin/programs/_actions/getPrograms";
// import { Button } from "@/components/ui/button";

// type Program = {
//   id: string;
//   title: string;
//   desc: string;
//   slug: string;
// };

// export default function MyPrograms() {
//   const { data, isLoading } = usePrograms();

//   const templates: Program[] = data?.data?.templates ?? [];

//   return (
//     <section className="section-gap container" id="programs">
//       {/* Header */}
//       <div className="flex flex-col items-center text-center gap-3">
//         <h2 className="text-3xl font-bold text-primary tracking-tight">
//           برامجنا
//         </h2>
//         <p className="text-muted-foreground max-w-md">
//           حلول تمويلية متنوعة مصممة لتناسب احتياجاتك المختلفة
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 gap-6 mt-10">
//         {isLoading
//           ? Array.from({ length: 6 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="h-42.5 rounded-2xl bg-muted animate-pulse"
//               />
//             ))
//           : templates.map((program) => (
//               <div key={program.id} className="group block">
//                 <div
//                   className="relative h-full p-6 rounded-2xl border
//                   bg-background hover:bg-background/80
//                   shadow-sm hover:shadow-xl
//                   transition-all duration-300
//                   hover:-translate-y-1"
//                 >
//                   <div className="w-12 h-1 bg-primary rounded-full mb-4 group-hover:w-20 transition-all duration-300" />
//                   <div className="flex flex-col gap-3">
//                     <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
//                       {program.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
//                       {program.desc}
//                     </p>
//                   </div>
//                   <div>
//                     <Button
//                       asChild
//                       className="group-hover:scale-110 transition-all duration-300"
//                     >
//                       <Link href={`/program/${program.slug}`}>سجل ان</Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { usePrograms } from "@/app/(admin)/dashboard/admin/programs/_actions/getPrograms";
import { Button } from "@/components/ui/button";

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

      {/* List */}
      <div className="mt-12 flex flex-col gap-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
            ))
          : templates.map((program, index) => (
              <div
                key={program.id}
                className="group relative flex items-center justify-between gap-6 p-5 rounded-xl border bg-background hover:bg-secondary/40 transition-all duration-300"
              >
                {/* Accent Line */}
                <div className="absolute right-0 top-0 h-full w-1 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition" />

                {/* Index (optional visual hierarchy) */}
                <div className="text-3xl font-bold text-muted-foreground/30 group-hover:text-primary/40 transition">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition">
                    {program.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {program.desc}
                  </p>
                </div>

                {/* Action */}
                <Button asChild variant="default">
                  <Link href={`/programs/${program.slug}`}>سجل الآن</Link>
                </Button>
              </div>
            ))}
      </div>
    </section>
  );
}
