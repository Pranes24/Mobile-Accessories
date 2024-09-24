import React from "react";
import './watch.css'
import img1 from './Assest/content1.jpg'
import img2 from './Assest/content2.jpg'
import img3 from './Assest/content3.jpg'
import img4 from './Assest/content4.jpg'
import img5 from './Assest/content5.jpg'
import watch1 from './Assest/watch1.jpg'
import watch2 from './Assest/watch2.jpg'
import watch3 from './Assest/watch3.jpg'
import watch4 from './Assest/watch4.png'
import watch5 from './Assest/watch5.jpg'
import cases1 from './Assest/cases1.jpg'
import cases2 from './Assest/cases2.jpg'
import cases3 from './Assest/cases3.png'
import cases4 from './Assest/cases4.jpeg'
import cases5 from './Assest/cases5.png'
import smartphn1 from './Assest/smartphn1.png'
import smartphn2 from './Assest/smartphn2.jpg'
import smartphn3 from './Assest/smartphn3.jpg'
import smartphn4 from './Assest/smartphn4.png'
import smartphn5 from './Assest/smartphn5.png'
import Endcard1 from "./Endcard1";


function Home(){
    return(
        <div>
        <div className="container-fluid  px-0">
            <div className="row container-fluid">
                <div className="col-6">
                <img className="h-auto img-fluid my-1" alt="Content" src={img1}></img>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">                
                            <img className="h-auto img-fluid my-1" alt="Content" src={img2}></img>
                        </div>
                        <div className="col-6">
                        <img className="h-auto img-fluid my-1" alt="Content" src={img3}></img>
                        </div>
                        <div className="col-6">
                        <img className="h-auto img-fluid my-2" alt="Content" src={img4}></img>
                        </div>
                        <div className="col-6">
                        <img className="h-auto img-fluid my-2" alt="Content" src={img5}></img>
                        </div>
                </div>
                </div>
            </div>
            <div className="row container-fluid">
                <div className="col-5 p-0"><p className="h4 fw-normal mt-4 text-center">SMART WATCH ACCESSORIES</p>
                </div>
                <div className="col-5 p-0"></div>
                <div className="col-2 p-0"><button className="btn btn-dark px-4 py-1 mt-4 v-btn">View</button></div>
                </div>
                <div className="container p-0 mt-3">
                <div className="row p-0 container-fluid">
                <div className="col-6 p-0">
                    <div className="watch">
                <img className="im-wa border rounded" alt="Content" src={watch1}></img></div>
                </div>
                <div className="col-6">
                    <div className="row">
                    <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={watch2}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">Watch Jwellery</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={watch3}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">Watch Stands</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mt-4">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={watch4}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">Watch Cables</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mt-4">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={watch5}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn fw-bolder fs-5">Watch Cases</div></div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row container-fluid">
                <div className="col-5 p-0"><p className="h4 fw-normal mt-4 text-center">COVERS & CASES</p>
                </div>
                <div className="col-5 p-0"></div>
                <div className="col-2 p-0 "><button className="btn btn-dark px-4 py-1 mt-4 v-btn">View</button></div>
                </div>
                <div className="container p-0 mt-3">
                <div className="row p-0 container-fluid">
                <div className="col-6 p-0">
                    <div className="watch">
                <img className="im-wa border rounded" alt="Content" src={cases1}></img></div>
                </div>
                <div className="col-6">
                    <div className="row">
                    <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={cases2}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">EARBUD CASES</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={cases3}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">MOBILE COVERS</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mt-4">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={cases4}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">FLIP COVERS</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mt-4">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={cases5}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn fw-bolder fs-5">AIRPOD COVERS</div></div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row container-fluid">
                <div className="col-5 p-0"><p className="h4 fw-normal mt-4 text-center">SMART PHONE ACCESSORIES</p>
                </div>
                <div className="col-5 p-0"></div>
                <div className="col-2 p-0"><button className="btn btn-dark px-4 py-1 mt-4 v-btn">View</button></div>
                </div>
                <div className="container p-0 mt-3 mb-3">
                <div className="row p-0 container-fluid">
                <div className="col-6 p-0">
                    <div className="watch">
                <img className="im-wa border rounded" alt="Content" src={smartphn1}></img></div>
                </div>
                <div className="col-6">
                    <div className="row">
                    <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={smartphn2}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">CONNECTORS</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card mb-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={smartphn3}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-6">HAND & WAIST PRODUCT</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card my-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={smartphn4}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn text-dark fw-bolder fs-5">FITNESS SECTION</div></div>
                            </div>
                        </div>
                        <div className="col-6 px-2 border-0 card my-2">
                        <div className="watch">
                        <img className="im-wa" alt="Content" src={smartphn5}></img>
                        <div className="card-img-overlay d-flex align-items-end p-0 px-2">
                            <div className="text-center card-body ctn fw-bolder fs-5">SIM CARD ADAPTOR</div></div>
                            </div>
                        </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            <Endcard1></Endcard1>
        </div>
    );
}
export default Home;