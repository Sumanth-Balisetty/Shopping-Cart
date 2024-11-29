import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pf1 from '../../Images/Pf-1.jpg'
import { RiFolderInfoFill, RiFolderUserFill } from 'react-icons/ri'
import { MdPayment } from 'react-icons/md'
import Personal from '../Personal/Personal'
import { FaUser } from 'react-icons/fa6'
const Account = () => {
  const [show,setShow] = useState(false);
  const linkhandler=(id)=>{
    setShow(!show)
  }
  return (
    <div className='flex justify-start relative bg-slate-200 h-[100vh] w-[100%]'>
        <Link to='/home' className='bg-gray-900 text-white p-[10px] rounded-xl absolute top-[10px] right-[10px]'>Back</Link>
        <div className='ml-[90px] mt-[20px]'>
            <div className='flex justify-evenly items-center rounded-[6px] py-[10px] w-[300px] bg-white'>
            <img src={pf1} alt='' className='h-[100px] w-[100px] rounded-full'/>
            <div className='flex flex-col'>
                <p className='text-[15px] font-semibold'>Hello,</p>
                <p className='text-[23px] font-semibold'>G.Saiteja</p>
            </div>
            </div>
            <div className='flex flex-col mt-[15px] w-[300px]'>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px]'><RiFolderInfoFill className='text-blue-500'/> MY ORDERS</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><FaUser className='text-blue-500'/> ACCOUNT SETTING</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50' onClick={()=>linkhandler(1)}>Personal Information</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>Manage Addresses</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>Pan Card Information</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><MdPayment  className='text-blue-500'/> PAYMENTS</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>Gift Cards</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>Saved Upi</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>Saved Cards</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><RiFolderUserFill className='text-blue-500'/> MY STUFF</Link>            </div>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>My Coupons</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>My Reviews & Ratings</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>All Notifications</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50'>My Wishlist</Link>
        </div>
        <div className='bg-cyan-50 h-[auto] w-[70%] mt-[20px] ml-[50px] rounded-[6px]' >
            {show  ? <Personal/> : ''}
        </div>
    </div>
  )
}

export default Account