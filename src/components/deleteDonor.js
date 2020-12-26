import React,{useState} from "react";
import {useForm} from "react-hook-form";

function DeleteDonor () {

     const {register,handleSubmit} = useForm();
     let [message,setMessage] = useState(null);
     let [disable,setDisable] = useState(false);
 
    const submit = (data)=>{
     let delfullName = data.fullName;
     let delpassword  = data.password;
     if(delfullName ==="" || delpassword==="" ){
        document.getElementById("err").innerText = "Please Fill Above Details";
        document.getElementById("err").style.color = "red";
        return;
     }else{
         document.getElementById("err").innerText = "";
     }
       document.getElementById("delfullName1").value="";
      document.getElementById("delpassword1").value="";

      setDisable(true);

      var myHeaders = new Headers();
    myHeaders.append("x-username", "kartheek");
    myHeaders.append("x-password", "karthik433");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"fullName":delfullName,"password":delpassword});

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    credentials:"include"
        };

    fetch("http://localhost:9999/deleteDonor", requestOptions)
    .then(response => response.json())
    .then(result => setMessage(result))
    .catch(error => console.log('error', error));
       
        }
    return(
        <>
        <h1>Welcome</h1>
        <h2>Please Enter the details</h2>
        <label>Full Name:</label>
        <input type="text" id="delfullName1" name="fullName" placeholder="Please Enter Your Name" ref={register} ></input><br></br><br></br>
        <label>Password:</label>
        <input type="password" id="delpassword1" name="password" placeholder="Please Enter Password" ref={register} ></input><br></br><br></br>
        <h1 id="err"></h1>
        <button type="buttom" onClick={handleSubmit(submit)} disabled={disable}>Submit</button>
        {message && <h2>{message.message}</h2>}
        </>
    );
}

export default DeleteDonor;