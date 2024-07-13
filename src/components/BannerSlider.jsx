import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { ImImages } from 'react-icons/im';

const branches = [
  {
    id: '1',
    path: '/branch',
    name: 'Dinamica',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '2',
    path: '/branch',
    name: 'Dinamica Ladies',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '3',
    path: '/branch',
    name: 'Dinamica 3',
    image: '/assets/images/slide.jpg',
  },
];

const BannerSlider = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10">
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
              {branches.map((branch) => (
                <SwiperSlide
                  key={branch.id}
                  className="w-full h-[40vh] flex items-center justify-center shadow-lg"
                >
                  <img
                    src={branch.image}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
