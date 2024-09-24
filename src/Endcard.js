import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
import './watch.css'
import pay1 from './Assest/pay1.png'
import pay2 from './Assest/pay2.png'
import pay3 from './Assest/pay3.png'
import pay4 from './Assest/pay4.png'
import pay5 from './Assest/pay5.png'
import pay6 from './Assest/pay6.png'
function Endcard(){
    return(
        <div className="Endcard-bg">
            <div className="container-fluid pt-3 px-3">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <h4 className="h5 fw-normal mb-4">OTHER LINKS</h4>
                        <p className="h6 fw-normal">SHIPPING / DELIVERY POLICY</p>
                        <p className="h6 fw-normal">CANCELLATION/REFUND POLICY</p>
                    </div>
                    <div className="col-3">
                        <h4 className="h5 fw-normal mb-4">POLICIES</h4>
                        <p className="h6 fw-normal">PRIVACYPOLICY</p>
                        <p className="h6 fw-normal">TERMS AND CONDITION</p>
                    </div>
                    <div className="col-2">
                        <h4 className="h5 fw-normal mb-4">My PROFILE</h4>
                        <p className="h6 fw-normal">Sign in</p>
                        <p className="h6 fw-normal">Register</p>
                    </div>
                    <div className="col-3 end-contact">
                        <h4 className="h5 fw-normal mb-4">CONTACT</h4>
                        <p className="h6 fw-bold">iCare eTrade Private Limited</p>
                        <p className="h6 fw-normal end-address">Address: iCare eTrade Private Limited
                                                    HEERA COURT, SHOP2, L.J.ROAD,
                                                    MATUNGA WEST,MUMBAI -400016,
                                                    MAHARASHTRA, INDIA. </p>                                                   
                        <p className="h6 fw-normal mt-1">WhatsApp: 8451066698</p>
                        <p className="h6 fw-normal mt-3">Hours: Mon - Fri (11 AM to 7 PM)</p>
                        <p className="fs-6 fw-normal mt-3">SATURDAY & SUNDAY , PUBLIC HOLIDAYS : HOLIDAY.</p>
                        <p className="h6 fw-normal mt-3">E-mail: info@mobileaccessories.in</p>
                        <FontAwesomeIcon className="mt-2 mb-3 contact-endico" icon={faFacebookF} />
                        <FontAwesomeIcon className="mt-2 mb-3 contact-endico" icon={faTwitter} />
                        <FontAwesomeIcon className="mt-2 mb-3 contact-endico" icon={faInstagram} />
                        <FontAwesomeIcon className="mt-2 mb-3 contact-endico" icon={faYoutube} />
                    </div>
                </div>
            </div>
            <div className="nav bg-dark h-auto">
                <div className="end-rights">
                <h1 className="fw-bold my-4 text-white">© Mobile Accessories 2024 . All Rights Reserved. powered by Bizmate.</h1>
                </div>
                <div className="end-pay my-auto">
                    <img className="end-pay-img" src={pay1} alt="Payment"></img>
                    <img className="end-pay-img" src={pay2} alt="Payment"></img>
                    <img className="end-pay-img" src={pay3} alt="Payment"></img>
                    <img className="end-pay-img" src={pay4} alt="Payment"></img>
                    <img className="end-pay-img" src={pay5} alt="Payment"></img>
                    <img className="end-pay-img" src={pay6} alt="Payment"></img>
                </div>
            </div>
        </div>
    );
}
export default Endcard;