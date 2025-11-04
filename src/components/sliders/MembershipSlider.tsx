import { Carousel } from "antd";
import { useEffect, useState } from "react";
import type { MembershipSliderProps } from "../../interfaces/tariff.interface";
import { useAppStore } from "../../stores/store";

const MembershipSlider = ({ tariffs, isLoading }: MembershipSliderProps) => {
  const language = useAppStore((state) => state.language);

  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex flex-col gap-4">
          <h1 className="text-primary text-xl md:text-2xl font-semibold col-span-12">
            {language === "tm" ? "Tarifler" : "Тарифы"}
          </h1>
          <Carousel
            infinite={true}
            draggable={true}
            autoplay
            autoplaySpeed={3000}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            className="rounded-md overflow-hidden gap-4"
          >
            {tariffs?.map((tariff) => (
              <div key={tariff.id} className="w-full h-[500px] px-px md:px-2">
                <div className="relative w-full h-full rounded-md overflow-hidden shadow-md">
                  <img
                    src={tariff.image}
                    alt={tariff.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-primary/30 p-4 flex flex-col items-start justify-between gap-4">
                    <div className="">
                      <h3 className="text-white text-lg md:text-xl font-semibold">
                        {tariff.name}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: tariff.text }}
                        className="text-white text-sm md:text-base"
                      ></div>
                    </div>
                    <span className="w-full rounded-md text-primary p-2 bg-white text-sm md:text-base font-semibold text-center">
                      {tariff.price} TMT
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MembershipSlider;
