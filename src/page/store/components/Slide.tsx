import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/pagination';
import "../style/Slide.css";

const slideImg = [
  { id: 1, img: '/img/store/slide_1.jpg' },
  { id: 2, img: '/img/store/slide_2.jpg' },
  { id: 3, img: '/img/store/slide_3.jpg' },
  { id: 4, img: '/img/store/slide_4.jpg' },
  { id: 5, img: '/img/store/slide_5.jpg' },
  { id: 6, img: '/img/store/slide_6.jpg' },
  { id: 7, img: '/img/store/slide_7.jpg' }
]


function Slide() {

  return (
    <div className="img_slide">
      <h3>Randy's Donuts in Korea</h3>
      <div className="container">
        <Swiper
          slidesPerView={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next'
          }}
          pagination={{
            clickable: true
          }}
          modules={[Navigation, Pagination]}
          className="slide_wrap"
        >
          {
            slideImg.map(item => (
              <SwiperSlide key={item.id} className="slide_item">
                <img src={item.img} alt="slide_img" />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="swiper_navigation">
          <button type="button" className="prev">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button type="button" className="next">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slide;
