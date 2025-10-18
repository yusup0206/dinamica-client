import { Carousel } from "antd";
import { useEffect, useState } from "react";

const MembershipSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1); // Mobile
      } else if (width < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(3); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 flex flex-col gap-4">
          <h1 className="text-primary text-xl md:text-2xl font-semibold col-span-12">
            Memberships
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
            <div className="w-full h-[500px] px-px md:px-2">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] px-px md:px-2">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] px-px md:px-2">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] px-px md:px-2">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MembershipSlider;
