import React, { useState } from "react";
import login from "../assets/signup-bg.jpg";
import logo from "../assets/logo.png";
import axios from "axios"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // try {
      axios.get("http://0217-2402-3a80-1c73-aff6-cd86-4e6d-a408-6371.ngrok.io/")
      .then((res)=>{console.log(res)})
    // } catch (error) {
    //   console.error(error);
    //   alert("Error generating keys"); // updated alert message
    //   return; // added return statement to exit the function
    // }
  
    // try {
    //   const response= await fetch("http://192.168.226.85:8000/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       contactNo,
    //       gender,
    //       age,
    //       password,
    //     }),
    //   });
  
    //   const data = await response.json();
    //   if (data.success) {
    //     alert("Signup successful");
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //   } else {
    //     alert(data.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("Error signing up");
    // }
  };
  

  return (
    <div className=" w-full h-screen bg-[#242038] ">
      <div className=" px-5 py-3">
        <img className=" w-[10%]   object-contain" src={logo} alt="" />
      </div>
      <div className=" w-full h-[92vh] grid grid-cols-1 sm:grid-cols-2 bg-[#242038] ">
        <div className=" flex flex-col justify-center items-center ">
          <form
            className=" max-w-[400px] w-full mx-auto  p-4  rounded-xl "
            onSubmit={handleSubmit}
          >
            <h1 className=" text-4xl text-center font-bold pt-6 pb-4 text-white">
              Welcome
            </h1>

            <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] my-3 ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="tel"
                placeholder="Contact No"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] my-3 ">
              <input
                className="  bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                />
                </div>
                <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] ">
                <input
                className=" bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                </div>
                <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] my-3 ">
                <div className="relative">
                <input
                className=" bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                <AiFillEyeInvisible
                className="absolute top-3 right-3 text-[#D2D2D2] cursor-pointer"
                onClick={() => setShowPassword(false)}
                />
                ) : (
                <AiFillEye
                className="absolute top-3 right-3 text-[#D2D2D2] cursor-pointer"
                onClick={() => setShowPassword(true)}
                />
                )}
                </div>
                </div>
                <div className="  flex flex-col py-1 px-3  bg-[#433C62] rounded-[12px] my-3 ">
                <div className="relative">
                <input
                className=" bg-transparent p-2 text-[#D2D2D2] border-transparent focus:outline-none placeholder:text-[#D2D2D2] placeholder:font-robotomono text-xs pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showPassword ? (
                <AiFillEyeInvisible
                className="absolute top-3 right-3 text-[#D2D2D2] cursor-pointer"
                onClick={() => setShowPassword(false)}
                />
                ) : (
                <AiFillEye
                className="absolute top-3 right-3 text-[#D2D2D2] cursor-pointer"
                onClick={() => setShowPassword(true)}
                />
                )}
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
                <button className=" bg-[#6C63FF] text-white w-full rounded-[12px] py-2 text-xs font-bold">
                Signup
                </button>
                </form>
                </div>
                <div className=" hidden sm:block">
                  <img className=" h-full w-full object-cover" src={login} alt="" />
                </div>
              </div>
              </div>
              );
};

export default Signup;
