import React from "react";
import "./../styles/footer.css";


function Footer () {
    return (
        <>
        <div className="box">
        <div className="foot">
            <p>About</p>
            <p>Contact Us</p>
            <p>Donate Us</p>
        </div>

        

        <div className="foot">
            <p>Locate Donors</p>
            <p>Gallery</p>
            <p>As a Donor</p>
        </div>

        <div className="footEnd">
            <pre> Terms and Conditions | </pre>
            <pre> Terms of Use | </pre>
            <pre> Privacy Policy | </pre>
            <pre> Disclaimer | </pre>
            <pre> Sitemap | </pre>
        </div>
       
        <div className="icons">  
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-instagram"></a>
</div>

    
        </div>
        </>
    );
}


export default Footer;