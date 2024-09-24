import React from "react";
import './watch.css'
import Brandslidesfun from "./Brandslidesfun";
import Endcard1 from "./Endcard1";
import ReactPlayer from 'react-player'
import seller2 from './Assest/seller2.png'
import seller3 from './Assest/seller3.png'
import seller4 from './Assest/seller4.png'
import seller5 from './Assest/seller5.gif'
import seller6 from './Assest/seller6.png'
import seller7 from './Assest/seller7.png'
import industry from'./Assest/industry.jpg'
function Becomeaseller(){
    return(
        <div>
            <div>
            <div className="nav h-auto about-nav"><p className="my-auto py-2">Home / Seller</p></div>
            <div className="seller-banner">
                <div className="seller-input pt-4">
                    <img className="img-fluid h-auto" alt="Seller" src={seller7}></img>
                    <div className="sel-inp-div">
                    <form className="form-group sel-inp-div-form">
                        <label className="my-2 mb-2">Mobile Number</label>
                        <input className="form-control sel-inp-box" placeholder="Your Mobile Number (required)" required type="text"></input>
                        <label className="my-2 mb-2">Password</label> 
                        <input className="form-control" placeholder="Your Password" type="password"></input>
                        <label className="my-2 mb-2">Re-type Password</label>
                        <input className="form-control" placeholder="Re-type Password" type="text"></input>
                        <div className="sel-captcha container">
                        <label className="my-auto">Captcha</label>
                        <input className="mt-3" type="text"></input>
                        <span className="my-auto p-1">text</span>
                        <button className="btn btn-dark">Refresh</button>
                        </div>
                        <div className="d-flex justify-content-center sel-reg pb-4">
                            <button className="btn btn-dark align-items-center px-4">Register</button>
                        </div>
                        <hr className="p-0 m-0"></hr>
                        <p className="text-center mt-3 mb-0 pb-0 fw-bold">Contact Seller Help Line at</p>
                        <p className="text-center pb-3 fw-bold">+91 84510 666 98 / info@mobileaccessories.in</p>
                    </form>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="h2 text-center">WHY SELL WITH US ?</h1>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <ReactPlayer playing={true} muted={true}  url='https://youtu.be/4iGdH_SxZbo?si=HUiLOT-M8iYI4rkB' height="260px" width="550px"></ReactPlayer>
            </div>
            <h1 className="h3 text-center fw-noraml my-5">Selling on Mobile Accessories is really easy!</h1>
            <div className="d-flex justify-content-center">
            <div className="row sel-panda-content container m-0 p-0">
                <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                    <img className="img-fluid sel-panda sel-panda-first" src={seller6} alt="Seller"></img>
                </div>
                <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                    <img className="img-fluid sel-panda" src={seller4} alt="Seller"></img>
                </div>
                <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                    <img className="img-fluid sel-panda" src={seller2} alt="Seller"></img>
                </div>
            </div>
            </div>
            <div className="sel-panda-content-text container-fluid">
            <div className="d-flex justify-content-center">
            <div className="row sel-panda-content container p-0">
                <div className="col-lg-4 col-md-4 text-center">
                    <h1 className="h4 fw-normal pt-5 mt-5 text-white">Free Registration</h1>
                    <p className="fw-normal text-white">Register for free to connect with genuine buyers.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <h1 className="h4 fw-normal pt-5 mt-5 text-white">List Your Products</h1>
                    <p className="fw-normal text-white">Build your free catalouge with minimum efforts.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <h1 className="h4 fw-normal pt-5 mt-5 text-white">Get Bulk Orders</h1>
                    <p className="fw-normal text-white">Get lare quantity orders from all over India.</p>
                </div>
            </div>
            </div>
            <div className="row mt-4">
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="text-white fw-normal h3 text-center py-4">Register With us and Go Digital in 3 Easy Steps.</h1>
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                    <h1 className="h4 fw-normal text-dark py-4">#NoHassle</h1>
                </div>
            </div>
            </div>
            <div>
                <h1 className="h3 text-white text-center mb-5"><span className="bg-dark py-1 px-3 sel-mobile-brands">Brands On Mobile Accessories</span></h1>
            </div>
            <div>
                <Brandslidesfun></Brandslidesfun>
            </div>
            <div>
            <div>
                <h1 className="h3 text-white text-center mb-5"><span className="bg-dark py-1 px-3 sel-mobile-brands">Industry Associations</span></h1>
            </div>
            <div className="d-flex justify-content-center">
            <img className="img-fluid" src={industry} height="200px" width="200px" alt="Industry"></img></div>
            </div>
            <div>
                <h1 className="h4 text-center fw-normal mt-5">Sell Anywhere in India right from your Desktop</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <img className="img-fluid p-5 h-auto" width="600px" src={seller3} alt="Seller"></img>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img className="img-fluid p-5" width="600px" src={seller5} alt="Seller"></img>
                    </div>
                </div>
            </div>
            <div className="container seller-content-endcard d-flex justify-content-center mb-5 px-0">
                <div className="seller-content-end text-center pt-3 "><h1 className="text-center fw-normal h3">Start you Business with Mobile Accessories &
            reach buyers across India.</h1>
            <div>
                <h1 className="h4 text-white text-center my-3"><span className="bg-dark fw-normal px-5 sel-mobile-brands">START SELLING NOW</span></h1>
            </div>
            </div>
            </div>
            </div>
            <Endcard1></Endcard1>
        </div>
    );
}
export default Becomeaseller;