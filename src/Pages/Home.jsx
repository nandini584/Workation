import React from 'react'
import Hero from "../assets/Home/hero.png"
import Whorv from "../assets/Home/whorv.png"
import SI1 from "../assets/Home/stockimg 3.png"
import SI2 from "../assets/Home/stockimg 4.png"
import SI3 from "../assets/Home/stockimg 5.png"
import SI4 from "../assets/Home/stockimg 6.png"
const Home = () => {
  return (
    <div>
        <div className=''>
        <div className='absolute md:w-[60vw] md:top-[30vh] md:left-[10vw] pl-6'>
        <h1 className='md:text-5xl text-3xl mt-6 md:mt-0 text-white font-semibold mb-6'>Mindful breathing & Meditation</h1>
        <h2 className='md:text-xl text-sm text-white md:w-[50vw] hidden md:inline-block md:mb-12'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</h2>
        <button className='md:hero-button text-black font-semibold md:text-lg md:px-8 md:py-3 text-xs px-4 py-2 bg-[#F7E8D0] rounded-full -z-10'>Book Now</button>
        </div>
        <img src={Hero} alt="" className='w-[100vw]'/>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl mt-10 md:mb-20 mb-6 font-semibold'>Who are We?</h1>
                <p className='md:w-[30vw] md:text-lg md:mb-14 mb-6'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</p>
                <button className='md:px-8 px-4 md:py-3 py-2 border-[#56B3C2] text-[#56B3C2] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button>
            </div>
            <div>
                <img src={Whorv} alt="" className='md:w-[32vw] my-6'/>
            </div>
        </div>
        <div className='bg-[#F7E8D0] md:px-[10vw] px-6 md:py-[5vh] py-6'>
        <h1 className='md:text-4xl text-2xl md:mb-20 mb-6 font-semibold'>Destination Highlights</h1>
            <p className='md:text-lg text-base'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. </p>
            <div className='flex flex-row items-center flex-wrap gap-6 justify-between md:mt-8 mt-4'>
                <div>
                    <img src={SI1} alt="" className='w-64'/>
                    <h1 className='font-bold text-black/70 mt-2'>Natural Farms</h1>
                </div>
                <div>
                    <img src={SI2} alt="" className='w-64'/>
                    <h1 className='font-bold text-black/70 mt-2'>Natural Farms</h1>
                </div>
                <div>
                    <img src={SI3} alt="" className='w-64'/>
                    <h1 className='font-bold text-black/70 mt-2'>Natural Farms</h1>
                </div>
                <div>
                    <img src={SI4} alt="" className='w-64'/>
                    <h1 className='font-bold text-black/70 mt-2'>Natural Farms</h1>
                </div>
            </div>
        </div>
        <div>
            {/* carousel */}
        </div>
        <div className='mx-[10vw]'>
        <h1 className='text-4xl mb-20'>Activities</h1>
            {/* activities carousel */}
        </div>
    </div>
  )
}

export default Home