import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <h2 className="logo"><img src="./img/layout/logo.png" alt="logo" /></h2>
        <p>
          서울특별시 마포구 동교로 247 4층, 5층 <br />
          사업자등록번호: 565-87-01114 <br />
          대표 번호: 02-6954-0621 <br />
          대표 메일: randysdonuts@rapport-l.com <br />
          Copyright &copy;2019, Randy's Donuts. All Rights Reserved <br />
          (해당 웹 페이지는 교육용으로 제작되었습니다.)
        </p>
      </div>
    </footer>
  )
}

export default Footer;