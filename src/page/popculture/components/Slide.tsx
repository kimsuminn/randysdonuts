import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import "../style/Slide.css";

function Slide() {

  let imgIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <div className="slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={16}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectCoverflow, Keyboard, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className="swiper"
      >
        {
          imgIdx.map(item => (
            <SwiperSlide key={item} className="slide_item">
              <img src={`/img/popculture/slide_${item}.jpg`} alt="slide_img" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slide;