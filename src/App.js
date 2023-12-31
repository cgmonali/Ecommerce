
import Products from './components/Products';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import CartProvider from './store/CartProvider';
import Main from './Main';
import About from './components/About/About';
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs';

import { createBrowserRouter,
  RouterProvider,
Route,
} from 'react-router-dom'



const router=createBrowserRouter([
{
  path:'/',
  element:<Main/> 
},
{
  path:'/About',
  element:<About/>
},
{
  path:'/Home',
  element:<Home/>
},
{
  path:'/Contact',
  element:<ContactUs/>
}



]);


function App() {




  return (
    <RouterProvider router={router} />

  );
}

export default App;
