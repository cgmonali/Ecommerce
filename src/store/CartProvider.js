import React from "react";
import { useReducer,useContext } from 'react';
import AuthContext from './auth-context';
import CartContext from './cart-context';


const defaultCartState = {
  items: [],
  totalAmount: 0,
}; 

let id='';


 async function fetchDataHandler(email,itemId){
     
      const response=await  fetch(`https://crudcrud.com/api/f72585721f1346a88de6fd12990afa7d/${email}`);
      const data= await response.json();
     console.log(data[0]._id)
     if(data.length>0)
     {
      for(let i=0;i<data.length;i++)
      {
         if(data[i].item.id==itemId){
           id=data[i]._id;
           break;
         }
      }
     }
     }


     const removeItemFromCart  = async (email, itemId) => {

    
      try{
           await fetchDataHandler(email, itemId);

if(id){
    await fetch(`https://crudcrud.com/api/f72585721f1346a88de6fd12990afa7d/${email}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
      console.log("successfully removed")
    }else {
        
          console.error('Error removing item from cart');
        }
      }
      catch(error)  {
        console.error('Network error:', error);
      }
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


         fetch(`https://crudcrud.com/api/f72585721f1346a88de6fd12990afa7d/${action.email}`, {
          method: 'POST',
          body: JSON.stringify({ item: action.item}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      




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
     const sanitizedEmail=action.email.replace(/[@.]/g, "");
  
      removeItemFromCart(sanitizedEmail,action.id);

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
 const authCtx = useContext(AuthContext);

  const addItemToCartHandler = (item,email) => {
    dispatchCartAction({ type: 'ADD', item: item,email: email});
   
console.log(email);


    
  };

  const removeItemFromCartHandler = (id,email) => {
    dispatchCartAction({ type: 'REMOVE', id: id,email:email });
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