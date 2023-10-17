import Button from 'react-bootstrap/Button';





const HeaderCartButton = (props) => {


  

  return (
   
      <Button onClick={props.onClick} variant="outline-info">
      <span>Your Cart</span>
      <sup>7</sup>
    </Button>
  );
};

export default HeaderCartButton;