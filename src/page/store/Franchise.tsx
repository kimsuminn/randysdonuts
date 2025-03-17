import { useEffect } from "react";
import Title from "./components/Title";
import AOS from "aos";

import "aos/dist/aos.css";
import "./style/Franchise.css";

function Franchise() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="franchise">
      <Title />
      <div 
        className="contents"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <figure><img src="/img/store/comming.jpg" alt="comming" /></figure>
        <h3>해당 메뉴는 준비중입니다.</h3>
        <p>홈페이지를 방문해주셔서 감사합니다.</p>
      </div>
    </div>
  )
}

export default Franchise;
