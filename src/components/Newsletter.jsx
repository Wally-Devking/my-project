import React from 'react'

const Newsletter = () => {
  return (
        <div className='max-w-[1240px] grid lg:grid-cols-2 mx-6 '>
            <div className='lg:cols-span-2' >
                <h1 className='text-white font-bold text-2xl py-3 sm:text-3xl md:text-3xl'>Want tips and tricks to optimize your growth?</h1>
                <p className='text-white sm:my-2'>Sign up to newsletter and stay up to date.</p>
            </div>
            <div className='my-'>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <input className='p-2 flex w-full border-0 rounded-md text-black' type='email' placeholder='Enter Email here...' id='emailEl'></input>
                    <button className='text-black bg-green-500 rounded-md w-[150px] font-medium ml-0 sm:ml-2 px-6 py-2 my-6 mx-auto'>Notify Me</button>
                </div>
                <p className='text-white mt-4 '>We care about your consisted growth as a developer. Read our <span className='text-green-500'>Growth Tracker</span></p>
            </div>
        </div>
  )
}

export default Newsletter
