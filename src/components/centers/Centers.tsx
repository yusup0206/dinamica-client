import type { FC } from "react";
import type { CenterProps } from "../../interfaces/center.interface";
import { Link } from "react-router-dom";

const Centers: FC<CenterProps> = ({ centers, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 grid grid-cols-12 gap-4">
          <h1 className="text-primary text-xl md:text-2xl font-semibold col-span-12">
            Centers
          </h1>
          {centers?.map((center) => (
            <Link
              to={`/center/${center.slug}`}
              key={center.id}
              className="group w-full col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src={center.image}
                  alt={center.name}
                  loading="lazy"
                  className="w-full h-52 md:h-64 object-cover group-active:scale-105 md:group-hover:scale-105 transition-all"
                />
                <div className="absolute top-0 left-0 bg-black/30 w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold text-center text-balance">
                    {center.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Centers;
