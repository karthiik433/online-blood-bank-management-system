import React, { useEffect, useState } from "react";
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
//import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "./personal_info";
import SignUp from "./signup";
import HomePage from "./home page";
import BloodBankDetails from "./bloodBankDetails";
import EditDonor from "./EditDonor"
import DeleteDonor from "./deleteDonor";
import GetDonorDetails from "./getDonorDetails";
//import Dummy from "./dummy";


function App() {
    const [signup, setSignUp] = useState(false);
    const [error,setError] = useState(null);
    const [UserName,setUserName] = useState(undefined);
    let [donorOrNot,setDonor] = useState(undefined);

     const getUserName = ()=>{
         console.log(14);
         return fetch("http://localhost:9999/userInfo",{credentials:"include"})
         .then(r=>{
             console.log(10);
             if(r.ok){
                 return r.json();
             }else{
                 setSignUp(false);
                 setUserName(false);
                 return {success : false}
             }
         }).then(r=>{
             console.log(11);
             if(r.success !==false){
                 console.log(r);
                 setDonor(r.donor);
                 setSignUp(true);
                 setUserName(r.userName);
             }
         });
     }
     
     useEffect(()=>{
         console.log(12);
         getUserName();
     },[]);

    const signUpHandler = (userName,password) =>{
        loginOrSignUp("http://localhost:9999/signup",userName,password);
        console.log(userName,password,"app1");
    }
    const loginHandler = (userName,password)=>{
        loginOrSignUp("http://localhost:9999/login",userName,password);
         console.log(userName,password,"app2");
    }

    const logoutHandler = ()=>{
        return fetch("http://localhost:9999/logout",{credentials:"include"})
        .then(r=>{
            if(r.ok){
                setSignUp(false);
                setUserName(undefined);
            }
        })
    }

     const loginOrSignUp =(url,userName,password)=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"userName":userName,"password":password});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
          credentials:"include" //for diferent hosts
          //credential:"same-origin" //for same hosts of back and front
        };
        
        fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
              if(result.success === "Logged in successfully" ){
                console.log(result.donor,"from app");
                setDonor(result.donor);
               return getUserName();
                // setSignUp(true);
              }else if(result.Success ==="Signed Up Successfully"){
                setDonor(false);
                return getUserName();
                
              }else{
                setError(result.error);
              }
          })
          .catch(error => console.log('error', error));
     }

    return (
        <BrowserRouter>
        {/* </BrowserRouter><div className="container-fluid"> */}

            {/* <div>
                sjdflkdf;jgldvjdcjv
            </div>
            <div>
                ssfhdsfhkjhbf
            </div> */}

        {signup?<HomePage UserName={UserName} logoutHandler={logoutHandler} donorOrNot={donorOrNot}/>:<SignUp signUpHandler={signUpHandler} loginHandler={loginHandler} error={error}  />}
        
        {/* <ul>
                <li>
                <Link to="/signUp">SignUp</Link>
                </li>
                <li>
                <Link to="/homePage">Home Page</Link>
                </li>
                <li>
                <Link to="/form">Form for Donor</Link>
                </li>
            </ul> */}
            {/* <Switch>
                <Route exact path="/" ><HomePage/></Route>
                <Route exact path="/homePage" ><HomePage/></Route>
                <Route exact path="/form" ><PersonalInfo/></Route>
            </Switch> */}
          
            
        
        </BrowserRouter>
    );
}


export default App;

          


              