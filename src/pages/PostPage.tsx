import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/usePostApi";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useGetPost(slug || "");

  console.log("PostPage", post);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex flex-col gap-4">
          <div className="w-full rounded-md overflow-hidden">
            <img
              src={post?.data.data.image}
              alt={post?.data.data.name}
              className="w-full"
            />
          </div>
          <h1 className="text-primary text-xl md:text-2xl font-semibold col-span-12">
            {post?.data.data.name}
          </h1>
          <div
            className="text-textColor text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: post?.data?.data?.text || "" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
