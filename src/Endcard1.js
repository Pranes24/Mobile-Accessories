import React from "react";
import './watch.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";
function Endcard1(){
    return(
        <div>
            <div className="nav bg-dark h-auto">
                <div className="be-touch">
                <h1 className="h5 fw-normal mt-4 text-white">BE IN TOUCH WITH US :</h1>
                </div>
                <div className="end-email mt-3">
                <input type="text" className="" placeholder="Enter Your e-mail"></input>
                <button className="btn text-white end-btn">Join Us</button>
                </div>
                <div className="scl-mdi1">
                <FontAwesomeIcon className="mt-4 mx-3 frstico" icon={faFacebookF} />
                <FontAwesomeIcon className="mt-4 mx-3 frstico" icon={faTwitter} />
                <FontAwesomeIcon className="mt-4 mx-3 frstico" icon={faInstagram} />
                <FontAwesomeIcon className="mt-4 mx-3 frstico" icon={faYoutube} />
                </div>
            </div>
        </div>
    );
}
export default Endcard1;