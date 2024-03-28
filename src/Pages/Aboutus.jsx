import React from 'react'
import Whorv from "../assets/About/about.svg"
import About2 from "../assets/About/about2.png"
import s1 from "../assets/Activities/s1.png"
import s2 from "../assets/Activities/s2.png"
import s3 from "../assets/Activities/s3.png"
import s4 from "../assets/Activities/s4.png"
import Meditation from "../assets/Activities/meditation.png"
const Aboutus = () => {
  return (
    <div>
      <div className='md:mx-[10vw] mx-6 bg-[#F7E8D0] rounded-2xl md:p-4 p-2 flex flex-col md:mt-24 mt-4'>
        <div className='flex flex-row justify-between mb-4'>
          <img src={s1} alt="" className='w-[34vw]'/>
          <img src={s2} alt="" className='hidden md:inline w-[34vw]'/>
          <div className='bg-[#0F1214] rounded-xl'>
            <h1 className='text-xl text-white font-bold py-10 text-center'>Explore <br /> our <br /> Gallery</h1>
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
                <p className='md:w-[30vw] md:text-lg md:mb-10 mb-4'>Welcome to Aanantha Farms, where tranquility meets productivity in the embrace of mother nature. Spread across 15 acres of serene land near Karnal, our farm offers a unique blend of workation opportunities, mindfulness retreats, and holistic wellness experiences.
<br />
Our farms provide as a promising backdrop for your workation, allowing you to find your required inspiration and focus while being surrounded by nature's beauty. It is a peaceful workspace where we specialize in hosting meditation and mindfulness retreats, as well as Ashtanga yoga sessions. Whether you have been in the practice of Yoga from a long time or you are new to the practice, our experienced instructors will guide you on a journey of self-discovery and inner peace.
<br />
At Aanantha Farms, we believe in nourishing both the body and the soul and take pride in our organic farms, where we cultivate a variety of fresh produce using sustainable farming practices. Our chefs make healthy meals to your taste and provide you assistance to cook farm veggies yourself. Experience Ayurvedic retreats for self-healing and wellness amid natural beauty.
</p>
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
          <p className='md:w-[30vw] md:text-lg mb-10 text-black/70'>At Aanantha Farms, our mission is to cultivate a sanctuary where individuals can find balance, inspiration, and holistic well-being amidst the beauty of nature.Our goal is to help people in rediscovering their connection to the planet and to themselves via our special combination of holistic healing experiences, mindfulness retreats, and workation possibilities. We ensure sustainable farming practices, organic living, and foster a sense of community in our sweet little haven by providing a peaceful workspace. We also provide yoga and meditation sessions, nourishing organic meals, and Ayurvedic healing retreats, striving to create a space where individuals can thrive mentally, physically, and spiritually. We're dedicated to kindle mindful living, fostering personal growth, and nurturing a balanced connection with ourselves and the world.</p>
          </div>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] mx-[10vw]'>
          <div>
            <img src={About2} alt="" className='md:w-[32vw] py-6'/>
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-20 mb-4'>Our Foundation</h1>
          <p className='md:w-[30vw] md:text-lg md:mb-10 mb-8'>At Aanantha Farms Foundation, we're all about bridging the gap between people and mother earth. Through sustainable practices and mindful living, we're on a mission to build a happier, healthier space for everyone to thrive. With organic farming blended with a sincere focus on Ayurvedic way of living, we're sparking a new way of living that's good for us as well as mother Earth, as we sow the seeds of change and grow a greener, more harmonious world together!</p>
          </div>
        </div>
    </div>
  )
}

export default Aboutus