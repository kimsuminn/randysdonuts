import Title from "./components/Title";
import "./style/Franchise.css";

function Franchise() {
  return (
    <div className="franchise">
      <Title />
      <div className="contents">
        <figure><img src="/img/store/comming.jpg" alt="comming" /></figure>
        <h3>해당 메뉴는 준비중입니다.</h3>
        <p>홈페이지를 방문해주셔서 감사합니다.</p>
      </div>
    </div>
  )
}

export default Franchise;
