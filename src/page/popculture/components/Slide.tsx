import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import AOS from "aos";

import "../style/Slide.css";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const images = [
  { id: 1, img: '/img/popculture/slide_1.jpg' },
  { id: 2, img: '/img/popculture/slide_2.jpg' },
  { id: 3, img: '/img/popculture/slide_3.jpg' },
  { id: 4, img: '/img/popculture/slide_4.jpg' },
  { id: 5, img: '/img/popculture/slide_5.jpg' },
  { id: 6, img: '/img/popculture/slide_6.jpg' },
  { id: 7, img: '/img/popculture/slide_7.jpg' },
  { id: 8, img: '/img/popculture/slide_8.jpg' },
  { id: 9, img: '/img/popculture/slide_9.jpg' },
  { id: 10, img: '/img/popculture/slide_10.jpg' },
  { id: 11, img: '/img/popculture/slide_11.jpg' },
  { id: 12, img: '/img/popculture/slide_12.jpg' },
  { id: 13, img: '/img/popculture/slide_13.jpg' },
  { id: 14, img: '/img/popculture/slide_14.jpg' },
  { id: 15, img: '/img/popculture/slide_15.jpg' },
  { id: 16, img: '/img/popculture/slide_16.jpg' },
  { id: 17, img: '/img/popculture/slide_17.jpg' },
  { id: 18, img: '/img/popculture/slide_18.jpg' },
]

function Slide() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="slider">
      <div 
        className="container"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-dealy="300"
      >
        <Swiper
          grabCursor={true}
          spaceBetween={16}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          keyboard={{ enabled: true }}
          modules={[Keyboard, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            500: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 5
            }
          }}
          className="wrap"
        >
          {
            images.map(item => (
              <SwiperSlide key={item.id} className="slide_item">
                <img 
                  src={item.img} 
                  alt="slide_img"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Slide;