import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useFetchEvent } from "../../hook/UseFetchEvent";
import Title from "./components/Title";
import AOS from "aos";

import "aos/dist/aos.css";
import "./style/Event.css";

interface ObjectType {
  1: string,
  2: string,
  3?: string
}

interface ItemType {
  id: number,
  title: string,
  description: string,
  date: string,
  title_img: string,
  content: string | ObjectType,
  url: null | string | ObjectType,
  end: boolean
}

function Event() {
  const { pathname } = useLocation();
  const { data } = useFetchEvent(null);

  const [currentItem, setCurrentItem] = useState<null | []>(null);

  const currentEventItem = () => {
    if (pathname === '/event/progress') {
      let newArr = data?.filter((item :ItemType) => !item.end);
      setCurrentItem(newArr?.reverse());
    } else if (pathname === '/event/end') {
      let newArr = data?.filter((item :ItemType) => item.end);
      setCurrentItem(newArr?.reverse());
    }
  }

  useEffect(() => {
    currentEventItem();
  }, [data, pathname]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="event">
      <Title />
      <div className="contents">
        <div className="title">
          <p className="main">이벤트 & 프로모션</p>
          <p className="sub">Randy's Donuts Event & Promotion</p>
        </div>
        <ul 
          className="category"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <li className={pathname === '/event/progress' ? "on" : ""}>
            <Link to='/event/progress'>진행 이벤트</Link>
          </li>
          <li className={pathname === '/event/end' ? "on" : ""}>
            <Link to='/event/end'>종료 이벤트</Link>
          </li>
        </ul>
        <div className="title_img"></div>
        <div className="item_box">
          {
            currentItem ?
              currentItem.map((item :ItemType) => (
                <div 
                  className="item" 
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  <Link to={`/event/${item.id}`}>
                    <figure className={pathname === '/event/end' ? "on" : ""}>
                      <img src={item.title_img} alt={item.date} />
                    </figure>
                    <div className="text">
                      <div className="title_text">
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                      </div>
                      <div className="sub_text">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )) : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Event;
