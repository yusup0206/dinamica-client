import type { FC } from "react";
import type { CenterSocialMediaProps } from "../../interfaces/center.interface";
import { Link } from "react-router-dom";

const CenterSocialMedia: FC<CenterSocialMediaProps> = ({
  socialMedias,
  isLoading,
}) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5">
          <div className="w-full rounded-md bg-primary p-4 shadow-md flex items-center justify-center gap-4 flex-wrap">
            {socialMedias?.map((socialMedia) => (
              <Link
                key={socialMedia.id}
                to={socialMedia.link}
                className="size-14 md:size-18 rounded-md"
              >
                <img
                  src={socialMedia.icon}
                  alt={socialMedia.link}
                  className="size-full object-cover border-2 border-bgColor rounded-md"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSocialMedia;
