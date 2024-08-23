import React from 'react'
import Meditation from "../assets/Activities/meditation.png"
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import stock8 from "../assets/Home/Gallery/32.png"
import header from "../assets/About/header.jpg";

const Aboutus = () => {
  return (
    <div>
      <div className='inline md:hidden z-[100]'>
          <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
      <Navbar/>
      </div>  

        <div className="mt-20 sm:mt-32"><img src={header} alt="" /></div>
      <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <img src={stock8} alt="" className='md:w-[32vw] my-6 rounded-2xl'/>
            </div>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold md:mt-8 mt-20  md:mb-16 mb-4 font-playfair'>Who are we?</h1>
                <p className='md:w-[40vw] md:text-base md:mb-0 mb-4 text-justify font-opensans'>Nestled amidst sylvan terrains just a few kilometres away from Karnal lies Anantha Gram, a serene 13 acre haven dedicated solely to your holistic well-being. Offering a rejuvenating landscape stretched across 1.5 acres of open space, Anantha Gram derives vitality from its connection with Mother Nature. <br /><br />
Striving to create a space where individuals can thrive mentally, physically and spiritually, Anantha Gram prides itself on its organic produce which is cultivated using sustainable farming practices. Our cooks prepare healthy meals and also assist you in picking your favourite farm veggies, delivering a nourishing experience for your mind, body and soul. We&apos;re dedicated to rekindle a way of living that is mindful and helps foster your personal growth. Anantha Gram endeavours to help you make a conscious stride towards experiencing self-healing and wellness amidst a nurturing environment. 

</p>
                {/* <button className='md:px-8 px-4 md:py-3 py-2 border-[#B9CF9B] text-[#B9CF9B] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button> */}
            </div>
        </div>
      <div className='flex md:flex-row flex-col items-center justify-between md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold md:mt-0 mt-20 md:mb-16 mb-4 font-playfair'>Our Story</h1>
                <p className='md:w-[40vw] md:text-base md:mb-8 mb-4 text-justify font-opensans'>We live in a world plagued with stress and disease. The average person today, leads a lifestyle that is far from conducive to the healthy functioning of their mind, body and soul; and the Chaudhry family has been no exception to that condition. Plagued by mental stress, emotional upheavals and declining physical health, they realised it was time to make sustainable lifestyle shifts for healthier living. <br /><br />
                Resorting to alternative <b>healing modalities</b> and <b>adopting mindful ways</b> of living tremendously contributed towards creating a greater sense of inner peace for them and they’ve since become advocates of sustainable living for the self and our precious Mother Earth. As they continue to tread on this path to heal themselves, Anantha Gram is their endeavour to share this knowledge with other seekers so we can together, create a more healed, loving and peaceful world whose inhabitants are able to rise in regard for their two beautiful but fleeting homes - their beloved bodies and our precious Gaia. 
</p>
                {/* <button className='md:px-8 px-4 md:py-3 py-2 border-[#B9CF9B] text-[#B9CF9B] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button> */}
            </div>
            <div>
                <img src={Meditation} alt="" className='md:w-[32vw] my-6'/>
            </div>
        </div>

        {/* <div className='bg-[#F7E8D0] flex md:flex-row flex-col items-center justify-between md:px-[10vw] px-6 md:py-[7vh] py-4'>
          <div>
            <img src={} alt="" className='' />
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4 mt-8 font-playfair'>Our Mission</h1>
          <p className='md:w-[35vw] md:text-lg mb-10 text-black/80'>At Anantha Farms, our mission is to cultivate a sanctuary where individuals can find balance, inspiration, and holistic well-being amidst the beauty of nature.Our goal is to help people in rediscovering their connection to the planet and to themselves via our special combination of holistic healing experiences, mindfulness retreats, and workation possibilities.</p>
          </div>
        </div> */}

        {/* <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] mx-[10vw]'>
          <div>
            <img src={About2} alt="" className='md:w-[32vw] py-6'/>
          </div>
          <div>
          <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4 font-playfair'>Our Foundation</h1>
          <p className='md:w-[35vw] md:text-lg md:mb-10 mb-8'>At Anantha Farms Foundation, we're all about bridging the gap between people and mother earth. Through sustainable practices and mindful living, we're on a mission to build a happier, healthier space for everyone to thrive. With organic farming blended with a sincere focus on Ayurvedic way of living, we're sparking a new way of living that's good for us as well as mother Earth, as we sow the seeds of change and grow a greener, more harmonious world together!</p>
          </div>
        </div> */}
    </div>
  )
}

export default Aboutus