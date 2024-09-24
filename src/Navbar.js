import React from 'react'
import './watch.css'
import imglogo from './Assest/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import {faBagShopping,faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons';
import Catogeries from './Catogeries';
import Brands from './Brands';
export default function Navbar(){
    return(
        <div className='sticky-top bg-white nav-sticky'>
            <div  className='d-flex row container-fluid'>
            <img className='col-3 logo-nav mt-2 mx-auto' src={imglogo} alt='Logo'></img>
            <ul className='d-flex mt-4 list-unstyled col-7'>
                <li className='mx-3 fw-8 h6'><NavLink className='nav-deco' to="/">HOME</NavLink></li>
                <li className='mx-3 fw-8 h6'><Catogeries></Catogeries></li>
                <li className='mx-3 fw-8 h6'><Brands></Brands></li>
                <li className='mx-3 fw-8 h6'><NavLink className='nav-deco' to='/Becomeaseller'>BECOME A SELLER</NavLink></li>
                <li className='mx-3 fw-8 h6'><NavLink className='nav-deco' to='/About'>ABOUT US</NavLink></li>
                <li className='ml-3 fw-8 h6'><NavLink className='nav-deco' to='/Contactus'>CONTACT US</NavLink></li>
            </ul>
            <div className='mt-4 col-2  d-flex justify-content-end'>
            <FontAwesomeIcon className='mx-3' icon={faMagnifyingGlass} />
            <FontAwesomeIcon className='mx-3' icon={faBagShopping} />
            <FontAwesomeIcon className='mx-3' icon={faUser} />
            </div>
        </div>
        </div>
    );
 }
