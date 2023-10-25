import React from "react";
import DisplayProducts from './DisplayProducts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './Product.module.css';

const productsArr = [
  {
    id:"a1",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:"a2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:"a3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  { 
    id:"a4",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];





function Products() {

    // const [itemCount, setItemCount] = useState(DUMMY_MEALS.length);

    // const addMealHandler = (newMeal) => {
    //   // Add the new meal to the DUMMY_MEALS array
    //   DUMMY_MEALS.push(newMeal);
  
    //   // Increment the mealsCount to generate a unique ID for the next meal
    //   setMealsCount((prevCount) => prevCount + 1);
    // };


  const productList = productsArr.map((list) => (
    
      < DisplayProducts
      id={list.id}
        title={list.title}
        price={list.price}
        imageUrl={list.imageUrl}
      />
    
  ));

  return (
    <div className={classes.productContainer}>
      <h2>MUSIC</h2>
      <section className={classes.productContent}>
        <Row xs={2} md={2} lg={2} className={classes.productRow}>
          {productList}
<<<<<<< HEAD
          
=======
>>>>>>> 32c7806 (Adding Login to Ecommerce,Protecting the product page,Making the cart user specific)
        </Row>
      </section>
    </div>
  );
}

export default Products;














// import DisplayProducts from './DisplayProducts';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// const productsArr = [
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   },
// ];

// function Products() {
//   const productList = productsArr.map((list, index) => (
//     <Col key={index} xs={4} md={10} lg={3} className="g-5">
//       <DisplayProducts
//         title={list.title}
//         price={list.price}
//         imageUrl={list.imageUrl}
//       />
//     </Col>
//   ));

//   return (
//     <section>
//       <Row>{productList}</Row>
//     </section>
//   );
// }

// export default Products;
