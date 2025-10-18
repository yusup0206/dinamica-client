export interface Post {
  id: number;
  center_id: number;
  slug: string;
  name: string;
  text: string;
  image: string;
  type: string;
  position?: number;
}

export interface PaginatedPostsData {
  current_page: number;
  data: Post[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url: string | null; label: string; active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PostsApiInnerData {
  data: PaginatedPostsData;
  status: number;
  message: string;
}

export interface PostApiInnerData {
  data: Post;
  status: number;
  message: string;
}

export interface PostFilters {
  page?: string;
  limit?: string;
}

export interface PostProps {
  posts: Post[] | undefined;
  isLoading: boolean;
}
