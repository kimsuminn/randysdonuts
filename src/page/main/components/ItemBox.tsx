import { useNavigate } from "react-router-dom";
import { MainItemType } from "../Main";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface PropsType {
  item: MainItemType[]
}

function ItemBox({ item } :PropsType) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="item_box">
      {
        item.map(val => (
          <div 
            key={val.id}
            className="item"
          >
            <figure>
              <img src={val.img} alt={`${val.id}`} />
            </figure>
            <div className="info">
              <div className="title">
                <p>{val.subTitle}</p>
                <h1>{val.title}</h1>
              </div>
              <div className="description">
                <p>
                  {val.description_1}<br />
                  {val.description_2}
                </p>
                <button 
                  type="button"
                  onClick={() => navigate(val.url)}
                >VIEW MORE</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ItemBox;