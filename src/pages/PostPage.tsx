import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/usePostApi";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useGetPost(slug || "");

  console.log("PostPage", post);

  if (isLoading) return <div>Loading...</div>;
  return <div></div>;
};

export default PostPage;
