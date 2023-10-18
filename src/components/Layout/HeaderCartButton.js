import Button from 'react-bootstrap/Button';

import classes from './HeaderCartButton.module.css';




const HeaderCartButton = (props) => {

  return (
   
      <Button onClick={props.onClick} variant="outline-info">
      <span>Your Cart</span>
     
    </Button>
  );
};

export default HeaderCartButton;