import React, { useState } from "react";
import profile from "../assets/home icon.png";
import profile2 from "../assets/user icon.png";

const Profile = () => {
  return (
    <div className=" w-full h-screen bg-[#242038] ">
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
       <div className="flex flex-col justify-around h-[30%] w-[90vw] items-center">
        <center><p >Hello </p></center>
       </div>

       <div className="flex flex-col justify-around h-[70%] items-center">
       
        <div class="rid grid-cols-2 gap-4">

        <div class="col-span-3">Column 1</div>
        <div class="col-span-2">Column 2</div>
        <div class="col-span-1">Column 3</div>
        <div class="col-span-1">Column 4</div>
        <div class="col-span-1">Column 5</div>

        </div>

        <div>
          
        </div>
      </div>



      </div>
      </div>
    </div>
   
  );
};

export default Profile;
