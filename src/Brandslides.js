import React from "react";
import './watch.css'
import brand1 from './Assest/brand1.jpg'
import brand2 from './Assest/brand2.jpg'
import brand3 from './Assest/brand3.png'
import brand4 from './Assest/brand4.jpg'
function Brandslides(){
      return (
        <div>
          <div className="container">
          <div className="row d-flex align-items-center py-3">
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand1} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand2} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand3} alt="Brand"></img>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center brand-logo">
              <img className="img-fluid brand-img" src={brand4} alt="Brand"></img>
            </div>
          </div>
          </div>
        </div>
      );
    }
    
export default Brandslides;