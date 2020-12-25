import React, { useState } from "react";
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
    const signUpHandler = () =>{
        setSignUp(true);
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

        {signup?<HomePage/>:<SignUp signUpHandler={signUpHandler} />}
        
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

          


              