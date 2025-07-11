import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type { Posts } from "../interfaces/posts.interface";

export const useGetPosts = () => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Posts>>({
    queryKey: ["posts", language],
    queryFn: async () => {
      return await api.get("/posts");
    },
  });
  return { data, isLoading, error };
};

export const useGetPost = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<Posts>>({
    queryKey: ["post", language, slug],
    queryFn: async () => {
      return await api.get(`/post/${slug}`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};
