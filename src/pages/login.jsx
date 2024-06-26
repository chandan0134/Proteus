import React, { useState } from "react";
import login from "../assets/signup-bg.jpg";
import logo from "../assets/logo.png";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [pubKey, setPubKey] = useState("");
  const [pvtKey, setPvtKey] = useState("");

  const navigate = useNavigate();

  const handleLogin=async(e)=>{
    e.preventDefault()
    const data = {
      aes_key_:pubKey,
      pvt_key_:pvtKey,
      password
    }
    console.log("data",data)

    axios.post("https://barclays-hack-backend.onrender.com/login", data)
    .then((res)=>{
      const data =JSON.parse(res.data)
      console.log("res", data)
      if(data.Password){
        navigate('/profile',{state:{userdata:data,formdata:{}}});
      }
    })
  }
  return (
    <div className=" w-full h-screen bg-[#242038] ">
      <div className=" px-5 py-3">
      <img className=" w-[10%]   object-contain" src={logo} alt=""/>
      </div>
      <div className=" w-full h-[92vh] grid grid-cols-1 sm:grid-cols-2 bg-[#242038] ">
        <div className=" flex flex-col justify-center items-center ">
          <form className=" max-w-[400px] w-full mx-auto  p-4 rounded-xl ">
            <h1 className=" text-4xl text-center font-bold py-6 text-white">
              Welcome
            </h1>
            <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[25px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="Public Key"
                value={pubKey}
                onChange={(e) => setPubKey(e.target.value)}
              />
            </div>
            <div className="  flex flex-col py-1 px-3 bg-[#433C62] rounded-[25px] my-6 ">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <div className="  flex flex-col py-1 px-3 bg-[#433C62] rounded-[25px]">
              <div className=" relative ">
                <input
                  className="  bg-transparent p-2 text-[#D2D2D2] focus:outline-none  placeholder:text-[#D2D2D2]  placeholder:font-robotomono text-xs"
                  type="text"
                  placeholder="Private Key"
                  value={pvtKey}
                  onChange={(e) => setPvtKey(e.target.value)}
                />
                {/* <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute inset-y-0 right-0 p-2 flex items-center text-white"
                >
                  {showPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button> */}
              </div>
            </div>
            <div className=" font-robotomono my-3 text-center text-white text-sm">
              <p>
                Don’t have an account?{" "}
                <a href="/signup" className=" text-indigo-500">
                  Sign up
                </a>{" "}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button className="  w-[50%] bg-[#7189FF] rounded-[35px] my-5 py-2 font-bold text-xl text-white " onClick={handleLogin}>
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

export default Login;
