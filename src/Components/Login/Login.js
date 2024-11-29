import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom';
const Login = () => {
    const [show,setShow] = useState(true);
    const handler = ()=>{
        setShow(!show)
    }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100%] bg-slate-800'>
        <div className='h-[500px] relative w-[400px] bg-gray-700 flex  flex-col justify-end text-center rounded-xl items-center'>
        <h1 className='absolute top-[20px] text-3xl text-white font-bold font-mono italic shadow-sm'>Shopify</h1>
            <div className='w-[80%] flex flex-col gap-[15px]'>
                <div className='flex flex-col text-start relative gap-[5px]'>
                    <label className='text-white text-lg font-semibold'>Email</label>
                    <input type='email' placeholder='Enter Your Email ID' className='p-[10px] outline-none rounded-xl text-lg font-semibold placeholder:text-sm '/>
                    <MdEmail className='text-[21px] absolute right-[8px] top-[46px] ' />
                </div>
                <div className='flex flex-col text-start relative gap-[5px]'>
                    <label className='text-white text-lg font-semibold'>Password</label>
                    <input type='password' placeholder='Enter Your Password' className='p-[10px] outline-none rounded-xl text-lg font-semibold placeholder:text-sm '/>
                    {show ? <IoEyeOff className='text-[21px] absolute right-[8px] top-[46px]' onClick={handler} /> :<IoEye className='text-[21px] absolute right-[8px] top-[46px] ' onClick={handler}/>}
                </div>
                <div className='flex items-center justify-between'>
                    <label className='flex items-center gap-[5px] text-white'><input type='checkbox'/>RememberMe</label>
                    <Link to='/' className='text-white hover:underline' > ForgotPassword</Link>
                </div>
                <div className='text-center mt-[15px]'>
             <Link to='/home' className='bg-neutral-900 py-[7px] px-[50px] rounded-xl  border-2 border-solid  text-white text-lg font-bold transition duration-200 ease-in-out hover:bg-slate-800 '>Login</Link>
             </div>
             <div className='text-white text-center w-[100%] mt-[20px] mb-[40px]'>
                <p className='flex justify-between'>Dont have An Account? <a href='/' className='hover:underline'>Register Here</a></p>
             </div>
             </div>
        </div>
    </div>
  )
}

export default Login