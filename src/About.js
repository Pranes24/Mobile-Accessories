import React from "react";
import './watch.css'
import Endcard1 from "./Endcard1";
function About(){
    return(
        <div>
            <div className="nav h-auto about-nav"><p className="my-auto py-2">Home / About</p></div>
            <div className="about-content container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <h1 className="h6 fw-bold mb-5">About Us</h1>
                            <p className="about-des fw-normal mt-5">We, as iCare eTrade Pvt Ltd, is a registered firm under Companies Act,1956.</p>
                            <p className="about-des fw-normal mt-4">We have been researching, developing and selling mobile accessories since 2007.</p>
                            <p className="about-des fw-normal mt-4">Since inception we aimed at Quality products and till date focused on same.</p>
                            <p className="about-des fw-normal mt-4">We and this industry know each other past 15 years, we learnt and expanded.</p>
                            <p className="about-des fw-normal mt-4">With our experience and our knowledge, we have came up with a concept of creating a search engine for mobile accessories.</p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
            <Endcard1></Endcard1>
        </div>
    );
}
export default About;