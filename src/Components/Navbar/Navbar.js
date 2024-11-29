import './Navbar.css'
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { RiFolderInfoFill } from 'react-icons/ri'
import { useState } from 'react';
import { FcOnlineSupport } from 'react-icons/fc';
import { IoTerminalOutline } from 'react-icons/io5';
const Navbar = ({count},{clicked}) => {
const [show,setShow] = useState(false);
const hanlderNav = ()=>{
  setShow(!show)
}
  return (
    <div>
    <div className='header sticky top-0 '>
        <div className='navbar flex items-center bg-gray-900 p-5 rounded-xl mt-[10px] relative '>
        <label className="relative block  w-[300px] lg:w-[400px]">
            
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
               <FaSearch/>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        <h1 className='text-transparent lg:text-white text-3xl absolute left-[50%] font-semibold font-sans italic '>Shopify</h1>
            <div className='navbar-cart flex justify-center items-center p-[10px] gap-[2px]'>
                
                <Link to='/cart'><FaCartShopping className='hidden  lg:block text-white text-3xl '/></Link>
                <span className='text-transparent lg:text-white text-lg  flex justify-center items-center rounded-lg '>{count}</span>
                <div className='ml-[30px] flex items-center'>
                <button className='text-white text-4xl ' onClick={hanlderNav}>{show?<ImMenu3/>:<ImMenu4/>}</button></div>
            </div>
        </div>
        {show && <div className='h-[700px] lg:h-[650px] w-[250px] absolute right-[97px] top-[89px] bg-gray-900 rounded-lg flex flex-col items-center justify-start py-[10px] px-[10px]  text-white text-lg text-center font-semibold gap-[20px]'>
          <Link to='/cart'><FaCartShopping className='text-white text-3xl mt-[10px] lg:hidden '/></Link>       
            <Link className='w-[70%] border-transparent border-b-2 hover:border-white items-center flex justify-center gap-[10px]' to='/account'><FaUser/>Account</Link>
            <Link  className='w-[70%] border-transparent border-b-2 hover:border-white items-center flex justify-center gap-[10px]'><RiFolderInfoFill/>  Your Orders</Link>
            <Link  className=' w-[70%] border-transparent border-b-2 hover:border-white items-center flex justify-center gap-[10px]'><FcOnlineSupport/> Help & Support</Link>
            <Link  className='w-[100%] border-transparent border-b-2 hover:border-white items-center flex justify-center gap-[10px]'><IoTerminalOutline />Terms & Conditions</Link>
                          <hr className='border-[1px] border-white w-[100%]' />
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white'>Mens Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white  border-transparent border-b-2 hover:border-white'>Womens Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white '>Kids Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white '>Party Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white '>Ethnic Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white  '>Foot Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white  '>Sports Wear</Link>
            <Link className=' w-[70%] border-transparent border-b-2 hover:border-white  '>Winter Wear</Link>
        </div>}
    </div>
    </div>
  )
}
export default Navbar