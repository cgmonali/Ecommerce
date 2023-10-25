import { useState, useRef, useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
import classes from './Login.module.css';

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };









  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
   
  async function fetchDataHandler(){
    const sanitizedEmail = enteredEmail.replace( /[@.]/g, "");
    const response=await  fetch(`https://crudcrud.com/api/f72585721f1346a88de6fd12990afa7d/${sanitizedEmail}`);
    const data= await response.json();

    if(data.length>0)
   {
    for(let i=0;i<data.length;i++)
    cartCtx.addItem({
        id: data[i].item.id,
        title: data[i].item.title,
        imageUrl: data[i].item.imageUrl,
        price: data[i].item.price,
        clicked: data[i].item.clicked ,
      },sanitizedEmail);

   }
   
  
   
   }


    // optional: Add validation
let url;
    if (isLogin) {

      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc2mNmAldehMQis6cvocpiRREqk-uo3_Q';
    } else {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc2mNmAldehMQis6cvocpiRREqk-uo3_Q'
    }
      
    
    fetch(
  url
        ,
        {

          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        
        }

        
      ).then((res) => {
      setIsLoading(false);
        if (res.ok) {
            fetchDataHandler();
          return res.json(); // ...
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken,data.email);
       

      

        console.log(authCtx.token);
        history.replace('/Store');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    < section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
         { isLoading && <h1>loading..........</h1>}
        </div>
      </form>
    </section>
  );
};

export default Login;