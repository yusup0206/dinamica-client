import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// images
import slide from '/assets/images/slide.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { ImImages } from 'react-icons/im';

const Slider = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 ">
          <div className="w-full rounded-md overflow-hidden">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop={true}
            >
              <SwiperSlide className="w-full h-[40vh] flex items-center justify-center">
                <img
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[40vh] flex items-center justify-center">
                <img
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide className="h-[40vh] flex items-center justify-center">
                <img
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
