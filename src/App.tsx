import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Main from './page/main/Main';
import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import './style/App.css';

function App() {
  const { hamOpen } = useSelector((state :RootState) => state.header);

  return (
    <div className={hamOpen ? "App on" : "App"}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
