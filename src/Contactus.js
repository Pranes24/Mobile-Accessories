import React from "react";
import './watch.css'
import location from './Assest/location.png'
import clock from './Assest/clock.png'
function Contactus(){
    return(
        <div>
            <div className="nav h-auto about-nav"><p className="my-auto py-2">Home / Contact Us</p></div>
            <div className="row container-fluid contact-loca">
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="d-flex align-items-center">
                        <img className="img-fluid h-auto contact-loca-img mx-auto" src={location} alt="Location"></img>
                    </div>
                    <div className="text-center">
                        <p className="h4 my-4 fw-normal">VISIT OUR LOCATION</p>
                        <p className="contact-add mt-4 fw-normal ">iCare eTrade Private Limited
                                                          HEERA COURT, SHOP2, L.J.ROAD,
                                                          MATUNGA WEST,MUMBAI -400016,
                                                          MAHARASHTRA, INDIA.</p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="d-flex align-items-center">
                <img src={clock} className="h-auto img-fluid contact-clock-img mx-auto" alt="Clock"></img>
                </div>
                <div className="text-center">
                        <p className="h4 my-4 fw-normal">WORKING TIME</p>
                        <p className="contact-add mt-4 fw-normal ">Mon - Fri (11 AM to 7 PM)</p>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
            <div>
                <form>
                    <div className="container-fluid">
                    <div className="container form-group contact-input-container">
                        <input className="contact-input-names form-control my-3" type="text" placeholder="Your Name (required)" required></input>
                        <input className="contact-input-names form-control my-3" type="text" placeholder="Your E-mail (required)" required></input>
                        <input className="contact-input-names form-control my-3" type="text" placeholder="Your Mobile Number (required)" required></input>
                        <input className="contact-input-names form-control my-3" type="text" placeholder="Subject"></input>
                        <textarea className="contact-input-names form-control my-3" rows="7" type="textarea" placeholder="Your Message"></textarea>
                        <p className="fw-normal fs-7">Captcha</p>
                        <input className="contact-input-names w-30 mb-3"></input>
                        <input className="contact-input-names captcha-input w-30 mb-3 mx-2"></input>
                        <button className="btn contact-ref-btn">Refresh</button>
                        <div className="d-flex justify-content-center my-3">
                        <button className="btn contact-ref-btn px-4">Send Message</button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contactus;