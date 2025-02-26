import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import Main from './page/main/Main';
import Brand from './page/brand/Brand';
import News from './page/brand/News';
import './style/App.css';

function App() {
  const { hamOpen } = useSelector((state :RootState) => state.header);

  return (
    <div className={hamOpen ? "App on" : "App"}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/brand/news' element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
