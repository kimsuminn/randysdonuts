import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchEvent } from "../../hook/UseFetchEvent";
import Title from "./components/Title";
import "./style/EventDetail.css";

function EventDetail() {

  const { id } = useParams();
  const { data } = useFetchEvent(id);

  return (
    <div className="detail">
      <Title />
      <div className="contents">
        <div className="title">
          <p className="main">이벤트 & 프로모션</p>
          <p className="sub">Randy's Donuts Event & Promotion</p>
        </div>
        <div className="detail_contents">
          <div className="contents_title">
            <h3>{data?.title}</h3>
            <p>{data?.date}</p>
          </div>
          <div className="img">
              {
                data?.url ?
                typeof data?.content === 'string' && typeof data?.url === 'string' ?
                <div className="img_box">
                  <Link to={data?.url}>
                    <img src={data?.content} alt={data?.date} />
                  </Link>
                </div> :
                <div className="img_box">
                  <img src={data?.content[1]} alt={data?.date} />
                    <a href={data?.url[1]}>
                      <img src={data?.content[2]} alt={data?.date} />
                    </a>
                    <a href={data?.url[2]}>
                      <img src={data?.content[3]} alt={data?.date} />
                    </a>
                </div> :
                <div className="img_box">
                  <img src={data?.content} alt={data?.date} />
                </div>
              }
          </div>
          <button type="button">
            <Link to={data?.end ? '/event/end' : '/event/progress'}>목록으로</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;
