import React from 'react'
import iconUSD from '../components/assets/iconUSD.png'
import iconCash from '../components/assets/IconCash.png'
import iconBag from '../components/assets/iconBag.png'
const Cards = () => {
  return (
    <div className='w-full py-[5rem] bg-white  px-10 '>
        <div className='max-w-[1240px] grid md:grid-cols-3 sm:gap-10 '>
            <div className='w-full shadow-xl shadow-gray-400   flex flex-col p-4 md:my-0 my-8 rounded-xl hover:scale-105 during-500 '>
                <img className='w-20 mx-auto' src={iconUSD} alt='usd-icon'></img>
                <h2 className='text-1xl font-bold text-center py-8'>FrontEnd</h2>
                <p className='text-center font-bold text-2xl'>$449</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8' >HTML,CSS</p>
                    <p className='py-2 border-b mx-8'>JAVASCRIPT, REACT</p>
                    <p className='py-2 border-b mx-8'>NEXT JS </p>
                </div>
                <button className='text-green-500 bg-gray-800 border-0 rounded-md w-[150px] font-medium px-6 py-2 my-6 mx-auto '>Start Trial</button>
            </div>
        <div className='w-full shadow-xl shadow-gray-400  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 during-500'>
                <img className=' w-20 mx-auto' src={iconBag} alt='usd-icon'></img>
                <h2 className='text-1xl font-bold text-center py-8'>BackEnd</h2>
                <p className='text-center font-bold text-2xl'>$678</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8' >Mongo JB</p>
                    <p className='py-2 border-b mx-8'>NodeJS</p>
                    <p className='py-2 border-b mx-8'>Django</p>
                </div>
                <button className='text-green-500 bg-gray-800 border-0 rounded-md w-[150px] font-medium px-6 py-2 my-6 mx-auto '>Start Trial</button>
            </div>
            <div className='w-full shadow-xl shadow-gray-400  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 during-500 mx-auto'>
                <img className='w-20 mx-auto' src={iconCash} alt='icon-cash'></img>
                <h2 className='text-1xl font-bold text-center py-8'>FullStack </h2>
                <p className='text-center font-bold text-2xl'>$700</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8' >Angular, Vue</p>
                    <p className='py-2 border-b mx-8'>Django, SQL</p>
                    <p className='py-2 border-b mx-8'>Learn All</p>
                </div>
                <button className='text-green-500 bg-gray-800 border-0 rounded-md w-[150px] font-medium px-6 py-2 my-6 mx-auto '>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
