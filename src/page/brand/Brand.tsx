import { useEffect } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/Brand.css";

export interface BrandType {
  id: number,
  title: string,
  description: string,
  img: string,
  inverse: boolean
}

const brand :BrandType[] = [
  {
    id: 1,
    title: '도넛 전문가가 만드는 신선한 도넛',
    description: '70년 역사의 랜디스도넛은 매장에서 직접 만든 특별한 수제 도넛입니다. 매장에서 직접 만드는 신선한 도넛을 맛보기 위해 고객들은 LA 잉글우드 랜디스도넛 매장 앞에 길게 줄 서있습니다.',
    img: '/img/brand/brand_1.jpg',
    inverse: false
  },
  {
    id: 2,
    title: '최고의 재료와 수제 도넛만의 특별함',
    description: '랜디스도넛만의 최고의 재료와 특별한 비법으로 완성된 도넛은 더욱 풍성한 맛을 선사하며, 신선함은 오래도록 유지됩니다. 게다가 모든 도넛이 정확히 같은 모양이 아니라는 점은 수제 도넛만의 특별함 입니다.',
    img: '/img/brand/brand_2.jpg',
    inverse: true
  },
  {
    id: 3,
    title: '클래식부터 프리미엄까지 다양한 도넛',
    description: '랜디스도넛에는 클래식 도넛부터 프리미엄 도넛까지 다양하고 아낌없는 토핑으로 도넛의 신세계를 선사합니다.',
    img: '/img/brand/brand_3.jpg',
    inverse: false
  },
  {
    id: 4,
    title: '미국은 Pop Culture 아이콘',
    description: '미국 로스앤젤레스 잉글우드에 위치한 매장은 미국 Pop Culture 아이콘 중 하나로 수 많은 영화, TV 쇼와 뮤직비디오 속에서 랜디스 도넛을 만날 수 있으며 전세계에서 오는 관광객들의 핫 플레이스 입니다.',
    img: '/img/brand/brand_4.jpg',
    inverse: true
  },
  {
    id: 5,
    title: '미국 언론의 극찬과 다양한 수상',
    description: 'USA Today, CBS News 등 미국 언론에서 꾸준히 미국 최고의 도넛 브랜드로 언급되었으며, 미국 최고의 맛집 평가사이트인 Yelp 및 다양한 평가 사이트에서 가장 높은 평가를 받은 도넛매장 중 하나입니다.',
    img: '/img/brand/brand_5.jpg',
    inverse: false
  }
]

function Brand() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="brand">
      <Title />
      <div className="contents">
        <div className="title">
          <p className="subtitle">World Famous Since 1952</p>
          <h2>Randy's Donuts Story</h2>
          <p className="description">
            1952년부터 미국 로스엔젤레스의 아이콘으로 자리잡은 수제 도넛 브랜드, 랜디스도넛만의 특별함을 만나보세요.
          </p>
        </div>
        <div className="card_box">
          {
            brand.map(item => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
        <div 
          className="banner" 
          data-aos="fade-up" 
          data-aos-duration="1500" 
          data-aos-delay="300"
        >
          <figure><img src="/img/brand/brand_banner.jpg" alt="banner" /></figure>
          <h3>
            이제, 세계적으로 유명한 랜디스도넛의 <br />
            특별한 맛과 문화를 한국에서도 만날 수 있습니다.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Brand;