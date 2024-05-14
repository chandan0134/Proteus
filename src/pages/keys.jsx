import React, { useContext, useState } from "react";
import logo from "../assets/animation_640_lfusqhls.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import KeyContext from "../context/keys/KeyContext";
import logo1 from "../assets/logo.png";
import {useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const Keys = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [encAesU, setEncAesU] = useState("");
  const [userPvtKey, setUserPvtKey] = useState("");
  const [pvtKey, setPvtKey] = useState("");
  const [showKeys, setShowKeys] = useState(false);

  useEffect(() => {
    if (location.state) {
      const { enc_aes_u, userPvtKey, pvt_key } = location.state;
      setEncAesU(enc_aes_u);
      setUserPvtKey(userPvtKey);
      setPvtKey(pvt_key);
    }
  }, [location.state]);

  const handleNext = () => {
    navigate("/login");
  }
  return (

    <div className="flex flex-col w-full h-screen text-white bg-[#242038]">
        <div className=" flex flex-col  py-5 px-8">
          <img className=" w-[10%]   object-contain" src={logo1} alt=""/>
        </div>
        <div className="flex flex-col justify-around h-[80%] items-center">
        <div className="h-[30%] py-2 my-2 ">
          <img className="w-[100%] h-[100%]" src={logo} alt="" />
        </div>

        <div className="items-center text-3xl mx-2">
        <center>
          <h1>You have successfully</h1>
          <h1>registered with Proteus!</h1>
        </center>
        </div>

        <div className="items-center text-1xl  my-3">
          <center>
           <h1>Here are your generated public and private keys. Keep track of the keys as these are sensitive data</h1>
          </center>
        </div>
      
        
        


        <div className=" grid grid-cols-3 gap-20 px-20 w-full my-8">
          <div className="py-2 bg-[#7189FF] flex flex-col items-center rounded-xl px-8 text-center w-full">
            <div className="flex flex-row justify-between items-center">
            <div  className=" px-2"><button>Profile Key</button></div>
            {showKeys ? (
              <div className=" px-2 text-black"><AiFillEyeInvisible onClick={() => setShowKeys(false)} /></div>
            ) : (
              <div className=" px-2 "><AiFillEye onClick={() => setShowKeys(true)} /></div>
            )}
            </div>
            <div className="text-black items-center py-2 font-Roboto Mono">
            <div className={showKeys ? "Mono hidden" : ""}>
              {encAesU.substring(0,30)+"..."}
              </div>
            </div>
            <div className="items-center py-2 ">
              <h1>used to identify user</h1>
            </div>
          </div>

          <div className="py-2 bg-[#7189FF] flex flex-col items-center rounded-xl px-8 text-center w-full">
            <div className="flex flex-row justify-between items-center">
            <div  className=" px-2"><button>Private Key</button></div>
            {showKeys ? (
              <div className=" px-2 text-black"><AiFillEyeInvisible onClick={() => setShowKeys(false)} /></div>
            ) : (
              <div className=" px-2 "><AiFillEye onClick={() => setShowKeys(true)} /></div>
            )}
            </div>
            <div className="text-black items-center py-2 font-Roboto Mono">
            <div className={showKeys ? "Mono hidden" : ""}>
              {pvtKey.substring(0,30)+"..."}

            </div>
            </div>
            <div className="items-center py-2 ">
              <h1>Used to decrypt personal data</h1>
            </div>
          </div>

          <div className="py-2 bg-[#7189FF] flex flex-col items-center rounded-xl px-8 text-center w-full">
            <div className="flex flex-row justify-between items-center">
            <div  className=" px-2"><button>Transaction Key </button></div>
            {showKeys ? (
              <div className=" px-2 text-black"><AiFillEyeInvisible onClick={() => setShowKeys(false)} /></div>
            ) : (
              <div className=" px-2 "><AiFillEye onClick={() => setShowKeys(true)} /></div>
            )}
            </div>
            <div className="text-black items-center py-2 font-Roboto Mono">
            <div className={showKeys ? "Mono hidden" : ""}>
              {userPvtKey.substring(0,30)+"..."}
            </div>
            </div>
            <div className="items-center py-2 ">
              <h1>Used as password during transaction</h1>
            </div>
          </div>

        
       
        </div>





        <div class="flex flex-col h-screen justify-end">
          <div class="flex flex-row justify-between absolute bottom-0 left-0 right-0 p-8">
          <button class="bg-[#433C62] text-white py-4 px-12 rounded-md">BACK</button>
          <button class="bg-[#433C62] text-white py-4 px-12 rounded-md" onClick={handleNext}>NEXT</button>
        </div>


      </div>
    </div>
  </div>
  );
};

export default Keys;


