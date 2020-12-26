import React,{useEffect, useState} from "react";


function GetDonorDetails () {

    let [district,setDistrict] =useState(null);
    let [bloodGrp,setBloodGrp] = useState(null);
    let [data,setData] = useState(null);

    const getData = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("x-username", "kartheek");
        myHeaders.append("x-password", "karthik433");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"district":district,"bloodGroup":bloodGrp});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
         body: raw,
        redirect: 'follow',
        credentials:"include"
        };

        fetch("http://localhost:9999/donorDetailsByDistrict", requestOptions)
         .then(response => response.json())
         .then(result =>setData(result))
         .catch(error => console.log('error', error));
           } 

    const getDistrict = (e)=>{
        //console.log(e.target.value);
        setDistrict(e.target.value);
        console.log(district);

    }
    useEffect(()=>{
        console.log(district,"hello");

    },[district])
    
    const getBloodGrp = (e)=>{
        setBloodGrp(e.target.value);
        console.log(bloodGrp);
    }

    return(
        <>
        <h1>Welcome</h1>
        <h3>Please select the district</h3>
        <select onChange={getDistrict}>
                <option value="Select District">Select District</option>
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
         <select onChange={getBloodGrp} id="bloodGroup" name="bloodGrp">
                <option>select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
         <button type="submit" onClick={getData} >Search</button>
         {data && data.map((item,index)=>{
             return(
                 <div className="donorList" key={index}>
                     <h3>Donor{index+1}</h3>
                     <div className="details">
                     <p>DonorName: {item.DonorName}</p>
                     <p>Gender: {item.Gender}</p>
                     <p>BloodGroup: {item.BloodGroup}</p>
                     <p>MobileNumber: {item.MobileNumber}</p>
                     <p>Alternate Mobile Number:{item.AlternateMobile ? item.AlternateMobile :<span>No Alternative Number</span> }</p>
                     <p>Email: {item.Email}</p>
                     <p>District: {item.District}</p>
                     <p>Address: {item.Address}</p>
                     </div> 
                 </div>
                 
             );
         })}
        </>
    );
}


export default GetDonorDetails;