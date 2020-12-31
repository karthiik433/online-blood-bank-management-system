import React,{useState} from "react";
import "./../styles/signup.css";
//import {useForm} from "react-hook-useform";
import {useForm} from "react-hook-form";

function SignUp(props){

    let [userName,setUserName] =useState("");
    let [password,setPassword] = useState("");

    const {register,handleSubmit} = useForm();

    const login =(data)=>{
        if(data.userName ==="" || data.password ===""){
            document.getElementById("err").innerText="Please Enter valid details";
            document.getElementById("err").style.color="yellow";
            return;
        }
        props.loginHandler(data.userName,data.password);
        document.getElementById("firstName").value="";
        document.getElementById("password").value="";
    }
    const signUp = (data)=>{
        if(data.userName ==="" || data.password ===""){
            document.getElementById("err").innerText="Please Enter valid details";
            document.getElementById("err").style.color="yellow";
            return;
        }
        props.signUpHandler(data.userName,data.password);
        document.getElementById("password").value="";
        document.getElementById("firstName").value="";
    }
    if(props.error !==null){
        document.getElementById("err").innerText=props.error;
        document.getElementById("err").style.color = "yellow";
    }

    return(
        <div className="page">
        <h1>A single pint can save three lives, a single gesture can create a million smiles</h1>
        <form className="signUpForm">
            <input type="text"className="inputSignUp" placeholder="Full Name" name="userName" id="firstName"  ref={register} ></input>
            {/* <input type="text" placeholder="Last Name" className="rightSideInputs" id="lastName" ></input> */}
            {/* <input type="email" placeholder="Your Mail" id="mail" ></input> */}
            
            <input type ="password"  placeholder="Enter Password" name="password" className="rightSideInputs inputSignUp"  id="password" ref={register}></input>
            <h4 id="err"></h4>
            <button type="button"className="btn btn-success" id="logIn" onClick={handleSubmit(login)}><b>Log In</b></button>
            <button type="button" className="btn btn-warning" id="signUp" onClick={handleSubmit(signUp)}><b>Sign Up</b></button>
        </form>
        </div>
    );
}

export default SignUp;


//onChange={(e)=>setUserName(e.target.value)}
//onChange={(e)=>setPassword(e.target.value)}