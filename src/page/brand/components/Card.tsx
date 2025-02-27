import { BrandType } from "../Brand";
import "../style/Card.css";

interface PropsType {
  item: BrandType
}

function Card({ item } :PropsType) {
  return (
    <div className={item.inverse ? "card img_right" : "card"}>
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