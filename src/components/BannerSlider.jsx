import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerSlider = (props) => {
  const sliders = props.sliders;

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
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              loop={true}
            >
              {sliders.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="w-full h-[40vh] flex items-center justify-center shadow-lg"
                >
                  <img
                    src={slide.image}
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

BannerSlider.propTypes = {
  sliders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BannerSlider;
