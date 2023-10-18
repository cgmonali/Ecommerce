
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import classes from './DisplayProducts.module.css';
import CartContext from '../store/cart-context';
import { useState } from 'react';
import { useContext } from 'react';


const DisplayProducts = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
   const [clicked,setClicked]=useState(true);
   
   const addToCartHandler = (amount) => {
       setClicked(false);
     

        cartCtx.addItem({
          id: props.id,
          title: props.title,
          imageUrl: props.imageUrl,
          price: props.price,
          clicked: clicked ,// Updated remaining amount
        });
      };



  return (
    <div className={classes.eachcontainer}>
    <li >
      <div className={classes.eachitem} >  
        <h3>{props.title}</h3>
        <div className={classes.imagecontainer}>
        <img src={props.imageUrl} alt={props.title}  /></div>
        <div className={classes.productdetails}>
            <span>{price}</span>
            <Button  onClick={addToCartHandler} variant="primary">Add to Cart</Button> 
        </div>
        
      </div>
      
    </li>
   
    
    </div>
  );
};

export default DisplayProducts;








// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

// const DisplayProducts = (props) => {
 

//   return (
//     <div >
//     {/* <li >
//       <div>
//         <h3>{props.title}</h3>
//         <div >{props.price}</div>
//         <img src={props.imageUrl} alt={props.title} />
        
        
//       </div>
      
//     </li> */}
//     <Container fluid >
//     <Row xs={1} md={2} className="g-4"  >
        
//     <Card style={{ width: '18rem' }}>
//         <Card.Title>{props.title}</Card.Title>
//       <Card.Img variant="top" src={props.imageUrl} />
//       <Card.Body>
        
//         <Col> 
        
        


       
//     </Col>
//      </Card.Body>

//      <Container>

//      <Container className="text-start">
//        <h6>huu</h6>
//       </Container>

// <Container className="text-end">
//        <Button variant="primary">Add to Cart</Button> 
//       </Container>

// </Container>
     
//     </Card>
    
//     </Row>
    
//     </Container>
    
//     </div>
//   );
// };

// export default DisplayProducts;