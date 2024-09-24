import React from "react";
import './watch.css'
import brand5 from './Assest/brand5.jpg'
import brand6 from './Assest/brand6.png'
import brand7 from './Assest/brand7.jpg'
import brand8 from './Assest/brand8.png'
function Brandslides2(){
      return (
        <div>
          <div className="container">
          <div className="row d-flex align-items-center py-3">
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand5} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand6} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand7} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand8} alt="Brand"></img>
            </div>
          </div>
          </div>
        </div>
      );
    }
    
export default Brandslides2;