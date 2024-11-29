import React from 'react'

const Wishlist = () => {
  return (
    <div className='mt-[30px] ml-[30px] w-[70%] bg-white '>
        <h1 className='text-[20px] text-black py-[20px] px-[25px] font-semibold'>My WishList(0)</h1>
        <div className='border-t-2 p-[120px] text-center'>
            <p className='text-xl text-black'>Your WishList is empty</p>
        </div>
    </div>
  )
}

export default Wishlist