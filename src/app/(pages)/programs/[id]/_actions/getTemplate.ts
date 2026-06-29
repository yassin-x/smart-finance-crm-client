import { api } from "@/lib/axios";
import { queryKeys } from "@/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";

export function useProgramTemplate(slug: string) {
  return useQuery({
    queryKey: queryKeys.programs.detail(slug),
    queryFn: async () => {
      const res = await api.get(`/template/${slug}`);
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
