import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export function useCreateLead() {
  return useMutation({
    mutationFn: async (payload: {
      slug: string;
      data: {
        name: string;
        job: string;
        phone: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        answers: Record<string, any>[];
      };
    }) => {
      const res = await api.post("/lead", {
        ...payload.data,
        templateSlug: payload.slug,
      });
      return res.data;
    },
  });
}
