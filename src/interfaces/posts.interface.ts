export interface Post {
  id: number;
  center_id: number;
  slug: string;
  name: string;
  text: string;
  image: string;
  type: string;
}

export interface Posts {
  posts: Post[];
}

export interface PostProps {
  posts: Post[] | undefined;
  isLoading: boolean;
}
