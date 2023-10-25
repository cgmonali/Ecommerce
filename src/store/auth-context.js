import React, { useState,useEffect } from 'react';
import CartContext from '../store/cart-context';

import { useContext } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token,email) => {},
  logout: () => {},
  email:"",

});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email,setEmail] =useState(null);
  const cartCtx = useContext(CartContext);
  const userIsLoggedIn = !!token;

  const loginHandler = (token,emailId) => {
    setToken(token);

    const sanitizedEmail = emailId.replace(/[@.]/g, "");

    setEmail(sanitizedEmail);


  };


  const logoutHandler = () => {
    setToken(null);
  };
  



  

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email:email,

  };



  

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;