import PageTitle from "../../layout/components/PageTitle";
import "./style/Brand.css";

export type TitleType = {
  [key :string]: string
}

const title :TitleType = {
  title: 'BRAND',
  sub: `THE BEST DONUTS MADE BY HAND Since 1952`,
  bg: './img/brand/brand_bg.jpg'
}

function Brand() {
  return (
    <div className="brand">
      <PageTitle title={title} />
    </div>
  )
}

export default Brand;