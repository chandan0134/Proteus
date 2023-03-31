import React from 'react'
import img from '../assets/signup-bg.jpg'

const login = () => {
  return (
    

    <div className=' w-full h-screen grid grid-cols-2 bg-[#242038] '>
    
      <div className=' flex flex-col justify-center items-center text-white'>
        <div className=' flex flex-col justify-center items-center '>
            <h1>welcome</h1>
            <form className=' w-full  '>
                <div className='  w-full p-2 bg-[#433C62] rounded-xl my-3'>
                <input className='  bg-transparent text-black placeholder:text-[#D2D2D2]' type='text' placeholder='username'/>
                </div>
                <div className='  w-full p-2 bg-[#433C62] rounded-xl my-3'>
                <input className='  bg-transparent text-black placeholder:text-[#D2D2D2]' type='password' placeholder='password'/>
                </div>
                <div><p>Don’t have an account? <a href='/signup'>Sign up</a> </p></div>
                <div className='  w-[60%]  py-2 bg-[#7189FF] rounded-xl text-center my-3 mx-auto '>
                <button class="rounded-full mx-auto text-center">log in</button>
                </div>
            </form>
        </div>
      </div>
      
      <div className=' flex flex-col justify-center items-center text-white'>
        <img className=' object-contain' src={img}/>
      </div>
    </div>
  )
}

export default login
