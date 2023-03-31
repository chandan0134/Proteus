import React, { useState } from "react";
import logo from "../assets/animation_640_lfusqhls.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const keys = () => {
    const [show, setShow] = useState(false)
    return (
    <div className=" flex flex-col  w-full h-screen  text-white bg-[#242038]">
      <div className=" flex flex-col justify-around h-[80%] items-center">
        <div className=" h-[20%] ">
          <img className=" w-[100%] h-[100%] " src={logo} alt="" />
        </div>
        <div>
          <center>
            <h1>You have successfully </h1>
            <h1>registered with Proteus!</h1>
            <p>
              Here are your generated public and private keys. Keep track of the
              keys as these are sensitive data
            </p>
          </center>
        </div>

        <div className=" flex flex-row justify-around w-full ">
          <div className="  py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto">
            <button>Profile Key</button>
            {!show&&<AiFillEye
              onClick={() => {
                setShow(true);
              }}
            //   className={}
            />}
            {show&&<AiFillEyeInvisible
              onClick={() => {
                setShow(false);
              }}
            />}
          </div>
          <div className="  py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto">
            <button>Profile Key</button>
            <AiFillEyeInvisible />
            <AiFillEye />
          </div>
          <div className=" rounded-xl  py-2 bg-[#7189FF]    px-12  text-center my-3 mx-auto">
            <button>Transaction key</button>

            <AiFillEyeInvisible />
            <AiFillEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default keys;
