import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const CartItem = (props) => {

  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;





  return (
    <>
    <li >
      <div className={classes.eachItem}>
       
      <span className={classes.imgnTitle}>
        <img className={classes.imageclass} src={props.imageUrl} alt={props.title} />
          <h6>{props.title}</h6> </span>
          <span >{price}</span>
          
          <span className={classes.quantitynremove}>x {props.quantity}
          <button  onClick={props.onRemove} className={classes.removebtn}>REMOVE</button></span>
          
        </div>
     
      
    </li>
   

</>


  );
};

export default CartItem;