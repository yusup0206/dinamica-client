import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type { Sliders } from "../interfaces/bannerSlider.interface";

export const useGetBanners = () => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Sliders>>({
    queryKey: ["banners", language],
    queryFn: async () => {
      return await api.get("/sliders");
    },
  });
  return { data, isLoading, error };
};

export const useGetCenterBanner = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Sliders>>({
    queryKey: ["centerBanner", language, slug],
    queryFn: async () => {
      return await api.get(`/center/${slug}/sliders`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};
