import React from 'react'
import Activity from "../assets/Activities/activity.png"
import Stock1 from "../assets/Activities/stock1.png"
import Stock2 from "../assets/Activities/stock2.png"
import Stock3 from "../assets/Activities/stock3.png"
import SI1 from "../assets/Home/stock 5.png"
import SI2 from "../assets/Home/stock2 1.png"
import SI3 from "../assets/Home/stock3 1.png"
import SI4 from "../assets/Home/stock4 1.png"
import Kite from "../assets/Activities/kite.png"
import Tug from "../assets/Activities/tug.png"
import Badminton from "../assets/Activities/badminton.png"
import Farms from "../assets/Activities/farms.png"
const Activities = () => {
  return (
    <div>
        <div className='md:mx-[10vw] mx-6 md:mt-[12vh] mt-[10vh]'>
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

        <div className='flex md:flex-row flex-col gap-6 items-center justify-between md:mx-[10vw] px-6 md:my-20'>
          <div className='flex flex-col'>
            <div className='bg-[#F7E8D0] md:px-16 px-6 md:py-12 pt-8 md:rounded-2xl rounded-lg md:w-[38vw] pb-4 mt-4'>
              <h1 className='text-[#56B3C2] text-2xl font-bold md:mb-8 mb-4'>Mindful Meadows Meditation retreats</h1>
              <h2 className='text-black/70 text-sm'>Join our meditation retreats at Aanantha Farms to commence on life-altering experience. In between the serene countryside of Karnal, our retreats offer a peaceful interval from your daily routine to immerse yourself in guided meditation sessions, mindfulness practices, and serene nature walks, rejuvenating your mind, body, and soul. Our experienced instructors and  pleasant surroundings create a perfect environment for you to facilitate you on the road to self-discovery and inner peace. Join us and experience the profound benefits of mindfulness amidst the beauty of Aanantha Farms.</h2>
            </div>
            <div className='bg-[#F7E8D0] md:px-16 px-6 md:py-12 pt-8 md:rounded-2xl rounded-lg md:w-[38vw] pb-4 mt-4'>
              <h1 className='text-[#56B3C2] text-2xl font-bold md:mb-8 mb-4'>Ashtanga Yoga sessions</h1>
              <h2 className='text-black/70 text-sm'>At Aanantha Farms, our Ashtanga Vinyasa Yoga retreats offer a revitalising experience to tap into the transformative practice of Ashtanga yoga. Deeply rooted in the tradition, guided by the principles of vinyasa krama and the Eight Limbs of Yoga, set amidst the tranquil surroundings of Aanantha Farms, these workshops are a wonderful opportunity to immerse in the daily practice of cultivating strength, flexibility, and inner focus. Whether you're new to Ashtanga or an experienced practitioner, our retreats cater to all levels, offering personalised guidance and support along the way. Through deep breathing techniques like Ujjayi breath and the integration of bandhas, participants learn to harness the power of their breath and energy, fostering a sense of stability and presence on and off the mat.
<br /> <br />
Join us at Aanantha Farms and embark on a transformative journey of Ashtanga Vinyasa Yoga, where movement, breath, and mindfulness unite to cultivate a deeper sense of well-being and connection.
</h2>
            </div>
            
            <img src={Stock1} alt="" className='md:w-[38vw] py-4'/>
          </div>
          <div>
            <div className='bg-[#F7E8D0] md:px-10 px-6 py-6 md:rounded-2xl rounded-lg mb-4'>
             
              <h1 className='text-[#56B3C2] text-2xl font-bold md:mb-4 mb-4'>Ayurveda treatments</h1>
              <h2 className='text-black/70 text-sm'>At Aanantha Farms, we embrace the timeless wisdom of Ayurveda, a holistic treatment rooted in the harmony of our mind, body, and spirit. Our Ayurvedic treatments and Nadi Pariksha (pulse diagnosis) sessions offer personalized healing journeys that honor the natural rhythms of life. With over 5,000 years of tradition, Ayurveda guides us on a circular path of wellness, addressing the root cause of any imbalances in the vata, pitta or kapha causing any medical afflictions whatsoever. From rejuvenating abhyanga massages to herbal remedies personalised according to your imbalance, our Ayurvedic Chikitsa (treatments) invite you to experience the healing powers of nature.</h2>
            </div>
              <img src={Stock2} alt="" className='md:h-[48vh] w-full mb-4' />
              <img src={Stock3} alt="" className='md:h-[55vh] w-full' />
          </div>
        </div>

        <div className='md:mx-[10vw] mx-6 md:mb-20 mb-8'>
          <img src={Farms} alt="" className='rounded-2xl'/>
        </div>

        <div className='bg-[#F7E8D0] md:px-[10vw] px-6 md:py-[5vh] py-6 my-6'>
        <h1 className='md:text-4xl text-2xl md:mb-20 mb-6 font-semibold'>Destination Highlights</h1>
            <p className='md:text-lg text-base'>Our top attractions</p>
            <div className='flex flex-row items-center flex-wrap gap-6 justify-between md:mt-8 mt-4'>
                <div>
                    <img src={SI1} alt="" className='md:w-64 w-full rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Sunday Drum circles</h1>
                </div>
                <div>
                    <img src={SI2} alt="" className='md:w-64 w-full rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Mindfulness Meditation</h1>
                </div>
                <div>
                    <img src={SI3} alt="" className='md:w-64 w-full rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Ashtaang Yoga Sessions</h1>
                </div>
                <div>
                    <img src={SI4} alt="" className='md:w-64 w-full rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Organic Farming workshop</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:mx-[10vh] mx-6 md:my-20 my-4'>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-14 mb-4'>Reacreational Activities</h1>
        <div className='flex md:flex-row flex-col gap-4 items-center justify-between '>
          <div>
          <img src={Kite} alt="" className='md:w-[28vw] rounded-xl hover:scale-105 transition-all hover:opacity-85'/>
          <h1 className='font-bold text-black/70 mt-2'>Kite Flying</h1>
          </div>
          <div>
          <img src={Tug} alt="" className='md:w-[28vw] rounded-xl hover:scale-105 transition-all hover:opacity-85'/>
          <h1 className='font-bold text-black/70 mt-2'>Tug of War</h1>
          </div>
          <div>
          <img src={Badminton} alt="" className='md:w-[28vw] rounded-xl hover:scale-105 transition-all hover:opacity-85'/>
          <h1 className='font-bold text-black/70 mt-2'>Badminton</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Activities