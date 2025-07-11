import { Breadcrumb } from "antd";
import Posts from "../components/posts/Posts";
import { useGetPosts } from "../hooks/usePostApi";

const PostsPage = () => {
  const { data: posts, isLoading: postsLoading } = useGetPosts();
  return (
    <>
      <Breadcrumb />
      <Posts posts={posts?.data?.posts} isLoading={postsLoading} />
    </>
  );
};

export default PostsPage;
