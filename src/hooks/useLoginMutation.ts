import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppStore } from "../stores/store";
import api from "../api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  user: { id: string; name: string };
}

export const useLoginMutation = () => {
  const qc = useQueryClient();
  const setToken = useAppStore((s) => s.setToken);

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const { data } = await api.post<LoginResponse>(
        "/auth/login",
        credentials
      );
      return data;
    },

    onSuccess: ({ accessToken }) => {
      setToken(accessToken);
      localStorage.setItem("token", accessToken);
      qc.invalidateQueries();
    },
  });
};
