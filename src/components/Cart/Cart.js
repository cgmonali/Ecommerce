

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const cartElements = [

    {   
    title: 'Colors',   
    price: 100,   
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
    quantity: 2, 
    },
    
    { 
    title: 'Black and white Colors', 
    price: 50,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
    quantity: 3, 
    },
    
    {  
    title: 'Yellow and Black Colors',  
    price: 70,  
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,   
    }]




const Cart = (props) => {
  

  const cartItems = (
    <ul className={classes.listingItem}>
      {cartElements.map((item) => (
        <CartItem  
        title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
        <button className={classes.Xclosebtn} onClick={props.onClose}>X</button>
     <div className={classes.cartItems}>{cartItems}</div> 
      <div >
        <span>Total Amount</span>
        <span>7</span>
      </div>
      <div>
        
        <button className={classes.purchasebtn}>Purchase</button>
      </div>
    </Modal>
  );
};

export default Cart;