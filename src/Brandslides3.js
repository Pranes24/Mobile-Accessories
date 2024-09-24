import React from "react";
import './watch.css'
import brand9 from './Assest/brand9.jpg'
import brand10 from './Assest/brand10.png'
import brand11 from './Assest/brand11.jpg'
import brand8 from './Assest/brand8.png'
function Brandslides3(){
      return (
        <div>
          <div className="container">
          <div className="row d-flex align-items-center py-3">
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand8} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand9} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand10} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand11} alt="Brand"></img>
            </div>
          </div>
          </div>
        </div>
      );
    }
    
export default Brandslides3;