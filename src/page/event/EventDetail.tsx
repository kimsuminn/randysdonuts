import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchEvent } from "../../hook/UseFetchEvent";
import Title from "./components/Title";
import "./style/EventDetail.css";

function EventDetail() {

  const { id } = useParams();
  const { data } = useFetchEvent(id);
  console.log(data);

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
            <figure>
              <img src={data?.content} alt={data?.date} />
            </figure>
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
