import Slide from "./components/Slide";
import StoreLocation from "./components/StoreLocation";
import Title from "./components/Title";
import "./style/Store.css";

export interface StoreListType {
  id: number,
  title: string,
  address: string,
  time: string,
  number: string,
  park: string,
  map: string
}

const storeList :StoreListType[] = [
  { 
    id: 1,
    title: '/img/store/store_title_1.png',
    address: '제주도 제주시 애월읍 애월리 2471',
    time: 'Mon to Sun / AM 10:00 - PM 19:00',
    number: '064-799-0610',
    park: '가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5435998705793!2d126.30905777615828!3d33.461195348707236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cf5c091239a6f%3A0xe541362bdb8affe1!2z656c65SU7Iqk64-E64SbIOygnOyjvOyVoOyblOygkA!5e0!3m2!1sko!2skr!4v1740903821819!5m2!1sko!2skr'
  },
  { 
    id: 2,
    title: '/img/store/store_title_2.png',
    address: '서울특별시 마포구 동교로 247',
    time: 'Mon to Sun / AM 11:00 - PM 21:00',
    number: '02-322-0621',
    park: '불가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.705686217878!2d126.92194485086183!3d37.56199733204665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98e8dc3e4fd1%3A0xd8f02759ee64d05a!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDsl7Drgqjrj5kg64-Z6rWQ66GcIDI0Nw!5e0!3m2!1sko!2skr!4v1594973230247!5m2!1sko!2skr'
  },
  { 
    id: 3,
    title: '/img/store/store_title_3.png',
    address: '대구광역시 중구 공평동 동서로6길 56',
    time: 'Mon to Sun / AM 11:00 - PM 21:00',
    number: '053-255-1222',
    park: '불가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.2074884780927!2d128.5957782762376!3d35.868431819667144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e335bcc0281b%3A0x8d9ab5db3ed3ff50!2z656c65SU7Iqk64-E64SbIOuMgOq1rOuPmeyEseuhnOygkA!5e0!3m2!1sko!2skr!4v1740904118874!5m2!1sko!2skr'
  },
  { 
    id: 4,
    title: '/img/store/store_title_4.png',
    address: '서울특별시 강남구 도산대로 15길 16',
    time: 'Mon to Sun / AM 11:30 - PM 21:00',
    number: '02-511-3255',
    park: '불가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.516496224659!2d127.02142047629512!3d37.519320326833366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca326f19b6c7b%3A0xf8b7fa907a862c89!2z656c65SU7Iqk64-E64SbIOqwgOuhnOyImOq4uOygkA!5e0!3m2!1sko!2skr!4v1740904222249!5m2!1sko!2skr'
  },
  { 
    id: 5,
    title: '/img/store/store_title_5.png',
    address: '부산광역시 수영구 수영로 510번길 58',
    time: 'Mon to Sun / AM 11:00 - PM 21:00',
    number: '051-757-0621',
    park: '불가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.245575410809!2d129.1118307762134!3d35.15049575894549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ed332419cc61%3A0xca46e231119e8f01!2z656c65SU7Iqk64-E64SbIOq0keyViOumrOygkA!5e0!3m2!1sko!2skr!4v1740904301624!5m2!1sko!2skr'
  },
  { 
    id: 6,
    title: '/img/store/store_title_6.png',
    address: '경기도 수원시 권선구 세화로 134\n타임빌라스 수원 3F',
    time: 'Mon to Sun / AM 10:30 - PM 22:00',
    number: '031-8066-1808',
    park: '가능',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3056805061574!2d126.9945338762861!3d37.26417784140728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b43001b27eb43%3A0x5771b40223a586aa!2z656c65SU7Iqk64-E64SbIO2DgOyehOu5jOudvOyKpCDsiJjsm5DsoJA!5e0!3m2!1sko!2skr!4v1740904381856!5m2!1sko!2skr'
  }
]

function Store() {
  return (
    <div className="store">
      <Title />
      <div className="wrap">
        {
          storeList.map(item => (
            <StoreLocation key={item.id} item={item} />
          ))
        }
      </div>
      <div className="slide">
        <Slide />
      </div>
    </div>
  )
}

export default Store;
