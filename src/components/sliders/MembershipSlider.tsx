import { Carousel } from "antd";

const MembershipSlider = () => {
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
            slidesToShow={3}
            slidesToScroll={1}
            className="rounded-md overflow-hidden gap-4"
          >
            <div className="w-full h-[500px] pl-4">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] pl-4">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] pl-4">
              <div className="w-full h-full rounded-md overflow-hidden shadow-md">
                <img
                  src="/assets/images/slide.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-[500px] pl-4">
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
