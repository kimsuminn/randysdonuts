import { TitleType } from "../../../types/PublicTypes";
import PageTitle from "../../../layout/components/PageTitle";

const title :TitleType = {
  title: 'EVENT',
  sub: `THE BEST DONUTS MADE BY HAND\nSince 1952`,
  bg: '/img/event/event_bg.jpg'
}

function Title() {
  return (
    <div className="brand_title">
      <PageTitle title={title} />
    </div>
  )
}

export default Title;