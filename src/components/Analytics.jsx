import React from 'react'
import laptop from '../components/assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 mx-auto my-4'>
        <div className='max-w-[1240px]mx-auto my 4 grid md:grid-cols-2'>
            <img className='w-[400px] rounded-2xl  mx-auto my-4' src={laptop} alt='laptop-img'></img>
            <div className='flex flex-col justify-center px-10'>
                <p className='text-emerald-500 font-bold sm:items-center-center
                md:ml-0'>CODE ANALYTICS DASHBOARD</p>                             
                <h1 className='text-black font-bold text-2xl py-3 sm:text-3xl md:text-3xl'>Share your CODE with our team</h1>
                <p className='text-black text-justify '>With over TEN (10) years experience in facilitating cutting-edge bootcamps, solutions 
                with a broad range of applications and technical skills in training and Developement of worldclass programmers. Proven track record of successfully utilizing front-end 
                knowledge to create scalable, interactive web apps.</p>
                <button className='text-black bg-green-500 border-0 rounded-md w-[150px] font-medium ml-0 sm:ml-2 px-6 py-2 my-6 mx-auto'>Click Here</button>
            </div>
        </div>
    </div>
    
  )
}

export default Analytics
