import React,{Component, useEffect, useState} from "react";
import "./../styles/style2.css";
import {useForm} from "react-hook-form";
import EndOfRegister from "./donorRegisterEnd";

function PersonalInfo(props){
    console.log(props.fullName,"personal")

      const {register,handleSubmit} = useForm();
      let [response,Setresponse] = useState(null);
      let [buttonDisable,setDisable] =useState(false);
      let [endRegister,setEnd] = useState(false);

    const sendData = (data)=>{
        console.log(data);

        //document.getElementById("infoFullName").value="";
        //document.getElementById("password").value="";
        //document.getElementById("gender").value="";
        document.getElementById("DateOfBirth").value="";
        document.getElementById("bloodGroup").value="";
        document.getElementById("mobileNo").value="";
        document.getElementById("alternateMobile").value="";
        document.getElementById("email").value="";
        //document.getElementById("district").value="";
        document.getElementById("address").value="";
         
        if( data.gender ==="" || data.date ==="" || data.bloodGrp ==="" || data.mobile ==="" || data.state=="" || data.district ==="" || data.address ===""){
            document.getElementById("errorFilling").innerText="Please Fill all the details";
            document.getElementById("errorFilling").style.color="red";
            return;
        } 

        if(data.email !==""){
            const mail = data.email;
            console.log(mail);
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(mail.match(mailformat)){
                //alert("correct mail format");
                console.log("correct mail format");    
            }else{
               alert("incorrect mail format,please re-enter");
               return;
            }
        }
        
        if(data.mobile.length !== 10){
            alert("invalid Mobile number,please re-enter")
            return
        }
        if(data.alternate !==""){
            if(data.alternate.length !== 10){
                alert("invalid alternate mobile number,please re-enter");
                return
            }
        }

        document.getElementById("errorFilling").innerText="";
        setDisable(true);
        
        var myHeaders = new Headers();
        myHeaders.append("x-username", "kartheek");
        myHeaders.append("x-password", "karthik433");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"fullName":props.fullName,"gender":data.gender,"dateOfBirth":data.date,"bloodGroup":data.bloodGrp,"mobile":Number(data.mobile),"alternateMobile":Number(data.alternate),"email":data.email,"state":data.state,"district":data.district,"address":data.address});

        var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
          redirect: 'follow',
          credentials:"include"
        };

        fetch("http://localhost:9999/donorRegistration", requestOptions)
         .then(response => response.json())
         .then(result => Setresponse(result))
         .catch(error => console.log('error', error));
         setEnd(true);
          }

    return(

        <>
        {endRegister ?  <EndOfRegister/> : 
        
        <div className="personal">
        <form className="personalForm">
            {/* <label for="fullName"><b>Full Name:</b></label>
            <input type="text" id="infoFullName" name="fullName" placeholder="Full Name" ref={register}></input>
            <label>Enter Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" ref={register} ></input> */}
            <label for="Gender" className="plabel"><b>Gender:</b></label>
            <select name="gender" name="gender" id="gender" ref={register}>
                <option value="Male">Male</option>
                <option value="Female" checked>Female</option>
                <option value="Other">Other</option>
            </select>
            <label for="date" className="plabel"><b>Date Of Birth:</b></label>
            <input type="date" name="date" id="DateOfBirth" ref={register}></input>
            <label  for="bloodGroup" className="plabel"><b>Blood Group:</b></label>
            <select id="bloodGroup" name="bloodGrp" ref={register}>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <label for="mobileNo" className="plabel"><b>Mobile No:</b></label>
            <input type="number" id="mobileNo" name="mobile" placeholder="Enter mobile number" ref={register}></input>
            <label for="alternateMobile" className="plabel"><b>Alternate Mobile No:</b></label>
            <input type="number" id="alternateMobile" name="alternate" placeholder="Enter mobile number" ref={register}></input>
            <label for="email" className="plabel"><b>Email:</b></label>
            <input type="email" id="email" name="email" placeholder="Enter your mail address" ref={register}></input>
            <label className="plabel" style={{fontStyle:"fantasy"}}><b>State:</b></label>
            <select name="state" id="pstate" ref={register}>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>
            <label for="district" className="plabel"><b>District:</b></label>
            <select id="district" name="district" ref={register}>
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
            </select>
            <label for="address" className="plabel"><b>Address:</b></label>
            <input type="text" id="address" name="address" placeholder="Address" ref={register}></input>
            {response && <h4>{response.message}</h4>}
            <h4 id="errorFilling"></h4>
            <button type="button" className="pbtn btn-success" onClick={handleSubmit(sendData)} disabled={buttonDisable} ><b>Submit</b></button>
        </form>
     </div>

        }
        </>
     
    );
}

export default PersonalInfo;