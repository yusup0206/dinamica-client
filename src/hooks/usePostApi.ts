import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { useAppStore } from "../stores/store";
import type { ApiResponse } from "../interfaces/global.interface";
import type {
  PostApiInnerData,
  PostFilters,
  PostsApiInnerData,
} from "../interfaces/posts.interface";

export const useGetPosts = (filters: PostFilters) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<PostsApiInnerData>>({
    queryKey: ["posts", language, filters],

    queryFn: async () => {
      let queryString = "/posts";

      const params = new URLSearchParams(filters as Record<string, string>);

      if (params.toString()) {
        queryString += `?${params.toString()}`;
      }

      return await api.get(queryString);
    },
  });
  return { data, isLoading, error };
};

export const useGetPost = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<PostApiInnerData>>({
    queryKey: ["post", language, slug],
    queryFn: async () => {
      return await api.get(`/post/${slug}`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};

export const useGetCenterPosts = (slug?: string) => {
  const language = useAppStore((state) => state.language);

  const { data, isLoading, error } = useQuery<ApiResponse<PostsApiInnerData>>({
    queryKey: ["centerPosts", language, slug],
    queryFn: async () => {
      return await api.get(`/center/${slug}/posts`);
    },
    enabled: !!slug,
  });
  return { data, isLoading, error };
};
