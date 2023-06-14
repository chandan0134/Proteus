import React, { useContext, useState } from "react";
import logo from "../assets/animation_640_lfusqhls.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import KeyContext from "../context/keys/KeyContext";
import logo1 from "../assets/logo.png";


const Keys = () => {
  
  const [showKeys, setShowKeys] = useState(false);
  const KeycontextState = useContext(KeyContext)
  console.log(KeycontextState)

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

        <div className="items-center text-1xl ">
          <center>
           <h1>ifhoeijeqofjepofkq</h1>
          </center>
        </div>
      
        
        


        <div className="flex flex-row justify-around w-full ">
          <div className="py-2 bg-[#7189FF] flex flex-col items-center rounded-xl px-8 text-center my-3 mx-auto w-50">
            <div className="flex flex-row justify-between items-center">
            <div  className=" px-2"><button>Profile Key</button></div>
            {showKeys ? (
              <div className=" px-2 text-black"><AiFillEyeInvisible onClick={() => setShowKeys(false)} /></div>
            ) : (
              <div className=" px-2 "><AiFillEye onClick={() => setShowKeys(true)} /></div>
            )}
            </div>
            <div className={showKeys?"hidden":""}>abc</div>
          </div>
          <div className="py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto">
            <button>Transaction Key</button>
            {showKeys ? (
              <AiFillEyeInvisible onClick={() => setShowKeys(false)} />
            ) : (
              <AiFillEye onClick={() => setShowKeys(true)} />
            )}
          </div>
          <div className="rounded-xl py-2 bg-[#7189FF] px-12 text-center my-3 mx-auto">
            <button>Verification Key</button>
            {showKeys ? (
              <AiFillEyeInvisible onClick={() => setShowKeys(false)} />
            ) : (
              <AiFillEye onClick={() => setShowKeys(true)} />
            )}
          </div>
        </div>





        <div class="flex flex-col h-screen justify-end">
          <div class="flex flex-row justify-between absolute bottom-0 left-0 right-0 p-4">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-md">Button 1</button>
          <button class="bg-red-500 text-white py-2 px-4 rounded-md">Button 2</button>
        </div>


      </div>
    </div>
  </div>
  );
};

export default Keys;


