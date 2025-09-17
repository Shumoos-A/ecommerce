
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';

const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Routes>
    <Route path='/product/:productId' element={<Product/>} />
    <Route path='/cart' element={<Cartt/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/place-order' element={<PlaceOrder/>} />
    <Route path='/orders' element={<Orders/>} />


    </Routes>
      
    </div>
   );
}

export default App;