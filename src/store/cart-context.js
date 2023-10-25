import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item,email) => {},
  removeItem: (id,email) => {},
 
  
});

export default CartContext;