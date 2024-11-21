import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { LuInstagram } from 'react-icons/lu'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-center bg-gray-300 flex-col py-12 px-28 absolute bottom-0 left-0 right-0 rounded-lg'>
         <p className='h-24 bg-orange-100 w-24 mb-10'></p>
        <div className='text-black flex gap-8 font-medium text-lg '>
            <Link to='/'>WHAT IS FRANCHISING</Link>
            <Link to='/'>WHY US</Link>
            <Link to='/'>INVESTMENT</Link>
            <Link to='/'>OUR STORY</Link>
            <Link to='/'>OUR CULTURE</Link>
            <Link to='/'>GROWTH MARKETS</Link>
            <Link to='/'>RESEARCH</Link>
        </div>
        <div className='flex gap-6 font-bold mt-6' >
        <Link to='/' ><ImFacebook2 className="transition text-3xl ease-in  hover:translate-1 hover:scale-110 hover: duration-100"/></Link>
        <Link to='/'><LuInstagram  className="transition text-3xl ease-in  hover:translate-1 hover:scale-110 hover: duration-100"/></Link>
        </div>
        <div className='mt-7 text-xs text-center  '>
          <p>The sun sets slowly, casting long shadows across the field. A gentle breeze whispers through the tall grass, carrying the scent of summer's end. A moment of quiet peace before the night descends.The sun sets slowly, casting long shadows across the field. A gentle breeze whispers through the tall grass, carrying the scent of summer's end. A moment of quiet peace before the night descends.</p>
        </div>
    </div>
  )
}

export default Footer