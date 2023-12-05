import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Product from './pages/Product';
import Reservation from './pages/Reservation';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Directions from './pages/Directions/Directions';
import Service from './pages/Service/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/directions' element={<Directions />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
