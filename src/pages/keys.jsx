import React from 'react'
import logo from '../assets/animation_640_lfusqhls.gif' 
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'

const keys = () => {
    return (
      <div className=' flex flex-col  w-full h-screen  text-white bg-[#242038]'>

        <div className=' flex flex-col justify-around h-[80%] items-center'>
        <div className=' h-[20%] '>
            <img className=' w-[100%] h-[100%] '  src={logo} alt=''/>
        </div>
        <div>
            <h1>You have successfully registered with Proteus!</h1>
            <p>Here are your generated public and private keys</p>
        </div>
        
        <div className=' flex flex-row justify-around w-full '>
            <div className='  py-2 bg-[#7189FF] rounded-xl px-12 text-center my-3 mx-auto'>
                <button>Profile Key</button>
                <AiFillEyeInvisible />
                <AiFillEye />
            </div>
            <div className=' rounded-xl  py-2 bg-[#7189FF]    px-12  text-center my-3 mx-auto'>
                <button>Transaction key</button>
                
                <AiFillEyeInvisible />
                <AiFillEye />
        </div>

        </div>
        </div>
        </div>
    )
  }
  
  export default keys;