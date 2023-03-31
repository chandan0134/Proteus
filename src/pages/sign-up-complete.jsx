import React from 'react'
import logo from '../assets/animation_640_lfusqhls.gif' 



const SignUpComplete = () => {
    return (
      <div className="relative bg-gray w-full h-[1117px] overflow-hidden text-center text-[64px] text-white font-gilroy">
        <p className="m-0 absolute top-[296px] left-[422px] font-extrabold flex items-center justify-center w-[885px] h-48">
          You have successfully registered with Proteus!
        </p>
        <p className="m-0 absolute top-[484px] left-[422px] text-11xl font-light flex items-center justify-center w-[885px] h-[74px]">
          Here are your generated public and private keys
        </p>
        <p className="m-0 absolute top-[21px] left-[14px] text-[36px] font-bold font-aquire flex items-center justify-center w-[223px] h-[62px] Aquire">
          Proteus
        </p>
        <button className="cursor-pointer [border:none] p-0 bg-darkslateblue absolute top-[980px] left-[1344px] rounded-[35px] w-[281px] h-[88px]" />
        <div className="absolute top-[1002px] left-[1384px] text-[42px] font-extrabold flex items-center justify-center w-[150px] h-[43px]">
          Next
        </div>
        <img
          className="absolute top-[994px] left-[1527px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/materialsymbolsarrowrightalt.svg"
        />
       <div className=' h-[20%] '>
            <img className=' w-[100%] h-[100%] '  src={logo} alt=''/>
        </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[608px] left-[143px] w-[439px] h-[83px]">
        <div className="absolute top-[0px] left-[0px] w-[439px] h-[83px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-royalblue w-[439px] h-[83px]" />
          <b className="absolute top-[17px] left-[35px] text-11xl flex font-roboto-mono text-white text-center items-center justify-center w-[247px] h-[49px]">
            Profile Key
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[346px] w-11 h-11 overflow-hidden">
          <img
            className="absolute h-[62.5%] w-[91.67%] top-[18.75%] right-[4.17%] bottom-[18.75%] left-[4.17%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </button>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[608px] left-[1147px] w-[439px] h-[83px]">
        <div className="absolute top-[0px] left-[0px] w-[439px] h-[83px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-royalblue w-[439px] h-[83px]" />
          <b className="absolute top-[17px] left-[35px] text-11xl flex font-roboto-mono text-white text-center items-center justify-center w-[300px] h-[49px]">
            Transaction Key
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[346px] w-11 h-11 overflow-hidden">
          <img
           className="absolute h-[62.5%] w-[91.67%] top-[18.75%] right-[4.17%] bottom-[18.75%] left-[4.17%] max-w-full overflow-hidden max-h-full"
           alt=""
           src="/vector1.svg"
         />
       </button>
     </button>
     <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[608px] left-[645px] w-[439px] h-[83px]">
       <div className="absolute top-[0px] left-[0px] w-[439px] h-[83px]">
         <div className="absolute top-[0px] left-[0px] rounded-6xl bg-royalblue w-[439px] h-[83px]" />
         <b className="absolute top-[17px] left-[35px] text-11xl flex font-roboto-mono text-white text-center items-center justify-center w-[300px] h-[49px]">
           Private Key
         </b>
       </div>
       <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[346px] w-11 h-11 overflow-hidden">
          <img
            className="absolute h-[62.5%] w-[91.67%] top-[18.75%] right-[4.17%] bottom-[18.75%] left-[4.17%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </button>
      </button>
    </div>
  );
};

export default SignUpComplete;