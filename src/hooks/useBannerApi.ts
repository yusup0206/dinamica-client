import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type { Sliders } from "../interfaces/bannerSlider.interface";
import type { TariffSliders } from "../interfaces/tariff.interface";
import type { TeammatesResponse } from "../interfaces/center.interface";

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

export const useGetCenterTariffs = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<TariffSliders>>({
    queryKey: ["centerTariff", language, slug],
    queryFn: async () => {
      return await api.get(`/center/${slug}/tariffs`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};

export const useGetCenterTeammates = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<TeammatesResponse>>({
    queryKey: ["centerTeammates", language, slug],
    queryFn: async () => {
      return await api.get(`/center/${slug}/teammates`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};
