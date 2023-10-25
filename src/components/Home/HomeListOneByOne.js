import React from "react";
import classes from './HomeListOneByOne.module.css'
function HomeListOneByOne (props){



return (

<>

<div className={classes.touritem}>
                <span  className={classes.tourdate}>{props.tourdate}</span>
                <span className={classes.tourplace} >{props.tourplace}</span>
                <span className={classes.tourspecplace} >{props.tourspecplace}</span>
                <button className={classes.tourbuybtn}>BUY TICKETS</button>
              
            </div>


</>


);
}

export default HomeListOneByOne;