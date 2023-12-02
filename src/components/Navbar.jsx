import React, {useState} from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav= ()=>{
    setNav (!nav)

  }
  return (
    <div className= 'flex  mt-5 items-center text-white max-w-[1240px] px-8  mx-auto '>
      <h1 className='w-full text-2xl font-bold items-center  text-green-500 '>Wally DEV.</h1>
      <ul className='gap-5 hidden md:flex'>
        <li className='nav-list  hover:text-green-500'>Home</li>
        <li className='nav-list  hover:text-green-500'>About</li>
        <li className='nav-list  hover:text-green-500'>Resources</li>
        <li className='nav-list  hover:text-green-500'>Company</li>
        <li className='nav-list  hover:text-green-500'>Contact</li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden  hover:text-green-500'>
        {nav ? <IoMdMenu size={30}/> : <IoMdMenu size={30}  />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-0 bg-gray-900 bg-opacity-100  px-5 ease-in-out duration-700 ' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl font-bold mt-5 text-green-500 '>Wally DEV.</h1>
        <ul className='pt-8 uppercase space-y-5 '>
          <li className='nav-list border-b border-green-500  hover:text-green-500'>Home</li>
          <li className='nav-list border-b border-green-500  hover:text-green-500'>About</li>
          <li className='nav-list border-b border-green-500  hover:text-green-500'>Resources</li>
          <li className='nav-list border-b border-green-500  hover:text-green-500'>Company</li>
          <li className='nav-list border-b border-green-500  hover:text-green-500'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

 