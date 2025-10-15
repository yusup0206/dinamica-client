import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import type { Credentials, LoginResponse } from "../interfaces/login.interface";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type { Tariffs } from "../interfaces/tariff.interface";
import type { Schedule } from "../interfaces/schedule.interface";

export const useLoginMutation = () => {
  return useMutation<LoginResponse, Error, Credentials>({
    mutationFn: async (credentials: Credentials) => {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    },
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/auth/logout");
      return response.data;
    },
  });
};

export const useGetClientTariffs = () => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Tariffs>>({
    queryKey: ["tariff", language],
    queryFn: async () => {
      return await api.get("/client/tariffs");
    },
  });
  return { data, isLoading, error };
};

export const useGetSchedule = (id?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Schedule>>({
    queryKey: ["schedule", language, id],
    queryFn: async () => {
      return await api.get(`/client/schedule/${id}`);
    },
    enabled: !!id,
  });
  return { data, isLoading, error };
};

export const useClientAvatarMutation = () => {
  return useMutation({
    mutationFn: async (image: FormData) => {
      const response = await api.post("/client/image_upload", image, {
        headers: {
          "Content-Type": undefined,
        },
      });
      return response.data;
    },
  });
};
