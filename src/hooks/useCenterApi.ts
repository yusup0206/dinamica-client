import { useQuery } from "@tanstack/react-query";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type { Centers, CenterSingle } from "../interfaces/center.interface";
import api from "../api";

export const useGetCenters = () => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Centers>>({
    queryKey: ["centers", language],
    queryFn: async () => {
      return await api.get("/centers");
    },
  });
  return { data, isLoading, error };
};

export const useGetCenter = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<CenterSingle>>({
    queryKey: ["center", language, slug],
    queryFn: async () => {
      return await api.get(`/center/${slug}`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};
