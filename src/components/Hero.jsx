import React from 'react';
import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white max-w-[800px] w-full h-screen mx-auto space-y-4 justify-center text-center bg-center flex flex-col'>
      <p className='text-green-500 text-[-1xl]'>GROW WITH THE BEST TECH ACADEMY</p>
      <h1 className='text-5xl font-bold mb-5'>Grow with Wally DEV</h1>
      <div className='flex items-center justify-center'>
        <h3 className='md:text-sm lg:text-2xl  font-semibold'>Advanced, flexible Self Developement</h3>
        <ReactTyped
          className='md:text-sm lg:text-2xl font-semibold text-green-500 pl-2'
          strings={['HTML', 'CSS', 'REACT JS', 'NEXT JS','BACKEND Dev','FULLSTACK Dev','Over 200 Projects' ]}
          typespeed={190}
          backspeed={100}
          loop
        />

      </div>
        <p className='font-bold text-gray-400 text-[-1xl] mb-5'>Break your limits and build capacity as a Frontend, Backend & Fullstack Programming </p>
      <div className=''>
        <button className='mt-5 text-black bg-green-500 mt-15 border-0 rounded-md font-medium py-2 px-6 mx-auto'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
