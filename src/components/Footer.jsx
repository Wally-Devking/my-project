import React from 'react'
import fb from '../components/assets/fb.png'
import whatsapp from '../components/assets/whatsapp.png'
import linkedin from '../components/assets/linkedin.png'
import ig from '../components/assets/ig.png'
import snapchat from '../components/assets/snapchat.png'



const Footer = () => {
  return (
    <div className='w-full py-16 px-10 mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-2xl font-bold items-center  text-green-500 '>Wally DEV.</h1>
          <p className='py-4'>locally and not based on user input, it should be safe. If you are working with user-generated content, additional precautions may be necessary. </p>
          <div className='flex jstify-between gap-5 md:w-[70%] my-6'>
            <img className='w-15 h-8 cursor-pointer ' src={fb}></img>
            <img className='w-15 h-8 cursor-pointer ' src={ig}></img>
            <img className='w-15 h-8 cursor-pointer ' src={linkedin}></img>
            <img className='w-15 h-8 cursor-pointer ' src={snapchat}></img>
            <img className='w-15 h-8 cursor-pointer ' src={whatsapp}></img>
          </div>
        </div>
        <div className='flex mt-12  md:col-span-2 lg:col-span-2 justify-between'>
            <div className=''>
                <h6 className='font-medium text-green-500'>Solutions</h6>
                <ul>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Deigning</li>
                    <li>Commerce</li>
                    <li>Code Infrasture</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-green-500'>Support</h6>
                <ul>
                    <li>Support</li>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>Api Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-green-500'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium  text-green-500'>Legal</h6>
                <ul>
                    <li>Liase</li>
                    <li>Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    </div> 

  )
}

export default Footer
