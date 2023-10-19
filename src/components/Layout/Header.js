import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'

import { Outlet } from 'react-router-dom';
const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const num=cartCtx.items.length;


  return (
    <Fragment>
      <header>
      
      <div  className={classes.header}>
         <div  className={classes.list} >
          <NavLink  to="/Home"   
          
          className={({isActive})=>
          isActive?classes.active:undefined
          }
        
          >HOME</NavLink>
          
          <NavLink  
          to="/" 
          className={({isActive})=>
        isActive?classes.active:undefined
        }
        end
        >STORE</NavLink>

          <NavLink   to="/About" 
          className={({isActive})=>
          isActive?classes.active:undefined
          }
          >ABOUT</NavLink>


<NavLink   to="/Contact" 
          className={({isActive})=>
          isActive?classes.active:undefined
          }
          >Contact Us</NavLink>
</div>
<div className={classes.cartIcon}>
          <div  className="justify-content-end">
        
          <HeaderCartButton onClick={props.onShowCart} />
          <sup>{num}</sup>
        </div>

</div>
          
        
      </div>
    
        
    <div bg="light" className={classes.navheightlight} > </div>
    <div bg="secondary" className={classes.navheightgrey}>
    The Generics</div>




      </header>
      <Outlet/>
    </Fragment>
  );
};

export default Header;