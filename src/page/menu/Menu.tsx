import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useFetchMenu } from "../../hook/UseFetchMenu";
import Title from "./components/Title";
import "./style/Menu.css";

interface ItemType {
  id: number,
  name: string,
  en_name: string,
  price: number,
  img: string,
  category: string,
  best: boolean
}

interface CategoryType {
  id: number,
  menu: string,
  url: string
}

const category :CategoryType[] = [
  { id: 0, menu: 'Best', url: '/menu/best' },
  { id: 1, menu: 'Classic', url: '/menu/classic' },
  { id: 2, menu: 'Deluxe', url: '/menu/deluxe' },
  { id: 3, menu: 'Fancy', url: '/menu/fancy' },
  { id: 4, menu: 'Premium', url: '/menu/premium' },
]

function Menu() {

  const { data } = useFetchMenu();
  const { pathname } = useLocation();

  const [currentItem, setCurrentItem] = useState<null | []>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');

  let menu = pathname.split('/');

  const currentMenu = () => {
    switch (menu[2]) {
      case 'best':
        setCurrentItem(
          data?.filter((item :ItemType) => item.best)
        );
        setCurrentTitle('랜디스도넛의 베스트 도넛을 만나보세요!');
        break;
      case 'classic':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'classic')
        );
        setCurrentTitle('정통적인 재료로 기본에 집중한 클래식 도넛');
        break;
      case 'deluxe':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'deluxe')
        );
        setCurrentTitle('미국 도넛의 진한 맛을 느낄 수 있는 디럭스 도넛');
        break;
      case 'fancy':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'fancy')
        );
        setCurrentTitle('고급스러운 토핑이 아낌없이 들어간 팬시 도넛');
        break;
      case 'premium':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'premium')
        );
        setCurrentTitle('수준 높은 재료와 형태를 가진 프리미엄 도넛');
        break;
      default:
        setCurrentItem(null);
        setCurrentTitle('');
        break;
    }
  };

  useEffect(() => {
    currentMenu();
  }, [pathname, data]);

  return (
    <div className='menu'>
      <Title />
      <div className="contents">
        <div className="title">
          <p className="main">도넛메뉴</p>
          <p className="sub">World Famous Since 1952</p>
        </div>
        <ul className="category">
          {
            category.map(item => (
              <li key={item.id} className={pathname === item.url ? "on" : ""}>
                <Link to={item.url}>{item.menu}</Link>
              </li>
            ))
          }
        </ul>
        <div className="title_img"></div>
        <h4>{currentTitle}</h4>
        <div className="item_box">
          {
            currentItem ?
              currentItem.map((item :ItemType) => (
                <div className="item" key={item.id}>
                  <div className="info">
                    {
                      item.best ?
                        <div className="icon">
                          <p>BEST</p>
                        </div> :
                        <></>
                    }
                    <figure><img src={item.img} alt={item.name} /></figure>
                    <p className="name">{item.name}</p>
                  </div>
                  <div className="hover">
                    <h3>{item.name}</h3>
                    <p className="sub">{item.en_name}</p>
                    <p className="price">{item.price.toLocaleString('ko-KR')}원</p>
                  </div>
                </div>
              )) :
              <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Menu;