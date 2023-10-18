
import Products from './components/Products';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import CartProvider from './store/CartProvider';
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
       <Header onShowCart={showCartHandler} />
    <Products/>

   


    </CartProvider>
  );
}

export default App;
