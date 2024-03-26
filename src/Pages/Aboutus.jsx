import React from 'react'
import Whorv from "../assets/Home/whorv.png"
import s1 from "../assets/Activities/s1.png"
import s2 from "../assets/Activities/s2.png"
import s3 from "../assets/Activities/s3.png"
import s4 from "../assets/Activities/s4.png"
import Meditation from "../assets/Activities/meditation.png"
const Aboutus = () => {
  return (
    <div>
      <div className='md:mx-[10vw] mx-6 bg-[#F7E8D0] rounded-2xl md:p-4 p-2 flex flex-col md:mt-24 mt-4'>
        <div className='flex flex-row ietms-center justify-between mb-4'>
          <img src={s1} alt="" className=''/>
          <img src={s2} alt="" className='hidden md:inline'/>
          <div className='bg-[#0F1214] rounded-xl'>
            <h1 className='text-xl text-white px-10 font-bold py-10 text-center'>Explore <br /> our <br /> Gallery</h1>
            <img src="" alt="" />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <img src={s3} alt="" className='w-[38vw]'/>
          <img src={s4} alt="" className='w-[38vw]'/>
        </div>
      </div>

      <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold mt-8 md:mb-20 mb-4'>About Us</h1>
                <p className='md:w-[30vw] md:text-lg md:mb-10 mb-4'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</p>
                <button className='md:px-8 px-4 md:py-3 py-2 border-[#56B3C2] text-[#56B3C2] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button>
            </div>
            <div>
                <img src={Whorv} alt="" className='md:w-[32vw] my-6'/>
            </div>
        </div>

        <div className='bg-[#F7E8D0] flex md:flex-row flex-col items-center justify-between md:px-[10vw] px-6 md:py-[7vh] py-4'>
          <div>
            <img src={Meditation} alt="" className='' />
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-20 mb-4 mt-8'>Our Mission</h1>
          <p className='md:w-[30vw] md:text-lg mb-10 text-black/70'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</p>
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] mx-[10vw]'>
          <div>
            <img src={Whorv} alt="" className='md:w-[32vw] py-6'/>
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-20 mb-4'>Our Foundation</h1>
          <p className='md:w-[30vw] md:text-lg md:mb-10 mb-8'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more. A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</p>
          </div>
        </div>
    </div>
  )
}

export default Aboutus