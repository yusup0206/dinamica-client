import { Carousel } from "antd";
import { useEffect, useState } from "react";
import type { TeammatesSliderProps } from "../../interfaces/center.interface";
import { useAppStore } from "../../stores/store";

const TeammatesSlider = ({ teammates, isLoading }: TeammatesSliderProps) => {
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
            {language === "tm" ? "Biziň toparymyz" : "Наша команда"}
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
            {teammates?.map((teammate) => (
              <div key={teammate.id} className="w-full h-[500px] px-px md:px-2">
                <div className="w-full h-full rounded-md overflow-hidden shadow-md px-4 py-8 bg-white flex flex-col items-center justify-start gap-4">
                  <div className="size-28 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/slide.jpg"
                      alt=""
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                  <h3 className="text-primary text-lg md:text-xl font-semibold">
                    {teammate.surname} {teammate.name} {teammate.fatherName}
                  </h3>
                  <p className="text-textColor text-sm md:text-base italic">
                    {teammate.text}
                  </p>
                  <h5 className="text-customBlack-100 text-sm sm:text-base font-semibold mt-4">
                    {teammate.job}
                  </h5>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeammatesSlider;
