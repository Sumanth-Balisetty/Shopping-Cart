import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa6'

const Orders = () => {
  return (
    <div className='pt-[30px] pl-[30px] flex h-[100vh] w-[100%] bg-cyan-50' >
        {/* <p className='bg-white h-[20px] py-[25px] px-[20px] flex items-center rounded-full'><FaArrowLeft/></p> */}
        <div className='w-[300px] h-[500px] bg-white flex flex-col gap-[10px] rounded-sm border-gray-300 border-[0.5px]  px-[20px] py-[20px] shadow-lg mr-[40px]'>
            <h1 className='text-xl font-bold'>Filters</h1>
            <p className='text-[18px] font-semibold mt-[10px]'>ORDER STATUS</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>On the Way</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>Delivered</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>Cancelled</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>Returned</p>
            <p className='text-[18px] mt-[10px] font-semibold'>LAST 30 DAYS</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>2024</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>2023</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>2022</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>2021</p>
            <p className='text-[15px] flex items-center gap-[10px]'><input type='checkbox'/>Older</p>

        </div>
        <div className='flex flex-col w-[100%]'>
        <div className='flex relative w-[700px] flex-col ml-[40px]'>
            <input type='text' placeholder='Search Orders' className='h-[42px] w-[700px] bg-cyan-50 outline-none border-[0.5px] border-gray-400 p-[10px] rounded-[6px]'/>
            <p className='absolute right-0 flex items-center top-[1px] gap-[10px] bg-blue-500 h-[40px] text-white font-semibold  px-[20px] rounded-r-[6px]' ><FaSearch/>Search</p>
        </div>
        <div className='p-[20px] h-[500px] bg-white rounded-sm shadow-lg mt-[20px] w-[90%] text-center flex items-center justify-center'>
                <p>You Have not Orderd Yet</p>
            </div>
            </div>
    </div>
  )
}

export default Orders