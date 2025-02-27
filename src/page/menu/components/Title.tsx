import { TitleType } from "../../../types/PublicTypes";
import PageTitle from "../../../layout/components/PageTitle";

const title :TitleType = {
  title: 'MENU',
  sub: `THE BEST DONUTS MADE BY HAND\nSince 1952`,
  bg: '/img/menu/menu_bg.jpg'
}

function Title() {
  return (
    <div className="brand_title">
      <PageTitle title={title} />
    </div>
  )
}

export default Title;