import React, { useState } from "react";
import './watch.css'
import Brandslides from "./Brandslides";
import Brandslides2 from "./Brandslides2";
import Brandslides3 from "./Brandslides3";
function Brandslidesfun(){
    const [num,setnum]=useState(0)
    const [state,setstate]=useState(<Brandslides></Brandslides>)
    const Slidechange=(value)=>{
        if(value===0){
            setnum(num-1)
            if(num<0){
                setnum(2)
                setstate(<Brandslides3></Brandslides3>)
            }
            else if(num==1){
                setnum(0)
                setstate(<Brandslides></Brandslides>)
            }
            else if(num===2){
                setnum(1)
                setstate(<Brandslides2></Brandslides2>)
            }
        }
        else if(value===1){
            setnum(num+1)
            if(num===1){
                setstate(<Brandslides2></Brandslides2>)
            }
            else if(num===2){
                setstate(<Brandslides3></Brandslides3>)
            }
            else if(num>2){
                setnum(0)
                setstate(<Brandslides></Brandslides>)
            }
        }
    }
    return(
        <div>
            <div className="d-flex justify-content-end">
            <button onClick={()=>Slidechange(0)} className="mx-5 arrow-btn"><h1 className="h2 px-1 fw-lighter">←</h1></button>
            <button onClick={()=>Slidechange(1)} className="mx-5 arrow-btn"><h1 className="h2 px-1 fw-lighter">→</h1></button>
            </div>
            {state}
        </div>
    );
}
export default Brandslidesfun;