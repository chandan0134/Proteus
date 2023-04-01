import React, { useState } from "react";
import profile from "../assets/home icon.png";
import profile2 from "../assets/user icon.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/Transactions.png";

const Profile = () => {
  return (
    <div className=" w-full h-screen bg-[#242038] ">
      <div className="px-5 py-3">
         <img className="w-[10%] object-contain" src={logo} alt="" style={{ marginLeft: '50px' }} />
       </div>
       <div className="px-5 py-3 text-white">
       <center> 
       <p>Hello Priyankush!</p>
       </center>
       </div>
       <div className="px-5 py-3 flex flex-row text-white" style={{ marginLeft: '50px' }}>
          <p>Secure using two way authetication</p>
       </div>
       <div class="border border-red-500 border-opacity-50 border-2"></div>
    <div class="flex h-screen bg-[514976]">
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
      {/* <div class="flex-grow p-6">
        <h1 class="text-6xl font-semibold">HEllo priyankush</h1>
      </div> */}
      {/* <div class="w-full h-[92vh] grid grid-cols-1 sm:grid-cols-2">
      <div className=" flex flex-col justify-center items-center "><h1>user data</h1></div>
      <div className=" flex flex-col justify-center items-center "><h1>transaction data</h1></div>
      </div> */}
      <div className="flex flex-col w-full h-screen text-white bg-[#242038]">
      <div className="flex flex-col justify-around h-[20%] w-full items-center flex-row">
      {/* <div className="px-5 py-3 flex flex-row text-white" style={{ marginLeft: '50px' }}>
      <p>user details</p>
      </div>
      <div className="px-5 py-3 flex flex-row text-white" style={{ marginLeft: '100px' }}>
      <p>Transaction details</p>
      </div> */}

<div class="flex flex-col">

  <div class="py-1 px-3  my-3 flex justify-between">
    <div class=" w-[50%] p-4 ml-35">User Details</div>
    <div class="w-[50%] p-4 mr-35">Transaction details</div>
    </div>
  </div>
      </div>
      </div>


    
</div>
     </div>
     
    

      
      

   
  );
};

export default Profile;
