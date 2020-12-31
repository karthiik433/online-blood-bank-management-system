import React from "react";


function DeleteDonorEnd (){
     
    const submit = ()=>{

        window.location.href="http://localhost:8080"
    }

    return(
      <>
        <h1>Deleted Successfully</h1>
        <button type="button" onClick={submit}>click here to exit to home Page</button>
        </>
    );
}


export default DeleteDonorEnd;