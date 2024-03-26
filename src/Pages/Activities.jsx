import React from 'react'
import Activity from "../assets/Activities/activity.png"
import Stock1 from "../assets/Activities/stock1.png"
import Stock2 from "../assets/Activities/stock2.png"
import Stock3 from "../assets/Activities/stock3.png"
import SI1 from "../assets/Home/stockimg 3.png"
import SI2 from "../assets/Home/stockimg 4.png"
import SI3 from "../assets/Home/stockimg 5.png"
import SI4 from "../assets/Home/stockimg 6.png"
const Activities = () => {
  return (
    <div>
        <div className='md:mx-[10vw] mx-6 md:mt-[12vh]'>
            <div className='absolute flex flex-col items-center md:w-[80vw] md:top-[32vh] top-20'>
                <h1 className="text-white font-semibold md:text-5xl text-2xl w-[80vw] text-center">Mindful breathing & Meditation</h1>
                <h2 className='text-white hidden md:inline-block text-xl mt-8 w-[50vw] text-center'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</h2>
                <div className='flex flex-row items-center flex-wrap justify-center md:justify-around md:mt-[32vh] mt-10'>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10'>Spirituality</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10'>|</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10'>Workation</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10'>|</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10'>Volunteering</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl mr-3 md:mr-10 hidden md:inline'>|</h1>
                    <h1 className='text-white md:font-bold text-sm md:text-2xl'>Natural Farms</h1>
                </div>
            </div>
            <img src={Activity} alt="Activity"/>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-between md:mx-[10vw] px-6 md:my-20'>
          <div className='flex flex-col'>
            <div className='bg-[#F7E8D0] md:px-16 px-6 md:py-12 pt-8 md:rounded-2xl rounded-lg md:w-[38vw] pb-4 mt-4'>
              <h1 className='text-[#56B3C2] text-2xl font-bold md:mb-20 mb-4'>Spirituality</h1>
              <h2 className='text-black/70'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</h2>
            </div>
            <div className='bg-[#F7E8D0] md:px-16 px-6 md:py-12 pt-8 md:rounded-2xl rounded-lg md:w-[38vw] pb-4 mt-4'>
              <h1 className='text-[#56B3C2] text-2xl font-bold md:mb-20 mb-4'>Spirituality</h1>
              <h2 className='text-black/70'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</h2>
            </div>
            
            <img src={Stock1} alt="" className='md:w-[38vw] py-4'/>
          </div>
          <div>
            <div className='bg-[#F7E8D0] md:px-10 px-6 py-6 md:rounded-2xl rounded-lg md:w-[38vw] mb-4'>
              <h2 className='text-black/70 text-xl font-bold'>Self is the Key.</h2>
            </div>
              <img src={Stock2} alt="" className='md:w-[38vw] mb-4' />
              <img src={Stock3} alt="" className='md:w-[38vw]' />
          </div>
        </div>

        <div>
          {/* Carousel */}
        </div>

        <div className='bg-[#F7E8D0] md:px-[10vw] px-6 md:py-[5vh] py-6 my-6'>
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
          {/* Carouselo */}
        </div>
    </div>
  )
}

export default Activities