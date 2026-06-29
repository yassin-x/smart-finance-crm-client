"use client";

import React from "react";
import { useLeads } from "../_actions/getLeads";

export default function Analytics() {
  const { data, isLoading } = useLeads();

  const leads = data?.data ?? [];

  const totalLeads = leads.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-semibold">لوحة التحليلات</h1>
        <p className="text-sm text-muted-foreground">نظرة سريعة على البيانات</p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : (
        <>
          {(
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border bg-background">
                  <p className="text-sm text-muted-foreground">
                    إجمالي المسجلين
                  </p>
                  <h2 className="text-2xl font-bold mt-1">{totalLeads ?? 0}</h2>
                </div>

                <div className="p-4 rounded-xl border bg-background">
                  <p className="text-sm text-muted-foreground">حالة النظام</p>
                  <h2 className="text-sm mt-1 text-primary font-bold">
                    يعمل بشكل طبيعي
                  </h2>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
