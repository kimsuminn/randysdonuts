import { TitleType } from "../../page/brand/Brand";
import "../style/PageTitle.css";

interface PropsType {
  title: TitleType
}

function PageTitle({ title } :PropsType) {

  return (
    <div 
      className="page_title"
      style={{ backgroundImage: `url(${title.bg})` }}
    >
      <div className="text">
        <h1>{title.title}</h1>
        <p>{title.sub}</p>
      </div>
    </div>
  )
}

export default PageTitle;