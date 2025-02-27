import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

function Menu() {

  const { pathname } = useLocation();
  const [currentItem, setCurrentItem] = useState([]);
  const { data, isLoading } = useFetchMenu();

  let menu = pathname.split('/');

  const currentMenu = () => {
    switch (menu[2]) {
      case 'best':
        setCurrentItem(
          data?.filter((item :ItemType) => item.best)
        );
        break;
      case 'classic':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'classic')
        );
        break;
      case 'deluxe':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'deluxe')
        );
        break;
      case 'fancy':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'fancy')
        );
        break;
      case 'premium':
        setCurrentItem(
          data?.filter((item :ItemType) => item.category === 'premium')
        );
        break;
      default:
        setCurrentItem([]);
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

      </div>
    </div>
  )
}

export default Menu;