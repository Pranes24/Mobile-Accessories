import React from "react";
import './catostyle.css'
function Catogeries(){
    return(
        <div>
            <div className="right-menu">
                <h1 className="menu-button h6">CATEGORIES</h1>
                <div className="container d-flex justify-content-center">
                <table className="dropdown-menu">
                    <tr className="">
                        <td className="px-3 py-2 fw-normal"><a href="#">PHOTOGRAPHY ITEMS</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">SPARES TOOLS LCDs</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">SOUND MUSIC</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">SMART WATCH ACCESSORIES</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#">TABLET ACCESSORIES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">SMART PHONE ACCESSORIES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">MACBOOK ACCESSORIES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">SMART TV ACCESSORIES</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#">STORE SOLUTIONS-FURNITURE</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">STORAGE AND MEMORY</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">10DAYS</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">LIFESTYLE ACCESSORIES</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#">COVERS AND CASES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">CAR ACCESSORIES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">BATTERY</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">TEMPERED GLASS -SCREENGUARDS</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#">CHARGERS_ADAPTERS</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">WIRES & CABLES</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">WALLETS & POP HOLDERS</a></td>
                        <td className="px-3 py-2 fw-normal"><a href="#">STAND & HOLDERS</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 fw-normal"><a href="#">POWERBANKS</a></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
}
export default Catogeries;