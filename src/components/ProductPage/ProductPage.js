import React from "react";
import classes from "./ProductPage.module.css"
import Header from "../Layout/Header";
import CartContext from '../../store/cart-context';
import { useParams } from "react-router-dom";
import { useContext } from "react";

function ProductPage (){
    const params=useParams();
    const carCtx=useContext(CartContext);
    let info;

    const existingCartItemIndex = carCtx.items.findIndex(
      (item) => item.id === params.productId
    );
    
    const existingCartItem = carCtx.items[existingCartItemIndex];



  

    return (
    
    <>
    <Header/>
<div  className={classes.imagecontainer}>
    
      <img src={decodeURIComponent(params.imageUrl)} alt="Product" className={classes.zoomimage} />
    </div>
    <button className={classes.btn}>see reviews</button>
    
    </>
    
    
    );
    }
    
    export default ProductPage;