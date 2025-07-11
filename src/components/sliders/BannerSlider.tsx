import { Carousel } from "antd";
import type { FC } from "react";
import type {
  Slider,
  SliderProps,
} from "../../interfaces/bannerSlider.interface";

const BannerSlider: FC<SliderProps> = ({ banners, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5">
          <Carousel
            infinite={true}
            draggable={true}
            autoplay
            autoplaySpeed={3000}
            className="rounded-md overflow-hidden shadow-md"
          >
            {banners?.map((banner: Slider) => (
              <div key={banner.id} className="w-full h-[500px]">
                <img
                  src={banner.image}
                  alt={banner.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
