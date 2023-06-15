import React, {useState} from "react";
import Profile from "../assets/home icon.png";
import Profile2 from "../assets/user icon.png";
import Profile3 from "../assets/Group 27.png";
import logo from "../assets/logo.png";


const profile = ()=>{
  return (

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
        
        <div className=" py-5 px-8 flex  text-white font-Gilroy text-6xl"><h1>Hello Priyankush</h1></div>

        <div className="flex flex-row ">
          <div className="w-[50%] px-10 text-white font-Gilroy text-1.5xl"><h1>User Details </h1></div>
          <div className="w-[50%] px-10 text-white font-Gilroy text-1.5xl"><h1>Transaction Details</h1></div>
        </div>

        <div className=" mx-10 flex border-b-2 border-[#9E378A]"></div>

 
          <div className="flex flex-row ">
          <div className="w-[50%] mx-10 my-10 py-5 h-[100%] px-10 rounded-lg border-red-700 bg-[#514976]">
            <div className="flex flex-row">
            <div className="w-[50%] text-white font-Gilroy"> 
                 <h1>Transaction Key</h1>
            </div>
            <div className="w-[50%] px-10 text-white font-Gilroy"> 
                 <h1>123456</h1>
            </div>

            </div>
            <div  className="flex flex-row">
            <div className="w-[50%] my-10  text-white font-Gilroy"> 
                 <h1>Name</h1>
            </div>
            <div className="w-[50%] px-10 py-10 text-white font-Gilroy"> 
                 <h1>123456</h1>
            </div>
            </div>
            <div className="flex flex-row">
            <div className="w-[50%]  text-white font-Gilroy"> 
                 <h1>Contact</h1>
            </div>
            <div className="w-[50%] px-10  text-white font-Gilroy"> 
                 <h1>9957680702</h1>

            </div>
            </div>
            <div className="flex flex-row">
            <div className="w-[50%] py-10 text-white font-Gilroy"> 
                 <h1>Gender</h1>
            </div>
            <div className="w-[50%] px-10 py-10 text-white font-Gilroy"> 
                 <h1>Male</h1>

            </div>
            </div>

              <div className="flex flex-row">
            <div className="w-[50%]  text-white font-Gilroy"> 
                 <h1>Age</h1>
            </div>
            <div className="w-[50%] px-10  text-white font-Gilroy"> 
                 <h1>23</h1>

            </div>
            </div>
            
            
          </div>
          <div className="w-[50%] mx-10 my-10 py-5 h-[100%] px-10 rounded-lg  border-red-700 bg-[#514976]">
          <div className="flex flex-row">
          <div className="w-[50%] text-white font-Gilroy"> 
                 <h1>Transaction ID</h1>
            </div>
            <div className="w-[50%] text-white font-Gilroy"> 
                 <h1>123456</h1>
            </div>
            
            </div>
            <div className="flex flex-row">
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>Time</h1>
            </div>
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>23:11</h1>
            </div>

            </div>
            <div className="flex flex-row">
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>Balance</h1>
            </div>
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>500</h1>
            </div>

            </div>
            <div className="  flex border-b-2 border-white"></div>
            <div className="flex flex-row">
            <div className="w-[50%]  my-3 text-white font-Gilroy"> 
                 <h1>Transaction ID</h1>

            </div>
            <div className="w-[50%]  my-3 text-white font-Gilroy"> 
                 <h1>35373827</h1>
                 
            </div>
            </div>
            <div className="flex flex-row">
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>Time</h1>
            </div>
            <div className="w-[50%] my-3 text-white font-Gilroy"> 
                 <h1>13:45</h1>
            </div>
          
            </div>
            <div className="flex flex-row">
            <div className="w-[50%]  text-white font-Gilroy"> 
                 <h1>Balance</h1>
            </div>
            <div className="w-[50%]  text-white font-Gilroy"> 
                 <h1>300</h1>
            </div>

            </div>
            <div className=" my-4 flex border-b-2 border-white"></div>
            <div className="flex justify-center items-center">
          <input
            className=" px-4 py-2 w-[50%] rounded-lg bg-[#D2D2D2] text-black"
            placeholder="$700"
           />
          </div>
          <div className="flex justify-center items-center mx-12 py-4">
                  <button className="bg-[#6C63FF] w-[30%] text-white  rounded-[12px] px-5 py-4 text-xs font-bold">
                  Send
               </button>
               </div>

        

          </div>


          </div>



        


      </div>


    </div>
  );
};

export default profile;