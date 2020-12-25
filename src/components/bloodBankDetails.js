import React,{useState} from "react";


function BloodBankDetails (){
     
    let [data,setData] = useState(null);
    let [district,setDistrict] = useState(null);
    const dataFetch =   ()=>{

  

        var myHeaders = new Headers();
        myHeaders.append("x-username", "kartheek");
        myHeaders.append("x-password", "karthik433");
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"district":district});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
          fetch("http://localhost:9999/bloodBanksByDistrict", requestOptions)
          .then(response => response.json())
          .then(result => {
              setData(result);
              console.log(result);
           }
           )
          .catch(error => console.log('error', error));
          //console.log(data2);



    //     const dataArray=fetch("http://localhost:9999/donorDetailsByDistrict",{
    //         method:"POST",
    //         body:{"district":"Anantapur"},
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //    }).then((res)=>res.json())
    //    .then((output)=>console.log(output));
    }

    const getDistrict = (e) =>{
        console.log(e.target.value);
        setDistrict(e.target.value);
    }
     
    return(
        <div className="App">
      <h1>Search for the Blood Banks in your district</h1>
      <h2>Select the district</h2>
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
      {/* Fetch data from API */}
        <button className="fetch-button" onClick={dataFetch}>
          Search
        </button>

      {/* Display data from API */}
      <div className="books">
        { data &&
          data.map((item, index) => {
            //const cleanedDate = item.BloodBankName;
            const authors = item.BloodBankName;

            return (
              <div className="item" key={index} >
                <h3>Address {index + 1}</h3>
                <h2>{item.name}</h2>

                <div className="details" >
                  <p>Blood Bank Name: {authors}</p>
                  <p>District: {item.District}</p>
                  <p>Address: {item.Address}</p>
            <p>Contact Number: {item.ContactNumber?<span>{item.ContactNumber}</span>:<span>No Contact Number Available</span>}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
        
    );

}




export default BloodBankDetails;