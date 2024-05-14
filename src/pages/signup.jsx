import React, { useContext, useEffect, useState } from "react";
import login from "../assets/signup-bg.jpg";
import logo from "../assets/logo.png";
import axios from "axios"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import KeyContext from "../context/keys/KeyContext";
import { useNavigate } from "react-router-dom";
  

const  Signup =  () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const KeycontextState = useContext(KeyContext)


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.get("https://barclays-hack-backend.onrender.com/paillier/generatekeys");
  
      console.log("Response from server:", response);
  
      // Check if the response contains the expected data
      if (!response.data || !response.data.encodedPub || !response.data.encodedPvt) {
        throw new Error("Invalid response from server");
      }
  
      const publicKey = atob(response.data.encodedPub);
      const encPvt = atob(response.data.encodedPvt);
  
      // Update the context state with the received keys
      KeycontextState.update({ publicKey, encPvt });
  
      const formdata = {
        name: name,
        contactNo: contactNo,
        gender: gender,
        age: age,
        transactionKey: publicKey,
        keyHash: encPvt,
        password: password
      };
  
      console.log(formdata);
      
  //     axios.post("https://barclays-hack-backend.onrender.com/signUp", formdata, {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  // .then((signupResponse) => {
  //   console.log(signupResponse.data);
  //   alert("Signup successful");
  //   // Redirect to login page
  //   navigate("/keys");
  // })
  // .catch((error) => {
  //   console.error(error);
  //   alert("Error signing up. Please try again later.");
  // });

      const signupResponse = {
        "res": {
            "Nonce": "A60Oyra7mBGWaAIRE3ZVaw==",
            "Tag": "D8WifNXlZET+XPOvWrLSgg==",
            "enc_aes_b": "Po2lJF3VhsVedDYyncgmwmIj87zAogoA0/+5yvzYuVRfXgXA8yJHkoPKCpzT2D0KfvDPGZwol41M85HUE18wKKYxzg7W4/EypSWqJ+o/3BBUp+EylF/vscMKEbATaH7SrsKuDYYAcGTkooPnj8aKP5LWmkSrUcWH9klba1fEWLU=",
            "enc_aes_u": "qjwl7ins4rsPYfC81CCH73d3+Zs1KnnW66ZaeyAHg3FbH2nz46gxbdHA3Dyu7q75vFrls3OI+PZLXFaj+T5EO0f8lTgBPh04y3mpEQi0lO+KGLaTjQCDclG9+iFngIbI46/VPU0cX0p36OBp9YGH8RTlyTu+b4gIpHRcjy0N7SU=",
            "encdata": "QavrdP5CQVtht4pIrujpYh6Q5yf+qXeKpvkecL4cgxPQuu5DaF0dqdiHiCALrWpRc8fv9ReQIf2sdHLRd9mM3W4sV3Scx21FnXoPVLc9IOhzYzvtsJGujy926gn4HSXRMLxd+UpoV5KbWqCBMe6BWwDPkdcHvQFH1wtjnS3IO+oek/F1OgBAp5x//MgLWBr3QNdy+JI4OQI9kDig2S0Ljsj3J6tdKhQ2b479JUcdF5JtTL0sK1W/LJaLUDoodQ+Asf279xUkDIsngYMDC5BsWG+3TD7l3mm/1sXof+n/HMSqXXMlI1uG/u6QvdsEz2h2oXwKNbBiOjsvs4tb3B1SRzepiV3Ycw/FjsSrtzM25WgCZ3z7Uz4a0IiOcaGdycVbE9lBwWMGL+M86WPKPdThL/UcLtZlUM5wfuiY1Pfv5mD5UswxswttH8YOMiWR2e/6/R41VgM+Ax7AQ1VFqMNd3uTZdsxRbw==",
            "userPvtKey": "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWEFJQkFBS0JnUUM0ZVIvTDRjWXdJUjZKUDA3OUVaamlXZm9LWGJETE9RZHNZcFJYdGtyZTAwTFI5NmVnCjZLeWJPTjBNZkp2bzBpeFRoZU9VekYxcWV1UUc0Tk9qM2ZDaEI1cXVRQldFejBqN3FBTkh6bk10SkZ2Z1ZNT2EKZU9xdGgzV0pBR1ZTU2NKK2oveFhEenhmU3c0ZlhwYjhGbGtrbkRGK2dlRHRSc1psTGF3aTh6N29tUUlEQVFBQgpBb0dBQ1N1c1V2eGtWOXd0b25FTlFqTnZ3RURzMXpzVklPVXk0MFo3VFdqNGk5OUF3U05vcCswcE40WTZKdmJDCjRXNGhXZjJiOUxlOEpTRDYyUVN3UU1NMXhSWGowSTZrOXBlbW9VUXlTVWdqNUt0M013UWIvNm9YeG1yeFpuYUsKai95NGZlVW9uaWZQckRhazFnT2JmdW5Yczlmam0zWjhEa1JKU3VMYkhsNXI2TWtDUVFER2pIdm54ZzE1QWtpdwpodUUxaXdvMmdJRE42eERGa3Q1ajFOaE5rZVBoaXVvajAwNHQ3eFFrdE52UEhTa3dDcXBXaWVDY0wwL1FVMktOCkY4dGxhSnRYQWtFQTdkbjh1RjRrSjlJRlA4K1RNZUZRdGV2V0VzbklqZFByTm9BTW93ZTRvNVV4bWdJZGJ1aTIKN2xIN3RSTFpQTmxFWnJNanlJQmVHb3paSUtoY2RqNFZqd0pBY0tGVzFJYjBNNVlKR0NLYmROMDM0TzBLcEVWWgprVXFjWDNOcGRLOXkzd29IZ21VbTcwVzFYcEUrTkFKdHovUHM1d1IxNXdPcnVoampTZmlhaUI5TUp3SkJBSkpSClUwSW54NTRuZU1zMGFweDR1eW51bHBhZ1F4dmNqZ25NNC9rMnVzTUcrS2lCUEpJSjN0N2syQzhnRlR0MWZMcWcKNFJacXdYa2J4RVp1eTlLQmhza0NRQlhYTEZ0Q21QbjVsZFRLRzlMaXhXWHVzUElaSE5QZEwrL0VqVFZWWUFxbQpmTURyYk9lYjZYakt3QWI2Tmt1bDdVM3h3ZGp1Y0o0Zko4SjJwU1Bzb0pFPQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ=="
        },
        "pvt_key": "eyJsYW1iZGEiOiI3OTQ0MTgyMDExODA2Mzk3OTk0IiwibXUiOiI3OTc5MjEwMzQxOTMzMTYzODIxIiwiX3AiOiI1MDkwMTkzODg3IiwiX3EiOiIzMTIxMzY3MTU5In0=",
        "hashed": "$2a$08$.J./4TM7IR4/tSClcH03oOWchMDlmIrwjSP8eRGFmQXJBP3uUUujy"
    }

    // now navigate to the keys page and pass the enc_aes_u, userPvtKey and pvt_key to the keys page
    navigate("/keys", { state: { enc_aes_u: signupResponse.res.enc_aes_u, userPvtKey: signupResponse.res.userPvtKey, pvt_key: signupResponse.pvt_key } });
    
    
    } catch (error) {
      console.error(error);
      alert("Error signing up. Please try again later.");
    }
  }

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
