import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { ImImages } from 'react-icons/im';

const activities = [
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
  {
    id: '4',
    path: '/branch',
    name: 'Dinamica',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '5',
    path: '/branch',
    name: 'Dinamica Ladies',
    image: '/assets/images/slide.jpg',
  },
  {
    id: '6',
    path: '/branch',
    name: 'Dinamica 3',
    image: '/assets/images/slide.jpg',
  },
];

const ActivitySlider = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10">
          <div className="w-full rounded-md overflow-hidden">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop={true}
            >
              {activities.map((activity) => (
                <SwiperSlide
                  key={activity.id}
                  className="w-full flex flex-col items-center justify-center shadow-lg"
                >
                  <img
                    src={activity.image}
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

export default ActivitySlider;
