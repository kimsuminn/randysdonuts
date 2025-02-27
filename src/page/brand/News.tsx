import Title from "./components/Title";
import "./style/News.css";

function News() {
  return (
    <div className="news">
      <Title />
      <div className="contents">
        <div className="title">
          <p className="main">브랜드 소식</p>
          <p className="sub">Notice & News</p>
        </div>
      </div>
    </div>
  )
}

export default News;