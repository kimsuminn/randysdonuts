import { Link } from "react-router-dom";
import "../style/Header.css";
import { useState } from "react";

interface MenuType {
  id: number,
  title: string,
  url: string,
  sub: { title: string, url: string }[]
}

const menu :MenuType[] = [
  { 
    id: 0, 
    title: 'BRAND', 
    url: '/brand',
    sub: [
      { title: '브랜드 스토리', url: '/brand' },
      { title: '브랜드 소식', url: '/brand/news' }
    ]
  },
  {
    id: 1,
    title: 'MENU',
    url: '/menu/best',
    sub: [
      { title: '베스트', url: '/menu/best' },
      { title: '클래식 도넛', url: '/menu/classic' },
      { title: '디럭스 도넛', url: '/menu/deluxe' },
      { title: '팬시 도넛', url: '/menu/fancy' },
      { title: '프리미엄 도넛', url: '/menu/premium' },
    ]
  },
  {
    id: 2,
    title: 'POP CULTURE',
    url: '/popculture',
    sub: [
      { title: 'Pop Culture', url: '/popculture' }
    ]
  },
  {
    id: 3,
    title: 'STORE',
    url: '/store',
    sub: [
      { title: '매장 소개', url: '/store' },
      { title: '가맹점 문의', url: '/store/fanchise' },
    ]
  },
  {
    id: 4,
    title: 'EVENT',
    url: '/event',
    sub: [
      { title: '진행 이벤트', url: '/event/progress' },
      { title: '종료 이벤트', url: '/event/end' },
      { title: '당첨자 발표', url: '/event/winning' },
    ]
  }
];

function Header() {

  const [open, setOpen] = useState<boolean>(false);
  const mouseOverEvent = () => {
    setOpen(true);
  }

  const mouseLeaveEvent = () => {
    setOpen(false);
  }

  return (
    <header>
      <div className="header_inner">
        <h1 className="logo">
          <Link to='/'><img src="/img/layout/logo.png" alt="logo" /></Link>
        </h1>
        <ul className="depth_1">
          {
            menu.map(item => (
              <li 
                key={item.id} 
                onMouseOver={mouseOverEvent}
                onMouseLeave={mouseLeaveEvent}
              >
                <Link to={item.url}>{item.title}</Link>
                <ul className="depth_2">
                  {
                    item.sub.map((sub, idx) => (
                      <li key={idx}>
                        <Link to={sub.url}>{sub.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
        <ul className="sns">
          <li className="facebook">
            <a href="https://www.facebook.com/randysdonutskr" target="_blank" rel="noopener noreferrer">
              <img src="/img/layout/facebook.png" alt="facebook" />
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/randysdonuts1952kr/#" target="_blank" rel="noopener noreferrer">
              <img src="/img/layout/insta.png" alt="insta" />
            </a>
          </li>
        </ul>
      </div>
      <div className={open ? "sub open" : "sub"}></div>
    </header>
  )
}

export default Header;