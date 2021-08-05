import React from "react";
import "./contactus.css";

class ContactUs extends React.Component {

    render() {
        return (
            <div>
                <div src="images/background-1.jpg" style={{ backgroundColor: "#14697d", width: "100%", height: "200px" }} ></div>
                <h1 className="contact-us" style={{ color: "white", fontSize: "60px" }}>Contact Us</h1>
                <div className="row m-0">
                    <div className="col-md-5"><img src="images/contact-2.jpeg" style={{margin: "5% 0 5% 0", width: "80%" }} /></div>
                    <div className="col-md-6" style={{margin: "5% 0 5% 0"}}>
                        <h4>Contact Us</h4>
                        <p>
                            <ul> <li>CONTACT
                        ADDRESS: B-169 BLOCK 3 GULISTAN-E-JAUHAR,
                        KARACHI , PAKISTAN</li>
                        <li>OFFICE: 021-34021105</li>
                        <li>MOBILE: +92-3152162188</li>
                        <li>EMAIL:
                        <ul><li> bsgindustries.vent@gmail.com</li>
                        <li> umaidghauri@gmail.com</li></ul></li></ul></p></div>

                </div>

            </div>
        );
    }
}
export default ContactUs
