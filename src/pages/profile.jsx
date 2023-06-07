import React, {useState} from "react";
import Profile from "../assets/home icon.png";
import Profile2 from "../assets/user icon.png";


const profile = ()=>{
  return (

    <div className="flex h-screen ">


      <div className="w-15vh  bg-[#514976]">
         <div className=" my-10">
            <img className=" w-[80%]   object-contain" src={Profile} alt=""/>
         </div>
         <div className=" my-10">
            <img className=" w-[80%]   object-contain" src={Profile2} alt=""/>
         </div>

         
      <div className="w-85vh bg-[#242038]">

      </div>


      </div>
    </div>
  );
};

export default profile;