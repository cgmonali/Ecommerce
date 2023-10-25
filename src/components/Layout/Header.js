import React from "react";
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import {NavLink,useLocation} from 'react-router-dom'
import AuthContext from '../../store/auth-context';

import { Outlet } from 'react-router-dom';
const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const num=cartCtx.items.length;
  const authCtx = useContext(AuthContext);
  function logoutHandler(){
    authCtx.logout();
  }


  const location = useLocation();
  return (
    <Fragment>
      <header>
      
      <div  className={classes.header}>
         <div  className={classes.list} >
         <NavLink to="/Home" className={window.location.pathname === '/Home' ? classes.active : undefined}>
  HOME
</NavLink>

<NavLink to="/Store" className={window.location.pathname === '/Store' ? classes.active : undefined}>
  STORE
</NavLink>

<NavLink to="/About" className={window.location.pathname === '/About' ? classes.active : undefined}>
  ABOUT
</NavLink>

<NavLink to="/Contact" className={window.location.pathname === '/Contact' ? classes.active : undefined}>
  Contact Us
</NavLink>

<NavLink to="/" onClick={logoutHandler} >
 Logout
</NavLink>



</div>{location.pathname === '/Store' && (
<div className={classes.cartIcon}>
          <div  className="justify-content-end">
        
          <HeaderCartButton onClick={props.onShowCart} />
          <sup>{num}</sup>
        </div>

</div>)}
          
        
      </div>
    
        
    <div bg="light" className={classes.navheightlight} > </div>
    <div bg="secondary" className={classes.navheightgrey}>
    The Generics</div>




      </header>
     
    </Fragment>
  );
};

export default Header;