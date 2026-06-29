export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  users: {
    list: ["users", "list"] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },
  leads: {
    list: ["leads", "list"] as const,
    listProgram: (slug: string) => ["leads", "list", slug] as const,
    detail: (id: string) => ["leads", "detail", id] as const,
  },
  programs: {
    list: ["programs", "list"] as const,
    detail: (slug: string) => ["programs", "detail", slug] as const,
  },
};
