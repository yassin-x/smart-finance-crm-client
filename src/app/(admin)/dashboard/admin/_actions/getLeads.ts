import { api } from "@/lib/axios";
// import { queryKeys } from "@/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";

export function useLeads(
  page?: number,
  limit?: number,
  order?: "asc" | "desc",
) {
  return useQuery({
    queryKey: ["leads", page, limit, order],
    queryFn: async () => {
      const res = await api.get(`/lead`, {
        params: {
          page,
          limit,
          order,
        },
      });

      console.log(res.data);
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
