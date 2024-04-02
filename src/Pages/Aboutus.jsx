import React from 'react'
import Whorv from "../assets/About/about.svg"
import About2 from "../assets/About/about2.png"
import s1 from "../assets/Activities/s1.png"
import s2 from "../assets/Activities/s2.png"
import s3 from "../assets/Activities/s3.png"
import s4 from "../assets/Activities/s4.png"
import Meditation from "../assets/Activities/meditation.png"
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
const Aboutus = () => {
  return (
    <div>
      <div className='inline md:hidden z-[100]'>
          <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
      <Navbar/>
      </div>
      {/* <div className='md:mx-[10vw] mx-6 bg-[#F7E8D0] rounded-2xl md:p-4 p-2 flex flex-col md:mt-24 mt-4'>
        <div className='flex flex-row justify-between mb-4'>
          <img src={s1} alt="" className='w-[34vw]'/>
          <img src={s2} alt="" className='hidden md:inline w-[34vw]'/>
          <div className='bg-[#0F1214] rounded-xl'>
            <h1 className='text-xl text-white font-semibold py-10 px-2 text-center'>Explore <br /> our <br /> Gallery</h1>
            <img src="" alt="" />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <img src={s3} alt="" className='w-[38vw]'/>
          <img src={s4} alt="" className='w-[38vw]'/>
        </div>
      </div> */}

      <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold mt-8 md:mb-16 mb-4 font-playfair'>Our Story</h1>
                <p className='md:w-[40vw] md:text-base md:mb-8 mb-4 text-justify'>We live in a world plagued with stress and disease. The average person today, leads a lifestyle that is far from conducive to the healthy functioning of their mind, body and soul; and the Chaudhry family has been no exception to that condition. Plagued by mental stress, emotional upheavals and declining physical health, they realised it was time to make sustainable lifestyle shifts for healthier living. <br /> <br /> Resorting to alternative <b>healing modalities</b> and <b>adopting mindful ways</b> of living tremendously contributed towards creating a greater sense of inner peace for them and they’ve since become advocates of sustainable living for the self and our precious Mother Earth. As they continue to tread on this path to heal themselves, Anantha Gram is their endeavour to share this knowledge with other seekers so we can together, create a more healed, loving and peaceful world whose inhabitants are able to rise in regard for their two beautiful but fleeting homes - their beloved bodies and our precious Gaia. 
</p>
                {/* <button className='md:px-8 px-4 md:py-3 py-2 border-[#56B3C2] text-[#56B3C2] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button> */}
            </div>
            <div>
                <img src={Whorv} alt="" className='md:w-[32vw] my-6'/>
            </div>
        </div>

        {/* <div className='bg-[#F7E8D0] flex md:flex-row flex-col items-center justify-between md:px-[10vw] px-6 md:py-[7vh] py-4'>
          <div>
            <img src={Meditation} alt="" className='' />
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4 mt-8 font-playfair'>Our Mission</h1>
          <p className='md:w-[35vw] md:text-lg mb-10 text-black/80'>At Aanantha Farms, our mission is to cultivate a sanctuary where individuals can find balance, inspiration, and holistic well-being amidst the beauty of nature.Our goal is to help people in rediscovering their connection to the planet and to themselves via our special combination of holistic healing experiences, mindfulness retreats, and workation possibilities.</p>
          </div>
        </div> */}

        {/* <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] mx-[10vw]'>
          <div>
            <img src={About2} alt="" className='md:w-[32vw] py-6'/>
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4 font-playfair'>Our Foundation</h1>
          <p className='md:w-[35vw] md:text-lg md:mb-10 mb-8'>At Aanantha Farms Foundation, we're all about bridging the gap between people and mother earth. Through sustainable practices and mindful living, we're on a mission to build a happier, healthier space for everyone to thrive. With organic farming blended with a sincere focus on Ayurvedic way of living, we're sparking a new way of living that's good for us as well as mother Earth, as we sow the seeds of change and grow a greener, more harmonious world together!</p>
          </div>
        </div> */}
    </div>
  )
}

export default Aboutus