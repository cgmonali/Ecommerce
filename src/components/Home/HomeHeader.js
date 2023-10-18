import classes from './HomeHeader.module.css'
function HomeHeader (){



return (

<>
<div className={classes.homeContainer} > 
    <div className={classes.albumHeading}>
        Get our Latest Album
    </div>
    <div className={classes.playbutton}  >
    <div className={classes.playbuttoncircle} >
        <div  className={classes.playbuttontriangle} ></div>
    </div>
</div>
</div>

</>


);
}

export default HomeHeader;