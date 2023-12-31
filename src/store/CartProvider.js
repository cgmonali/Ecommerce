import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  

  if (action.type ===  'ADD') { 
 
     
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems; 
      let updatedTotalAmount;
      if (existingCartItem) {
updatedTotalAmount=state.totalAmount;
         updatedItems=state.items;
        alert("The item is already added to the cart");

      }
      else{
         updatedItems = state.items.concat(action.item);
         updatedTotalAmount= state.totalAmount + action.item.price;

      }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    
      updatedItems = state.items.filter(item => item.id !== action.id);
     
    

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  
  
  

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
   
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    
    
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;