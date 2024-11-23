import React, { useState } from 'react'
import Store from '../../Store'
import cart from '../../Images/iconCart.png'
import Navbar from '../Navbar/Navbar';
const Homepage = () => {
    const [count,setCount] = useState(0);
    const [added,setAdded] = useState([]);
    const handlerBtn = (id)=>{
        setCount(count+1)
        if(!added.includes(id)){
            setAdded((prev)=>[...prev,id])

        }

    }
    
  return (
    <div>
        <div className='sticky top-0 z-10'>
        <Navbar count={count}/></div>
    <div className='flex justify-center'>
    <div className='flex flex-col z-0 h-[auto] w-[80%] mt-[50px] rounded-lg ml-[30px]'>
    <div className='grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-[25px] z-0'>
        
        {
        Store.map((value)=>
            <div key={value.id} className='border-solid border-black rounded-sm border-1 flex flex-col items-center gap-[15px] z-0 shadow-2xl p-2 mb-[20px] '>
            <img src={value.img} alt='' className='h-[300px] w-[400px] shadow-2xl'/> 
            <p>{value.name}</p>
            <div className='flex justify-between w-full items-center my-[10px] px-[20px]'>
                <span>Rs/-{value.price}</span>
                <button className='flex gap-[10px] bg-gray-400  p-2 ml-[20px] rounded-lg items-center hover:bg-red-200 ' onClick={()=>handlerBtn(value.id)}>
                    <img src={cart} alt='cart' className='h-[20px]'/>
                    {added.includes(value.id) ? `Added to cart` :`Add to cart`}</button>
                </div>
            </div>) 
        }
    </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage