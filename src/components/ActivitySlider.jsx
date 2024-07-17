import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SectionHeader from './SectionHeader';
// import { ImImages } from 'react-icons/im';

const activities = [
  {
    id: '1',
    path: '/branch',
    name: 'Dinamica',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
  {
    id: '2',
    path: '/branch',
    name: 'Dinamica Ladies',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
  {
    id: '3',
    path: '/branch',
    name: 'Dinamica 3',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
  {
    id: '4',
    path: '/branch',
    name: 'Dinamica',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
  {
    id: '5',
    path: '/branch',
    name: 'Dinamica Ladies',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
  {
    id: '6',
    path: '/branch',
    name: 'Dinamica 3',
    image: '/assets/images/slide.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, magni voluptates, officiis at alias consequatur nemo beatae nisi repudiandae ipsam expedita tempora molestias soluta in. Excepturi at corrupti asperiores delectus!',
  },
];

const ActivitySlider = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 flex flex-col gap-5">
          <SectionHeader
            name={'Activities'}
            description={
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius optio numquam officia corrupti similique nulla quasi odit minus ratione, laudantium in doloremque est necessitatibus maiores!'
            }
          />
          <div className="w-full rounded-md overflow-hidden">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              loop={true}
              className="white"
            >
              {activities.map((activity) => (
                <SwiperSlide
                  key={activity.id}
                  className="w-full rounded-md bg-primary-100 p-8 flex flex-col items-start justify-start gap-2 shadow-lg "
                >
                  <div className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center text-white mb-4">
                    <img
                      className="w-full h-full"
                      src={activity.image}
                      alt=""
                    />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold">
                    {activity.name}
                  </h3>
                  <p className="text-white text-sm sm:text-base line-clamp-5 mb-2">
                    {activity.description}
                  </p>
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
