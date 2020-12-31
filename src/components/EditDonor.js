import React,{useState} from "react";
import { Redirect } from "react-router";
import {useForm} from "react-hook-form";
import "./../styles/editDonor.css";



function EditDonor (props){

   let [displayDetails,setDisplayDetails] = useState(null);
   const {register,handleSubmit} = useForm();

    //setFullName("karth");
    console.log(props.fullName,"edit");
    

    const sumbit =(data)=>{
        
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("district").value = "";
        document.getElementById("address").value = "";
       
        if(data.mobile !=="" ){
          console.log((data.mobile),"data");
          if(data.mobile.length !==10){
            document.getElementById("error").innerHTML="Please Enter Valid Mobile Number";
            document.getElementById("error").style.color="red";
            return;
          }
          
        }

        if(data.alternate !==""){
          if(data.alternate.length !==10){
            document.getElementById("error").value="Please Enter Valid Alternate Mobile Number";
            document.getElementById("error").style.color="red";
            return;
          }
          
        }

        if(data.email !== "" ){
          let mail = data.email;
          console.log(mail,"mail");
          let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(mail.match(mailformat)){
                //alert("correct mail format");
                console.log("correct mail format");    
            }else{
               alert("incorrect mail format,please re-enter");
               return;
            }
        }

        const button = document.getElementById("button");
        button.setAttribute("disabled",true);
        //console.log(fullName1,password1);
        
        var myHeaders = new Headers();
           
        myHeaders.append("x-username", "kartheek");
        myHeaders.append("x-password", "karthik433");
        myHeaders.append("Content-Type", "application/json");

       var raw = JSON.stringify({fullName:props.fullName, "mobile":Number(data.mobile),"alternateMobile":Number(data.alternate),"email":data.email,"district":data.district,"address":data.address});

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
     <div className="editDonor">
     <h1 className="head">Welcome</h1>
     <p className="para"> Please Edit Your Details</p>
     <form className="EditDonorForm">
  
         <label for="mobile">Enter New Mobile Number:</label>
         <input type="number" className="editDonorInput" id="mobile" name="mobile" placeholder="Enter new Mobile Number" ref={register}></input><br></br><br></br>
         <label>new Alternate Mobile:</label>
         <input type="number" className="editDonorInput" name="alternate" placeholder="Enter new Alternate Mobile" ref={register}></input><br></br><br></br>
         <label for="email">Enter New Email ID:</label>
         <input type="email" className="editDonorInput" id="email" name="email" placeholder="Enter new Email Id" ref={register}></input><br></br><br></br>
         <label for="district">Select District:</label>
         <select id="district" className="editDonorInput" name="district" ref={register}>
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
         <input type="text" className="editDonorInput" id="address" name="address" placeholder="Enter new Address" ref={register}></input><br></br><br></br>
         <h4 id="error"></h4>
         <button type="button" className="btn-success" id="button" onClick={handleSubmit(sumbit)} disabled={false}>Submit</button>
     </form>
     

    {displayDetails?
    <>
    {displayDetails.message?<p>message:{displayDetails.message}</p>:
    <>
    <div className="updateDetails">
    <h3>Your Details:</h3>
    <p>FullName: {displayDetails.fullName}</p>
    {/* <p>password::{displayDetails.password}</p> */}
    <p>Mobile: {displayDetails.mobile}</p>
    <p>Alternate Mobile: {displayDetails.alternateMobile}</p>
    <p>Email: {displayDetails.email}</p>
    <p>District: {displayDetails.district}</p>
    <p>Address: {displayDetails.address}</p>
    </div>
    </>
    }
    </>:<h2>Please Update details</h2>}

     </div>
     
    );
}



export default EditDonor;