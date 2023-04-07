import React from "react";
import {useState,useEffect} from 'react'
import { useNavigate ,useLocation} from "react-router-dom";
const Spinner = ({path="login"}) => {
    const[count,setCount]=useState(5);
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        const intervel=setInterval(()=>{
            setCount((PreValue)=>--PreValue)
        },1000);
        count===0 && navigate(`${path}`,{
            state: location.pathname
        })
        return()=>clearInterval(intervel)
    },[count,navigate,location,path])
  return (
    <>
    <div className="spinner">
      <div className="wrapper">
  <div className="circle" />
  <div className="circle" />
  <div className="circle" />
  <div className="shadow" />
  <div className="shadow" />
  <div className="shadow" />
  <span>Loading...</span>
</div>
  {/* <span className="redirecting">Redirecting in {count} sec</span> */}
</div>

    </>
  );
};

export default Spinner;
// ho gya bhai 😴