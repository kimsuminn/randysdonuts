import { useEffect } from "react";
import { StoreListType } from "../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faPhone, faSquareParking } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

import "aos/dist/aos.css";
import "../style/StoreLocation.css";

function StoreLocation({ item } :{ item: StoreListType }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="location_item"
      data-aos={`${
        item.id % 2 === 0 ?
        "fade-left" :
        "fade-right"
      }`}
      data-aos-duration="1500"
      data-aos-dealy={`${item.id * 300}`}
    >
      <figure><img src={item.title} alt="title" /></figure>
      <div className="info">
        <div className="text">
          <div className="address">
            <h3>
              <FontAwesomeIcon icon={faLocationDot} />
              주소
            </h3>
            <p>{item.address}</p>
          </div>
          <div className="time">
            <h3>
              <FontAwesomeIcon icon={faClock} />
              영업시간
            </h3>
            <p>{item.time}</p>
          </div>
          <div className="number">
            <h3>
              <FontAwesomeIcon icon={faPhone} />
              전화번호
            </h3>
            <p>{item.number}</p>
          </div>
          <div className="park">
            <h3>
              <FontAwesomeIcon icon={faSquareParking} />
              주차
            </h3>
            <p>{item.park}</p>
          </div>
        </div>
        <div className="map">
          <iframe 
            src={item.map} 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation;
