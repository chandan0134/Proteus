import React, { useState } from "react";
import login from "../assets/signup-bg.jpg";
import logo from "../assets/logo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" w-full h-screen bg-[#242038] ">
      <div className=" px-5 py-3">
        <img className=" w-[10%]   object-contain" src={logo} alt="" />
      </div>
      <div className=" w-full h-[92vh] grid grid-cols-1 sm:grid-cols-2 bg-[#242038] ">
        <div className=" flex flex-col justify-center items-center ">
          <form className=" max-w-[400px] w-full mx-auto  px-4  rounded-xl ">
            <h1 className=" text-4xl text-center font-bold pt-6 pb-4 text-white">
              Welcome
            </h1>
            <div className="  flex flex-col  px-3  bg-[#433C62] rounded-[12px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="email"
                placeholder="Email ID"
              />
            </div>
            <div className="  flex flex-col  px-3  bg-[#433C62] rounded-[12px] my-3 ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="  flex flex-col  px-3  bg-[#433C62] rounded-[12px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="tel"
                placeholder="Contact No"
              />
            </div>
            <div className="  flex flex-col  px-3  bg-[#433C62] rounded-[12px] my-3 ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="  flex flex-col  px-3  bg-[#433C62] rounded-[12px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="number"
                placeholder="Age"
              />
            </div>
           
            <div className="  flex flex-col  px-3 bg-[#433C62] rounded-[12px] my-3 ">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute inset-y-0 right-0 p-2 flex items-center text-white"
                >
                  {showPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className="  flex flex-col  px-3 bg-[#433C62] rounded-[12px]">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none  placeholder:text-[#D2D2D2]  placeholder:font-robotomono text-xs"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute inset-y-0 right-0 p-2 flex items-center text-white"
                >
                  {showPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </div>
            </div>
            <div className=" font-robotomono my-3 text-center text-white text-sm">
              <p>
                Have an account?{" "}
                <a href="/login" className=" text-indigo-500">
                  Sign In
                </a>{" "}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button class="  w-[50%] bg-[#7189FF] rounded-[35px] my-5 py-2 font-bold text-xl text-white ">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className=" hidden sm:block rounded-lg">
          <img className="w-full h-full object-contain" src={login} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
