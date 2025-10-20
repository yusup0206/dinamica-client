import type { FC } from "react";
import type { PostProps } from "../../interfaces/posts.interface";
import { Link, useParams } from "react-router-dom";
import { useAppStore } from "../../stores/store";

const CenterPosts: FC<PostProps> = ({ posts, isLoading }) => {
  const { slug } = useParams();
  const language = useAppStore((state) => state.language);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 grid grid-cols-12 gap-4">
          <h1 className="text-primary text-xl md:text-2xl font-semibold col-span-12">
            {language === "tm" ? "Habarlar" : "News"}
          </h1>
          {posts?.map((post) => (
            <Link
              to={`/center/${slug}/post/${post.slug}`}
              key={post.id}
              className="group w-full col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.name}
                  loading="lazy"
                  className="w-full h-52 md:h-64 object-cover group-active:scale-105 md:group-hover:scale-105 transition-all"
                />
              </div>
              <h3 className="text-headerColor text-lg md:text-xl font-semibold text-start text-balance group-active:text-primary md:group-hover:text-primary transition-all">
                {post.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterPosts;
