import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='h-[100%] w-[100%] text-center'>
      <div className='flex '>
        <Link to='/'
          className='bg-gray-900 text-white font-bold text-xl px-[10px] py-[20px] w-[40px] h-[20px] flex justify-center items-center rounded-full subpixel-antialiased '>
          <FaArrowLeft/>
        </Link>
        <h1 className='text-3xl font-bold tracking-wider bg-yellow-500 w-[200px]'>Your Cart</h1>
        </div>
    </div>
  )
}

export default Cart