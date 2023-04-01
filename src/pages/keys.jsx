import React, { useState } from "react";
import logo from "../assets/animation_640_lfusqhls.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Keys = () => {
  const [showKeys, setShowKeys] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen text-white bg-[#242038]">
      
      <div className="flex flex-col justify-around h-[80%] items-center">
        <div className="h-[20%]">
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </div>
        <div>
          <center>
            <h1>You have successfully</h1>
            <h1>registered with Proteus!</h1>
            <p>
              Here are your generated public and private keys. Keep track of the
              keys as these are sensitive data
            </p>
          </center>
        </div>

        <div className="flex flex-row justify-around w-full ">
          <div className="py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto w-50">
            <button>Profile Key</button>
            {/* {showKeys ? (
              <AiFillEyeInvisible onClick={() => setShowKeys(false)} />
            ) : (
              <AiFillEye onClick={() => setShowKeys(true)} />
            )} */}
          </div>
          <div className="py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto">
            <button>Transaction Key</button>
            {/* {showKeys ? (
              <AiFillEyeInvisible onClick={() => setShowKeys(false)} />
            ) : (
              <AiFillEye onClick={() => setShowKeys(true)} />
            )} */}
          </div>
          <div className="rounded-xl py-2 bg-[#7189FF] px-12 text-center my-3 mx-auto">
            <button>Verification Key</button>
            {/* {showKeys ? (
              <AiFillEyeInvisible onClick={() => setShowKeys(false)} />
            ) : (
              <AiFillEye onClick={() => setShowKeys(true)} />
            )} */}
          </div>
        </div>
      </div>



      <div className="flex flex-row justify-end w-full ">
      <div className="py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 ml-auto">
      <a href="/profile" target="_blank" rel="noopener noreferrer">
      <button>Next</button>
      </a>
      </div>


          
          </div>
        </div>
      
     




    
  );
};

export default Keys;


