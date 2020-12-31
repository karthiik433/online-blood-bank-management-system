import React from "react";
import "./../styles/donorEnd.css";



function EndOfRegister (){

    const sumbit = ()=>{
        window.location.href="http://localhost:8080";
    }
    
    return(
        <>
        <h1 className="endDonor">Registration Done Successfully</h1>
        <button type="button" className="dbtn btn-warning" onClick={sumbit}>Click here to get back to home page</button>
        </>
    );
}


export default EndOfRegister;