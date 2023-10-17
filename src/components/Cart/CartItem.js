import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './CartItem.module.css';

const CartItem = (props) => {
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
          <button className={classes.removebtn}>REMOVE</button></span>
          
        </div>
     
      
    </li>
   

</>


  );
};

export default CartItem;