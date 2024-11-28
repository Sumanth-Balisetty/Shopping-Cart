import React, { useState } from 'react'

const Practice = () => { 
    const [array,setArray] = useState([]);
    const handler = (id) =>{
        if (!array.includes(id)){
            setArray((prev)=>[...prev,id])
        }
        
    }
    console.log("array" ,array)
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh] gap-[60px]'>
            <div className='flex flex-col items-center'>
            <div className={`h-[150px] w-[150px] ${array.includes(1) ? 'bg-red-700':'bg-black'}`}>

            </div>
            <button className='rounded-lg px-[20px] border-2 border-black mt-[20px]'  onClick={()=>handler(1)}>Click</button>
            </div>
            <div className='flex flex-col items-center'>
            <div className={`h-[150px] w-[150px] ${array.includes(2) ? 'bg-red-700':'bg-black'}`}>

            </div> 
            <button className='rounded-lg px-[20px] bg-gray-200 border-2 border-black mt-[20px]' onClick={()=>handler(2)}>Click</button>
            </div>
            <div className='flex flex-col items-center'>
            <div className={`h-[150px] w-[150px] ${array.includes(3) ? 'bg-red-700':'bg-black'}`}>

            </div>
            <button className='rounded-lg px-[20px] bg-gray-200 border-2 border-black mt-[20px]' onClick={()=>handler(3)}>Click</button>
            </div>
            <div className='flex flex-col items-center'>
            <div className={`h-[150px] w-[150px] ${array.includes(4) ? 'bg-red-700':'bg-black'}`}>

            </div>
            <button className='rounded-lg px-[20px] bg-gray-200 border-2 border-black mt-[20px]' onClick={()=>handler(4)}>Click</button>
            </div>

    </div>
  )
}

export default Practice