import './App.css';
import Navbarr from './components/header/Navbarr';
import Newnavv from './components/navigation/Newnavv';
import Maincomp from './components/maincomp/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import Cart2 from './components/cart/Cart2';

function App() {
  return (
    <>
      <Navbarr />
      <Newnavv />
      <Routes>
        <Route path='/' element={<Maincomp />} />
        <Route path='/login' element={<Sign_in />} />
        <Route path='/register' element={<Sign_up />} />
        <Route path='/getproductsone' element={<Cart />} />
        <Route path='/getproductsone2' element={<Cart2 />} />
        <Route path='/buynow' element={<Buynow />} />
      </Routes>
      <Footer />
      {/* <Sign_in />
      <Sign_up /> */}
    </>
  );
}

export default App;
