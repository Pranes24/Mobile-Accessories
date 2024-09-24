import React from "react";
import './brandstyle.css'
import brand1 from './Assest/brand1.jpg'
import brand2 from './Assest/brand2.jpg'
import brand3 from './Assest/brand3.png'
import brand4 from './Assest/brand4.jpg'
import brand5 from './Assest/brand5.jpg'
import brand6 from './Assest/brand6.png'
import brand7 from './Assest/brand7.jpg'
import brand8 from './Assest/brand8.png'
import brand9 from './Assest/brand9.jpg'
import brand10 from './Assest/brand10.png'
import brand11 from './Assest/brand11.jpg'
import brand12 from './Assest/brand12.jpg'

function Brands(){
    return(
        <div>
            <div className="right-menu">
                <h1 className="menu-button h6">BRANDS</h1>
                <div className="container d-flex justify-content-center">
                <table className="dropdown-menu brand-drop container-fluid">
                    <p>Top Brands</p>
                    <tr className="">
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand1} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand2} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand3} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand4} alt="Brand"></img></a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand5} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand6} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand7} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand8} alt="Brand"></img></a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand9} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand10} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand11} alt="Brand"></img></a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#"><img className="brand-img" src={brand12} alt="Brand"></img></a></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
}
export default Brands;