import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../style/Footer.css";

function Footer() {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(true);

  const visibleBtn = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
      setIsFixed(false);
    } else {
      setIsFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', visibleBtn);

    return () => window.removeEventListener('scroll', visibleBtn);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer>
      <div className="footer_inner">
        <h2 className="logo"><img src="/img/layout/logo.png" alt="logo" /></h2>
        <p>
          서울특별시 마포구 동교로 247 4층, 5층 <br />
          사업자등록번호: 565-87-01114 <br />
          대표 번호: 02-6954-0621 <br />
          대표 메일: randysdonuts@rapport-l.com <br />
          Copyright &copy;2019, Randy's Donuts. All Rights Reserved <br />
          (해당 웹 페이지는 교육용으로 제작되었습니다.)
        </p>
      </div>
      <div 
        className={`top_button 
          ${isFixed ? "" : "footer_fixed"}
          ${isVisible ? "show" :
            ""
          }
        `}
      >
        <button 
          type="button"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  )
}

export default Footer;