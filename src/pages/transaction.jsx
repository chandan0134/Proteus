import React, { useState } from "react";
import profile from "../assets/home icon.png";
import profile2 from "../assets/user icon.png";
import logo from "../assets/logo.png";

const Transaction = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className=" w-full h-screen bg-[#242038] ">
       <div className="px-5 py-3">
         <img className="w-[10%] object-contain" src={logo} alt="" style={{ marginLeft: '50px' }} />
       </div>
       
       
       <div className="px-5 py-3 flex flex-row text-white" style={{ marginLeft: '50px' }}>
         <p>Transaction</p>
       </div>
       <div className="px-5 py-3 flex flex-row text-white" style={{ marginLeft: '50px' }}>
          <p>Secure using two way authetication</p>
       </div>
       <div class="border border-red-500 border-opacity-50 border-2"></div>

       <div className=" w-full h-[92vh] grid grid-cols-1 sm:grid-cols-2 bg-[37305B] ">
        <div className=" flex flex-col justify-center items-center ">
          <form className=" max-w-[400px] w-full mx-auto  p-4 rounded-xl ">
          <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[25px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="User's Private key"
              />
            </div>
            <div className="  flex flex-col py-1 px-3 bg-[#433C62] rounded-[25px] my-6 ">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                  type={showPassword ? "text" : "password"}
                  placeholder="Receiver's Public Key"
                />
             </div>
            </div>
            <div className="  flex flex-col py-1 px-3 bg-[#433C62] rounded-[25px]">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none  placeholder:text-[#D2D2D2]  placeholder:font-robotomono text-xs"
                  type={showPassword ? "text" : "password"}
                  placeholder="Transaction Amount"
                />
                </div>
             
             </div> 
             <div className="flex justify-center items-center ">
              <button class="  w-[50%] bg-[#7189FF] rounded-[35px] my-5 py-2 font-bold text-xl text-white ">
                Send
              </button>
            </div>
             </form>
             </div>
             </div>  
             
      
        <div class="fixed flex flex-col top-0 left-0 h-full w-[5vw] bg-gray-900  ">
        <div class="flex items-center justify-center mt-5">
          <a
            href="/signup"
            class="text-white text-2xl font-semibold uppercase hover:text-gray-400"
          >
            <img className="w-full h-full object-contain" src={profile} />
          </a>
        </div>
        <div class="flex items-center justify-center mt-5">
          <a
            href="/profile"
            class="text-white text-2xl font-semibold uppercase hover:text-gray-400"
          >
            <img className="w-full h-full object-contain" src={profile2} />
          </a>
        </div>
      
      </div>
        <div>

        </div>

      </div>
    );
    };
    
    export default Transaction;
    