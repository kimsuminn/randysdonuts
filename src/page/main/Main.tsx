import ItemBox from "./components/ItemBox";
import "./style/Main.css";

export interface MainItemType {
  id: number,
  subTitle: string,
  title: string,
  description_1: string,
  description_2: string,
  img: string,
  url: string
}

const mainItem :MainItemType[] = [
  {
    id: 1,
    subTitle: 'Randy\'s Menu',
    title: '메뉴 확인하기',
    description_1: '랜디스의 특별한 도넛들!',
    description_2: 'Classic/Deluxe/Fancy/Premium',
    img: 'http://randysdonuts.co.kr/adm/data/banner/banner_1908060123593.jpg',
    url: '/menu/best'
  },
  {
    id: 2,
    subTitle: 'Randy\'s in Korea',
    title: '랜디스 매장 찾기',
    description_1: '제주 애월점 · 서울 연남점 · 대구 동성로점 ·',
    description_2: '서울 가로수길점 · 부산 광안리점 · 타임빌라스 수원',
    img: 'http://randysdonuts.co.kr/adm/data/banner/banner_2308170311045.jpg',
    url: '/store'
  },
]

function Main() {
  return (
    <main>
      <div className="main_inner">
        <ItemBox item={mainItem} />
      </div>
    </main>
  )
}

export default Main;