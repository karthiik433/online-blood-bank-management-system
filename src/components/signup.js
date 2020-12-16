import React,{useState} from "react";
import "./../styles/signup.css";

function SignUp(props){
    return(
        <div className="page">
        <h1>A single pint can save three lives, a single gesture can create a million smiles</h1>
        <form className="signUpForm">
            <input type="text" placeholder="First Name" id="firstName" ></input>
            <input type="text" placeholder="Last Name" className="rightSideInputs" id="lastName" ></input>
            <input type="email" placeholder="Your Mail" id="mail" ></input>
            <input type ="text" placeholder="Set Password" className="rightSideInputs" id="password"></input>
            <button type="button"className="btn btn-success" id="logIn" onClick={props.signUpHandler}><b>Log In</b></button>
            <button type="button" className="btn btn-warning" id="signUp" ><b>Sign Up</b></button>
        </form>
        </div>
    );
}

export default SignUp;