

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

// const cartElements = [

//     {   
//     title: 'Colors',   
//     price: 100,   
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
//     quantity: 2, 
//     },
    
//     { 
//     title: 'Black and white Colors', 
//     price: 50,  
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
//     quantity: 3, 
//     },
    
//     {  
//     title: 'Yellow and Black Colors',  
//     price: 70,  
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//     quantity: 1,   
//     }];




const Cart = (props) => {
  
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const noOfItems= cartCtx.items.length;
  const hasItems = cartCtx.items.length > 0;
 const quantity=1;


 const cartItemRemoveHandler = (id) => {
  cartCtx.removeItem(id);
};



  const cartItems = (
    <ul className={classes.listingItem}>
      {cartCtx.items.map((item) => (
        <CartItem  
        key={item.id}
        id={item.id}
        title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
        <button className={classes.Xclosebtn} onClick={props.onClose}>X</button>
     <div className={classes.cartItems}>{cartItems}</div> 
      <div >
        <span>Total Amount:{totalAmount}</span>
        <span>{noOfItems}</span>
      </div>
      <div>
        
        <button className={classes.purchasebtn}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;