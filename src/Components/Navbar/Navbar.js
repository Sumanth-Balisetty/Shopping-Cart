import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
const Navbar = ({count}) => {
  return (
    <div>
    <div className='header sticky top-0 z-10'>
        <div className='navbar flex items-center bg-gray-900 p-5 rounded-xl mt-[10px] '>
        <label className="relative block w-[400px]">
            
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
               <FaSearch/>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
            <div className='navbar-cart flex justify-center items-center p-[10px] gap-[2px]'>
                
                <Link to='/cart'><FaCartShopping className='text-3xl text-white'/></Link>
                <span className=' text-white text-lg  flex justify-center items-center rounded-lg'>{count}</span>
            </div>
        </div>
    </div>
    <Homepage count={count} />
    </div>
  )
}
export default Navbar