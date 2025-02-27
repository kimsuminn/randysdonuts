import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import Main from './page/main/Main';
import Brand from './page/brand/Brand';
import Menu from './page/menu/Menu';
import PopCulture from './page/popculture/PopCulture';
import './style/App.css';

function App() {
  const { hamOpen } = useSelector((state :RootState) => state.header);

  return (
    <div className={hamOpen ? "App on" : "App"}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/menu/best' element={<Menu />} />
        <Route path='/menu/classic' element={<Menu />} />
        <Route path='/menu/deluxe' element={<Menu />} />
        <Route path='/menu/fancy' element={<Menu />} />
        <Route path='/menu/premium' element={<Menu />} />
        <Route path='/popculture' element={<PopCulture />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
