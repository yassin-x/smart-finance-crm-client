import { api } from "@/lib/axios";
import { queryKeys } from "@/lib/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      try {
        const res = await api.post("/auth/sign-in", {
          email: formData.get("email"),
          password: formData.get("password"),
        });

        toast.success(res.data.message);
        const data = res.data;
        console.log(data);
        localStorage.setItem("token", data.tokens.access_token);

        return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.response.data?.message || "Login failed");
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.auth.me,
      });
    },
  });
}
