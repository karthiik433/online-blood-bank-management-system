import React,{useState} from "react";
import {useForm} from "react-hook-form";
import DeleteDonorEnd from "./endOfDeleteDonor";

function DeleteDonor (props) {

    console.log(props.username,"del");

     //const {register,handleSubmit} = useForm();
     let [message,setMessage] = useState(null);
     let [disable,setDisable] = useState(false);
     let [end,setEnd] = useState(false);
 
    const submit = ()=>{
     //let delfullName = data.fullName;
    // let delpassword  = data.password;
    //  if(delfullName ==="" || delpassword==="" ){
    //     document.getElementById("err").innerText = "Please Fill Above Details";
    //     document.getElementById("err").style.color = "red";
    //     return;
    //  }else{
    //      document.getElementById("err").innerText = "";
    //  }
    //    document.getElementById("delfullName1").value="";
    //   document.getElementById("delpassword1").value="";

      setDisable(true);

      var myHeaders = new Headers();
    myHeaders.append("x-username", "kartheek");
    myHeaders.append("x-password", "karthik433");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"fullName":props.username});

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
    setEnd(true);
      
    
        }
    return(

        <>
        {end ? <DeleteDonorEnd/>:
        
        <>
        <h1>Welcome {props.username}</h1>
        <h3>If you are sure to delete your details,You can do so by clicking on the delete button</h3>
        {/* <h2>Please Enter the details</h2>
        <label>Full Name:</label>
        <input type="text" id="delfullName1" name="fullName" placeholder="Please Enter Your Name" ref={register} ></input><br></br><br></br>
        <label>Password:</label>
        <input type="password" id="delpassword1" name="password" placeholder="Please Enter Password" ref={register} ></input><br></br><br></br> */}
        <h1 id="err"></h1>
        <button type="buttom" className="btn-success" onClick={submit} disabled={disable}>Delete</button>
        {message && <h2>{message.message},You can now refresh to see the changes</h2>}
        </>

        }
        </>
           
       
    );
}

export default DeleteDonor;