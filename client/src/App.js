import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Directions from './pages/Directions/Directions';
import Service from './pages/Service/Service';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Reservation from './pages/Reservation/Reservation';
import Board from './pages/Board/Board';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';

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
          <Route path='/service/:id' element={<ServiceDetail />} />

          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />

          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/reserve' element={<Reservation />} />
          <Route path='/board' element={<Board />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
