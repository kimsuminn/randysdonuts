import { useEffect } from "react";
import { BrandType } from "../Brand";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../style/Card.css";

interface PropsType {
  item: BrandType
}

function Card({ item } :PropsType) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className={item.inverse ? "card img_right" : "card"}
      data-aos={item.inverse ? "fade-left" : "fade-right"}
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      <figure><img src={item.img} alt={item.title} /></figure>
      <div className="card_text">
        <div className="number">
          <p>{item.id}</p>
        </div>
        <div className="text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;