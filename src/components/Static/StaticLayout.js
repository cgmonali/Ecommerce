
import Products from './components/Products';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import CartProvider from './store/CartProvider';



function Main() {

  


  return (
    
    <CartProvider>
     
       <Header onShowCart={showCartHandler} />
   
    </CartProvider>

  );
}

export default Main;