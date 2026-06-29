/* eslint-disable @typescript-eslint/no-explicit-any */
// import { usePrograms } from "../_actions/getPrograms";

// export default function ProgramsDetail() {
//   const { data, isLoading } = usePrograms();

//   return <div></div>;
// }
"use client";

import { usePrograms } from "../_actions/getPrograms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function ProgramsDetail() {
  const { data, isLoading } = usePrograms();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl" />
        ))}
      </div>
    );
  }

  const programs = data?.data?.templates || [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">البرامج المتاحة</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {programs.map((program: any) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="rounded-2xl border hover:shadow-xl transition">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{program.title}</CardTitle>

                  <Badge variant={program.isActive ? "default" : "secondary"}>
                    {program.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">{program.desc}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>عدد الأسئلة</span>
                  <span className="font-medium">
                    {program.questions.length}
                  </span>
                </div>

                <div className="space-y-2">
                  {program.questions
                    .sort((a: any, b: any) => a.order - b.order)
                    .map((q: any) => (
                      <div
                        key={q.id}
                        className="p-3 rounded-xl border bg-muted/30"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{q.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {q.type}
                          </span>
                        </div>

                        <p className="text-xs text-muted-foreground mt-1">
                          {q.desc}
                        </p>

                        {q.rules && Object.keys(q.rules).length > 0 && (
                          <div className="mt-2 text-xs text-blue-500">
                            {JSON.stringify(q.rules)}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
