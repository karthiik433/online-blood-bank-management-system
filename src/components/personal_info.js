import React,{Component} from "react";
import "./../styles/style2.css";

function PersonalInfo(){
    return(
     <div>
        <form>
            <label for="fullName"><b>Full Name:</b></label>
            <input type="text" placeholder="Full Name"></input>
            <label for="Gender"><b>Gender:</b></label>
            <select name="gender" id="gender">
                <option value="Male">Male</option>
                <option value="Female" checked>Female</option>
                <option value="Other">Other</option>
            </select>
            <label for="date"><b>Date Of Birth:</b></label>
            <input type="date" id="DateOfBirth"></input>
            <label  for="bloodGroup"><b>Blood Group:</b></label>
            <select>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <label for="mobileNo"><b>Mobile No:</b></label>
            <input type="number" placeholder="Enter mobile number"></input>
            <label for="alternateMobile"><b>Alternate Mobile No:</b></label>
            <input type="number" placeholder="Enter mobile number"></input>
            <label for="email"><b>Email:</b></label>
            <input type="email" placeholder="Enter your mail address"></input>
            <label for="state"><b>State:</b></label>
            <select>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
            </select>
            <label for="district"><b>District:</b></label>
            <select>
                <option value="Anantapur">Anantapur</option>
                <option value="Chittor">Chittor</option>
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
                <option value="Nellore">Adilabad</option>
                <option value="Nellore">Bhadeadri Kothagudem</option>
                <option value="Nellore">Hyderabad</option>
                <option value="Nellore">Jagitial</option>
                <option value="Nellore">Jangaon</option>
                <option value="Nellore">Jayashankar Bhupalpally</option>
                <option value="Nellore">Jogulamba Gadwal</option>
                <option value="Nellore">Kamareddy</option>
                <option value="Nellore">Karimnagar</option>
                <option value="Nellore">Khammam</option>
                <option value="Nellore">Komaram Bheem</option>
                <option value="Nellore">Mahabubabad</option>
                <option value="Nellore">Mahabubnagar</option>
                <option value="Nellore">Mancherial</option>
                <option value="Nellore">Medak</option>
                <option value="Nellore">Medchal Malkajgiri</option>
                <option value="Nellore">Mulugu</option>
                <option value="Nellore">Nagarkurnool</option>
                <option value="Nellore">Narayanpet</option>
                <option value="Nellore">Nalgonda</option>
                <option value="Nellore">Nirmal</option>
                <option value="Nellore">Nizamabad</option>
                <option value="Nellore">Peddapalli</option>
                <option value="Nellore">Rajanna Siricilla</option>
                <option value="Nellore">Ranga Reddy</option>
                <option value="Nellore">Sangareddy</option>
                <option value="Nellore">Siddipet</option>
                <option value="Nellore">Suryapet</option>
                <option value="Nellore">Vikarabad</option>
                <option value="Nellore">Wanaparthy</option>
                <option value="Nellore">Warangal Rural</option>
                <option value="Nellore">Warangal Urban</option>
                <option value="Nellore">Yadadri Bhuvanagiri</option>
            </select>
            <label for="address"><b>Address:</b></label>
            <input type="text"placeholder="Address"></input>
            <button type="submit" className="btn"><b>Submit</b></button>
        </form>
     </div>
    );
}

export default PersonalInfo;