import { Routes, Route } from 'react-router-dom';
import Main from './page/main/Main';
import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
