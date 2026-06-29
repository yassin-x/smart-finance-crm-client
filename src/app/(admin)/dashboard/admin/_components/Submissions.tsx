/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useLeads } from "../_actions/getLeads";

export default function Submissions() {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const limit = 20;

  const { data, isLoading, isFetching } = useLeads(page, limit, order);

  const leads = data?.data || [];
  const meta = data?.meta;

  return (
    <div className="container max-w-3xl mx-auto py-6 space-y-6">
      {/* 🔵 Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-xl font-bold">العملاء</h1>

        {/* Filter */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={order === "desc" ? "default" : "outline"}
            onClick={() => {
              setOrder("desc");
              setPage(1);
            }}
          >
            الأحدث
          </Button>

          <Button
            size="sm"
            variant={order === "asc" ? "default" : "outline"}
            onClick={() => {
              setOrder("asc");
              setPage(1);
            }}
          >
            الأقدم
          </Button>
        </div>
      </div>

      {/* 🔵 Loading */}
      {isLoading && (
        <div className="text-center py-10 text-muted-foreground">
          جاري التحميل...
        </div>
      )}

      {/* 🔵 Empty */}
      {!isLoading && leads.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          لا يوجد عملاء حالياً
        </div>
      )}

      {/* 🔵 Leads */}
      <div className="grid gap-4">
        {leads.map((lead: any) => (
          <div
            key={lead.id}
            className="rounded-2xl border bg-white/50 backdrop-blur p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="font-semibold text-lg">{lead.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {lead.job} • {lead.phone}
                </p>
              </div>

              <Button
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  window.location.href = `tel:${lead.phone}`;
                }}
              >
                📞 اتصال
              </Button>
            </div>

            {/* Answers */}
            <div className="mt-4 grid gap-2">
              {lead.submission.answers.map((ans: any, i: number) => (
                <div
                  key={i}
                  className="flex justify-between text-sm border-b pb-1"
                >
                  <span className="text-muted-foreground">{ans.question}</span>
                  <span className="font-medium">{ans.answer}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔵 Pagination */}
      {meta?.lastPage > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">
            صفحة {page} من {meta.lastPage}
          </span>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setPage((prev) => (prev < meta.lastPage ? prev + 1 : prev))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* 🔵 subtle loading indicator */}
      {isFetching && !isLoading && (
        <div className="text-xs text-center text-muted-foreground">
          جاري التحديث...
        </div>
      )}
    </div>
  );
}
