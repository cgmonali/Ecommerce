import React from "react";
import { useState ,useContext} from 'react';
import './App.css';
import CartProvider from './store/CartProvider';
import Main from './Main';
import About from './components/About/About';
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login"
import { createBrowserRouter,
  RouterProvider,

Routes,
BrowserRouter as Router,

} from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage';
import AuthContext from './store/auth-context';


// const router=createBrowserRouter([
// {
//   path:'/',
//   element:<Main/> 
// },
// {
//   path:'/About',
//   element:<About/>
// },
// {
//   path:'/Home',
//   element:<Home/>
// },
// {
//   path:'/Contact',
//   element:<ContactUs/>
// }



// ]);


function App() {


  const authCtx = useContext(AuthContext);

  return (
    // <RouterProvider router={router} />
    <Router>
   <Switch>
 
   {authCtx.isLoggedIn &&
      (<Route path="/Store"  component={Main } />)}
      {authCtx.isLoggedIn &&
      (<Route path="/About" component={About } /> )}
      {authCtx.isLoggedIn &&
        (<Route path="/Home" component={Home } /> )}
        {authCtx.isLoggedIn &&
          ( <Route path="/Contact" component={ContactUs } /> )}
          {authCtx.isLoggedIn &&
            (<Route path="/Product/:productId/:imageUrl" component={ProductPage } /> )}
      <Route path="/" exact component={Login } />
   </Switch>
  </Router>
  );
}

export default App;
