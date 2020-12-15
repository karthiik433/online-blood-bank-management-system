import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "./personal_info";
import SignUp from "./signup";


function App() {
    const [signup, setSignUp] = useState(false);
    const signUpHandler = () =>{
        setSignUp(true);
    }
    return (
        <div className="container">
            {signup ? 
            <PersonalInfo /> 
            : <SignUp signUpHandler={signUpHandler} />}
        </div>
    );
}


export default App;