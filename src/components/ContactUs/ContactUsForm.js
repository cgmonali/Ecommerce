import React from "react";
import Header from "../Layout/Header";
import classes from "./ContactUsForm.module.css";
import { useRef } from "react";

function ContactUsForm (){

    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

function submitHandler(event){
    event.preventDefault();

const contactInfo={
    name:nameRef.current.value,
    email:emailRef.current.value,
    number:numberRef.current.value,

}

console.log(contactInfo);
addMovieHandler(contactInfo);

nameRef.current.value='';
emailRef.current.value='';
numberRef.current.value='';

}
 


async function addMovieHandler(contactInfo) {
    const response = await fetch('https://react-movielist-7c0ee-default-rtdb.firebaseio.com/contactlist.json', {
      method: 'POST',
      body: JSON.stringify(contactInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }








    return (
    <>
    <section className={classes.formcontainer}>
 <form action="" onSubmit={submitHandler}>
   <div className={classes.inputholder}>
<div >Enter name</div>
<input type="text" name="" id="name" ref={nameRef} className={classes.inputname}  placeholder="enter your name"/></div> 

<div className={classes.inputholder}>
<div >Enter emailid</div>
<input type="email" name="" id="mailid" ref={emailRef}  className={classes.inputemail}  placeholder="enter your email Id"/></div>

<div  className={classes.inputholder}>
<div >Enter phone number</div>
<input type="number" name="" id="Phnumber" ref={numberRef} className={classes.inputnumber} placeholder="enter your phone number" /></div>
<div   className={classes.inputholder}>
<button className={classes.contactbtn}>submit</button>
</div> </form>
 </section>
    </>   
    
    );
    }
    
    export default ContactUsForm;