import { api } from "@/lib/axios";
import { queryKeys } from "@/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";

export function usePrograms() {
  return useQuery({
    queryKey: queryKeys.programs.list,
    queryFn: async () => {
      const res = await api.get("/template");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
