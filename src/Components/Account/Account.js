import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pf1 from '../../Images/Pf-1.jpg'
import { RiFolderInfoFill, RiFolderUserFill } from 'react-icons/ri'
import { MdPayment } from 'react-icons/md'
import Personal from '../Personal/Personal'
import { FaUser } from 'react-icons/fa6'
import Wishlist from '../Wishlist/Wishlist'
import Orders from '../Orders/Orders'
const Account = () => {
  const [show,setShow] = useState(false);
  const [fullname,setFullname] = useState('G.v.s.Saiteja');
  const linkhandler=(id)=>{
    setShow(!show)
    setShow2(false)
    setShow3(false)
  }
  const [show2,setShow2] = useState(false);
  const linkhandler2=()=>{
    setShow2(!show2)
    setShow(false)
    setShow3(false)
  }
  const [show3,setShow3] = useState(false);
  const linkhandler3=()=>{
    setShow3(!show3)
    setShow2(false)
    setShow(false)
  }
  return (
    <div className='flex justify-start relative bg-slate-200 h-[100vh] w-[100%]'>
        <Link to='/home' className='bg-gray-900 text-white p-[10px] rounded-xl absolute top-[10px] right-[10px]'>Back</Link>
        <div className='ml-[90px] mt-[20px]'>
            <div className='flex justify-evenly items-center rounded-[6px] py-[10px] w-[300px] bg-white'>
            <img src={pf1} alt='' className='h-[100px] w-[100px] rounded-full'/>
            <div className='flex flex-col'>
                <p className='text-[15px] font-semibold'>Hello,</p>
                <p className='text-[23px] font-semibold'>{fullname}</p>
            </div>
            </div>
            <div className='flex flex-col mt-[15px] w-[300px]'>
            <Link className={`text-[20px] font-semibold p-[20px] text-gray-500 ${!show3 ? 'bg-white' : 'bg-cyan-50'} flex items-center gap-[20px]`} onClick={linkhandler3} ><RiFolderInfoFill className='text-blue-500' /> MY ORDERS</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><FaUser className='text-blue-500'/> ACCOUNT SETTING</Link>
            <Link className={`text-[17px]  ${!show ? 'text-gray-600 bg-white font-normal': 'bg-cyan-50 font-semibold text-sky-600'}  p-[10px]  flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold`} onClick={()=>linkhandler(1)}>Personal Information</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>Manage Addresses</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>Pan Card Information</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><MdPayment  className='text-blue-500'/> PAYMENTS</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>Gift Cards</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>Saved Upi</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>Saved Cards</Link>
            <Link className='text-[20px] font-semibold p-[20px] text-gray-500 bg-white flex items-center gap-[20px] border-t-2'><RiFolderUserFill className='text-blue-500'/> MY STUFF</Link>            </div>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>My Coupons</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>My Reviews & Ratings</Link>
            <Link className='text-[17px] font-normal text-gray-600 p-[10px] bg-white flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold'>All Notifications</Link>
          <Link className={`text-[17px] ${!show2 ? 'text-gray-600 bg-white font-normal': 'bg-cyan-50 font-semibold text-sky-600'} p-[10px] flex items-center justify-start pl-[60px]  gap-[20px] hover:bg-cyan-50 hover:text-sky-600 hover:font-semibold`} onClick={linkhandler2} >My Wishlist</Link>
        </div>
        <div className='bg-cyan-50 h-[auto] w-[70%] mt-[20px] ml-[50px] rounded-[6px]' >
            {show  ? <Personal setFullname={setFullname} fullname={fullname}/>  : ''}
            {show2 ? <Wishlist/>: ''}
            {show3 ? <Orders/>: ''}
        </div>
    </div>
  )
}

export default Account