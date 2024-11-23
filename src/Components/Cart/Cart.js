import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='h-[100%] w-[100%] text-center relative'>
      <div className='flex justify-center flex-col items-center'>
        <Link to='/'
          className='bg-gray-900 text-white font-bold text-xl px-[10px] py-[20px] w-[40px] h-[20px] flex justify-center items-center rounded-full subpixel-antialiased absolute top-[30px] left-[30px]'>
          <FaArrowLeft/>
        </Link>
        <h1 className='text-3xl font-bold text-white tracking-wider bg-gray-900 w-[200px] mt-[25px] rounded-xl p-[10px] subpixel-antialiased'>Your Cart</h1>
        <div className='h-[100vh] w-[80%] bg-amber-50 rounded-xl mt-[40px] flex flex-col justify-center items-center'>
          <p className='text-black text-xl'>Your Cart Is Empty.</p>
          </div>
        </div>
    </div>
  )
}

export default Cart