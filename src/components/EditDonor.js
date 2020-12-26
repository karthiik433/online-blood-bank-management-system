import React,{useState} from "react";
import { Redirect } from "react-router";
import {useForm} from "react-hook-form";



function EditDonor (){

   let [displayDetails,setDisplayDetails] = useState(null);
   const {register,handleSubmit} = useForm();

    //setFullName("karth");
    

    const sumbit =(data)=>{
        const fullName = document.getElementById("fullName").value;
        const password = document.getElementById("password").value;
        if(fullName.trim() ==="" || password.trim() ==="" ){
            document.getElementById("error").innerText="Please Enter fullName or Password";
            document.getElementById("error").style.color="red";
            return;
        }else{
            document.getElementById("error").innerText="";
        }
       
        document.getElementById("fullName").value = "";
        document.getElementById("password").value = "";
        document.getElementById("newName").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("district").value = "";
        document.getElementById("address").value = "";
        const button = document.getElementById("button");
        button.setAttribute("disabled",true);
        //console.log(fullName1,password1);
        
        var myHeaders = new Headers();
           
        myHeaders.append("x-username", "kartheek");
        myHeaders.append("x-password", "karthik433");
        myHeaders.append("Content-Type", "application/json");

       var raw = JSON.stringify({"fullName":data.fullName,"password":data.password,"newName":data.newName,"newpassword":data.newPassword,"mobile":Number(data.mobile),"alternateMobile":Number(data.alternate),"email":data.email,"district":data.district,"address":data.address});

       var requestOptions = {
       method: 'PUT',
       headers: myHeaders,
       body: raw,
       redirect: 'follow',
       credentials:"include"
         };

      fetch("http://localhost:9999/updateDonorDetails", requestOptions)
      .then(response => response.json())
      .then(result => setDisplayDetails(result))
      .catch(error => console.log('error:', error.message));

    }

    return(
     <>
     <h1>Welcome</h1>
     <p>Edit Your Details</p>
     <form>
         <label for="fullName">Enter Full Name:</label>
         <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" ref={register} required></input><br></br><br></br>
         <label for="password" >Enter password:</label>
         <input type="password" id="password" name="password" placeholder="Please Enter Your Password" ref={register} required></input><br></br><br></br>
         <label for="newName">Enter New Name:</label>
         <input type="text" id="newName" name="newName" placeholder="Enter new Name" ref={register} ></input><br></br><br></br>
         <label for="newPassword">Enter New password:</label>
         <input type="password" id="newPassword" name="newPassword" placeholder="Enter new Password" ref={register}></input><br></br><br></br>
         <label for="mobile">Enter New Mobile Number:</label>
         <input type="number" id="mobile" name="mobile" placeholder="Enter new Mobile Number" ref={register}></input><br></br><br></br>
         <label>new Alternate Mobile:</label>
         <input type="number" name="alternate" placeholder="Enter new Alternate Mobile" ref={register}></input><br></br><br></br>
         <label for="email">Enter New Email ID:</label>
         <input type="email" id="email" name="email" placeholder="Enter new Email Id" ref={register}></input><br></br><br></br>
         <label for="district">Select District:</label>
         <select id="district" name="district" ref={register}>
         <option value="">Select District</option>
                <option value="Anantapur">Anantapur</option>
                <option value="Chittoor">Chittoor</option>
                <option value="East Godavari">East Godavari</option>
                <option value="Guntur">Guntur</option>
                <option value="Kadapa">Kadapa</option>
                <option value="Krishna">Krishna</option>
                <option value="Kurnool">Kurnool</option>
                <option value="Nellore">Nellore</option>
                <option value="Prakasham">Prakasham</option>
                <option value="Srikakulam">Srikakulam</option>
                <option value="Vishakapatnam">Vishakapatnam</option>
                <option value="Vizianagaram">Vizianagaram</option>
                <option value="West Godavari">West Godavari</option>
         </select><br></br><br></br>
         <label for="address">Enter New Address:</label>
         <input type="text" id="address" name="address" placeholder="Enter new Address" ref={register}></input><br></br><br></br>
         <h4 id="error"></h4>
         <button type="button" id="button" onClick={handleSubmit(sumbit)} disabled={false}>Submit</button>
     </form>
     

    {displayDetails?
    <>
    {displayDetails.message?<p>message:{displayDetails.message}</p>:
    <>
    <h3>Updated Details:</h3>
    <p>fullName:{displayDetails.fullName}</p>
    <p>password::{displayDetails.password}</p>
    <p>mobile:{displayDetails.mobile}</p>
    <p>alternateMobile:{displayDetails.alternateMobile}</p>
    <p>email:{displayDetails.email}</p>
    <p>district:{displayDetails.district}</p>
    <p>address:{displayDetails.address}</p>
    </>
    }
    </>:<h2>Please Update details</h2>}

     </>
     
    );
}



export default EditDonor;