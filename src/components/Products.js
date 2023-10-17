import DisplayProducts from './DisplayProducts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './Product.module.css';
const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function Products() {
  const productList = productsArr.map((list) => (
    
      <DisplayProducts
        title={list.title}
        price={list.price}
        imageUrl={list.imageUrl}
      />
    
  ));

  return (
    <div className={classes.container}>
      <h2>MUSIC</h2>
      <section className={classes.content}>
        <Row xs={2} md={2} lg={2} className={classes.productRow}>
          {productList}
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
