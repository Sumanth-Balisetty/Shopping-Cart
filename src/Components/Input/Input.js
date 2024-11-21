import React from 'react'

const Input = () => {
  return (
    <div className='flex flex-col items-center text-center bg-slate-300 py-5'>
      <div className='mb-5'>
        <h1 className='text-3xl font-normal mb-3'>Ready To Own ?</h1>
        <p>Please Complete the form below and we will be in touch shortly.</p>
      </div>
      <div className='w-3/5 h-auto flex flex-row'>
      <div>
        <div className='flex gap-3 m-2' >
          <input type='text' placeholder='Firstname *' className='p-[15px] w-[300px] outline-none border-solid border-black border-[1px] placeholder:text-black'/>
          <input type='text' placeholder='Lastname *' className='p-[15px]   w-[300px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/>
          </div>
          <div className='flex gap-3 m-2'>
          <input type='email' placeholder='Email *'  className='p-[15px]  w-[300px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/>
          <input type='text' placeholder='Phonenumber *'  className='p-[15px]  w-[300px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/>
          </div>
          <div className=' flex flex-row w-full gap-3 m-2'>
            <input type='text' placeholder='City of Intrest *' className='w-[300px] p-[15px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/>
            <div className='w-1/2 flex gap-[15px]'>
              <input type='text' placeholder='State *' className='w-[142px] p-[15px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/> 
              <input type='text' placeholder='Zip *' className='w-[142px] p-[15px] outline-none border-solid border-black  border-[1px] placeholder:text-black'/>
            </div>
          </div>
      </div>
      <div className=' border-solid border-black border-1 w-[500px] mt-[9px]'> 
          <textarea type='text' placeholder='Why are you Intrested?' className='w-full h-[117px] pt-[10px] pl-[10px] placeholder:text-black '/>
          <div className='flex gap-[13px] items-center mt-[10px]'>
          <p className='text-[10px] w-[55%]'>Just checking in to see how you're doing. Hope your day is going well! Let me know if you need anything."</p>
          <label className='flex gap-[4px]'>Yes<input type='radio' /></label>
          <label className='flex gap-[4px]'>No<input type='radio' /></label>
          </div>
      </div>
      </div>
      <button type='submit' className='bg-gray-600 py-[10px] px-[20px] rounded-lg w-[200px] text-white text-lg mt-[20px]' >Submit</button>
    </div>
  )
}

export default Input