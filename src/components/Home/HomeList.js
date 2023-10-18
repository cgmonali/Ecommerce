
import classes from './HomeList.module.css';
import HomeListOneByOne from './HomeListOneByOne';


const items=[{
    tourdate:"JUL16",
    tourplace:"DETROIT, MI",
    tourspecplace:"DTEENERGY MUSIC THEATRE",
},
{
    tourdate:"JUL26",
    tourplace:"TORONTO, MI",
    tourspecplace:"ONBUDWEISER STAGE", 
},

{
    tourdate:"JUL28",
    tourplace:"PHOENIX, MI",
    tourspecplace:"VA JIGGY LUBE LIVE",
},
{
    tourdate:"JUL29",
    tourplace:"LAS VAGAS, NV",
    tourspecplace:"AK-CHIN PAVILION",
},
{
    tourdate:"JUL30",
    tourplace:"CONCORD, MI",
    tourspecplace:"T-MOBILE ARENA",
}

 



]

function HomeList(){

const list=items.map((item)=>(
< HomeListOneByOne
 tourdate={item.tourdate}
 tourplace={item.tourplace}
 tourspecplace={item.tourspecplace}

/>
));


    return (
    
    <>   
     <div className={classes.tourheading}>TOURS</div>
            <div >
             {list}

            </div>
  
    </>
    
    
    );
    }
    
    export default HomeList;