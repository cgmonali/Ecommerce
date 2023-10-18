import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const num=cartCtx.items.length;


  return (
    <Fragment>
      <header>
      
      <Navbar bg="dark" variant='dark' fixed="top">
         <Container className="justify-content-center" >
          <Navbar.Brand  className={classes.customBrand} href="#">HOME</Navbar.Brand>
          <Navbar.Brand  className={classes.customBrand} href="#">STORE</Navbar.Brand>
          <Navbar.Brand  className={classes.customBrand}  href="#">ABOUT</Navbar.Brand>
</Container>
          <Navbar.Brand  className="justify-content-end">
        
          <HeaderCartButton onClick={props.onShowCart} />
          <sup>{num}</sup>
        </Navbar.Brand>


          
        
      </Navbar>
    
        
    <Navbar bg="light" className={classes.navheightlight} > </Navbar>
    <Navbar bg="secondary" className={classes.navheightgrey}>
    The Generics</Navbar>




      </header>
      
    </Fragment>
  );
};

export default Header;