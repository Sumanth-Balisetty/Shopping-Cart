import React, { useState } from 'react'

const Personal = ({setFullname,fullname}) => {
  const [block,setBlock] = useState(true);
const editHandler = ()=>{
  setBlock(!block)
}
  return (
    <div className='ml-[40px] mt-[40px]'>
        <div className='flex gap-[10px] items-center'>
        <h1 className='text-[20px] font-semibold'>Personal Information</h1>
        <span className='text-blue-500 text-normal cursor-default' onClick={editHandler}>Edit</span>
        </div>
        <div className='flex gap-[25px] mt-[20px]'>
        <input type='text' value={fullname} onChange={(e)=>{setFullname(e.target.value)}} disabled={block} className={`h-[40px] bg-gray-50 outline-none border-[1px] border-slate-400 px-[10px]`}/>
        <input type='text' disabled={block} className='h-[40px] bg-gray-50 outline-none border-[1px] border-slate-400 px-[10px]'/>
        </div>
        <div className='mt-[20px] flex flex-col gap-[15px]'>
            <p className='text-[16px] font-semibold'>Gender</p>
            <div className='flex gap-[20px] items-center'>
                <p>Male</p>
            <input type='radio' disabled={block} className='h-[16px] w-[16px]'/>
            <p>Female</p>
            <input type='radio' disabled={block} className='h-[16px] w-[16px]'/>
            </div>
        </div>
        <div className='mt-[40px] flex flex-col gap-[15px]'>
        <p className='text-[16px] font-semibold'>Email:</p>
        <input type='email'className='h-[40px] bg-gray-50 outline-none border-[1px] border-slate-400 px-[10px] w-[250px]' disabled={block} />
        </div>
        <div className='mt-[40px] flex flex-col gap-[15px]'>
        <p className='text-[16px] font-semibold'>Mobile Number:</p>
        <input type='text'className='h-[40px] bg-gray-50 outline-none border-[1px] border-slate-400 px-[10px] w-[250px]' disabled={block} />
        </div>
        <div className='mt-[100px]'>
            <button className={`bg-cyan-400 w-[150px] text-white py-[10px] rounded-lg font-bold `}> Save</button>
        </div>
    </div>
  )
}

export default Personal