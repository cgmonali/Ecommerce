import React from "react";
import { FaFacebook, FaSpotify, FaYoutube } from 'react-icons/fa';
import classes from './Footer.module.css';


function Footer(){

    return (

<>

<div className={classes.footerContainer}>
    <div className={classes.footertitle} >The Generics</div>
   <div  className={classes.footericon} >

   
      <a href="https://www.facebook.com/your-facebook-url">
        <FaFacebook size={40} />
      </a>
      <a href="https://open.spotify.com/user/your-spotify-username">
        <FaSpotify size={40} />
      </a>
      <a href="https://www.youtube.com/user/your-youtube-channel">
        <FaYoutube size={40} />
      </a>
    



   </div>

</div>
</>

    );
}

export default Footer;