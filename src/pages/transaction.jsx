import React, { useState } from "react";
import Profile from "../assets/home icon.png";
import Profile2 from "../assets/user icon.png";
import Profile3 from "../assets/Group 27.png";
import logo from "../assets/logo.png";

const Transaction=()=>{
  return(
    <div className="flex h-screen ">


    <div className="w-15vh  bg-[#514976]">
       <div className=" my-10">
          <img className=" w-[80%]   rounded-full color-white object-contain" src={Profile} alt=""/>
       </div>
       <div className=" my-10">
          <img className=" w-[80%]   object-contain" src={Profile2} alt=""/>
       </div>
       <div className=" my-10">
          <img className=" w-[80%]   object-contain" src={Profile3} alt=""/>
       </div>
    </div>

    <div className="flex-1 bg-[#242038]">

         <div className=" py-5 px-8 flex">
       
         <img className=" w-[10%]   object-contain" src={logo} alt=""/>
   
         </div>
         <div className=" py-5 px-8 flex text-bold text-white font-Gilroy text-6xl"><h1>Transaction</h1></div>

         <div className="flex flex-row ">
          <div className="w-[50%] px-10 text-white font-Gilroy text-2xl"><h1>Secure transactions using two way aunthentication </h1></div>
          
        </div>
        <div className=" mx-10 flex border-b-2 border-[#9E378A]"></div>

        <div className="mx-10 my-10 h-[60%] px-10 rounded-lg bg-[#514976]">

          <div className="flex flex-row">
          <div className="w-[50%] py-2 text-center text-white font-Gilroy"> 
                 <h1>Enter User's private key</h1>
            </div>
            <div className="w-[50%] py-2 text-center text-white font-Gilroy"> 
                 <h1>Enter Receivers public key</h1>
            </div>

          </div>


          <div className="flex flex-row ">
            <div className="w-1/2 px-20 py-2">
            <input
                  className=" px-5 w-full items-center justify-center rounded-lg bg-[#D0CCE0] p-2 text-black "

                  placeholder="Private Key"
                />
            </div>

            <div className=" w-1/2 px-20 py-2">
            <input
                  className=" px-5 w-full items-center justify-center rounded-lg bg-[#D0CCE0] p-2 text-black"

                  placeholder="Public key"
                />
            </div>

          </div>

          <div className="flex flex-col items-center py-2">
            <div className=" py-4  text-white font-Gilroy"> 
                 <h1>Transaction amount</h1>
            </div>
            <div className="w-1/2 px-20 py-2">
            <input
                  className=" px-5 py-2 w-full justify-center rounded-lg bg-[#D2D2D2] p-2 text-black "

                  placeholder="$700"
                />
            </div>

            <div className="flex flex-row items-center">
               <div className="items-center mx-12 py-4">
                  <button className="bg-black text-white w-full rounded-[12px] py-3 px-8 mx-4 text-xs font-bold">
                  Back
                  </button>
               </div>
               <div className="items-center mx-12 py-4">
                  <button className="bg-[#6C63FF] text-white w-full rounded-[12px] py-3 px-8 mx-4 text-xs font-bold">
                  Send
               </button>
               </div>
              </div>

          </div>

        </div>

    </div>

    </div>
  );
};

export default Transaction;




   
   

    