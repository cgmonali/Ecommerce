import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
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