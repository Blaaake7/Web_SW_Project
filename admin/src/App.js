import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './pages/Product';
import Reservation from './pages/Reservation';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Service from './pages/Service/Service';
import ServiceCreate from './pages/Service/ServiceCreate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service/create' element={<ServiceCreate />} />
          <Route path='/product' element={<Product />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
