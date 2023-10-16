

const DisplayProducts = (props) => {
 

  return (
    <div >
    <li >
      <div>
        <h3>{props.title}</h3>
        <div >{props.price}</div>
        <div >{props.imageUrl}
        </div>
        
        
      </div>
      
    </li></div>
  );
};

export default DisplayProducts;