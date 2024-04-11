import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../assets/Home/hero.png"
import Whorv from "../assets/Home/Whorv.jpg"
import SI1 from "../assets/Home/dest1.svg"
import SI2 from "../assets/Home/dest2.svg"
import stock1 from "../assets/Home/Gallery/11.png"
import stock2 from "../assets/Home/Gallery/12.png"
import stock3 from "../assets/Home/Gallery/21.png"
import stock4 from "../assets/Home/Gallery/21.png"
import stock5 from "../assets/Home/Gallery/31.png"
import stock6 from "../assets/Home/Gallery/32.png"
import stock7 from "../assets/Home/Gallery/33.png"
import stock8 from "../assets/Home/Gallery/34.png"
import stock9 from "../assets/Home/Gallery/41.png"
import stock10 from "../assets/Home/Gallery/42.png"
import stock11 from "../assets/Home/Gallery/51.png"
import stock12 from "../assets/Home/Gallery/52.png"
import stock13 from "../assets/Home/Gallery/61.png"
import stock14 from "../assets/Home/Gallery/62.png"
import stock15 from "../assets/Home/Gallery/71.png"
import stock16 from "../assets/Home/Gallery/72.png"
import stock17 from "../assets/Home/Gallery/81.png"
import stock18 from "../assets/Home/Gallery/82.png"
import stock19 from "../assets/Home/Gallery/91.png"
import stock20 from "../assets/Home/Gallery/92.png"
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {useRef} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
const Home = () => {
  const swiperRefMob = useRef(null);
  return (
    <div className='w-[100vw] overflow-hidden'>
      <div className='inline md:hidden z-[100]'>
          <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
      <Navbar/>
      </div>
      <div>
        <div className='flex justify-center items-center md:h-screen'>
  <div className='text-center p-6'>
    <h1 className='text-2xl md:text-6xl mt-12 md:mt-0 text-white font-semibold md:mb-16 mb-2 font-playfair'>Take a leap into self-discovery</h1>
    {/* <h2 className='text-sm md:text-2xl text-white md:w-[100vw] mb-12'>Book yourself for an ayurvedic spree, nourishing and revitalising your body and soul.</h2> */}
    <Link to="/contact"><button className='text-black font-bold text-xs md:text-lg px-4 font-opensans md:px-8 py-2 md:py-3 bg-[#F7E8D0] rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[#56B3C2] hover:shadow-lg'>Book Now</button></Link>
  </div>
</div>
<img src={Hero} alt="" className='w-full py-4 absolute top-0 left-0 z-[-1]'/>
      </div>


        <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl mt-10 md:mb-20 mb-6 font-semibold font-playfair'>Who are We?</h1>
                <p className='md:w-[38vw] md:text-lg md:mb-14 mb-6 text-justify font-opensans'>Nestled amidst sylvan terrains just a few kilometres away from Karnal, lies Anantha Gram, a serene 15-acre organic haven dedicated solely to your holistic well-being. Offering a rejuvenating landscape stretched across 14 acres, with 1.5 acres of open space, Anantha Gram derives its vitality from its connection with Mother Nature.<br /> <br />  
</p>
                <Link to="/about"><button className='md:px-8 px-4 md:py-3 py-2 border-[#56B3C2] text-[#56B3C2] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button></Link>
            </div>
            <div>
                <img src={Whorv} alt="" className='md:w-[38vw] rounded-3xl my-6'/>
            </div>
        </div>
        <div className='bg-[#F7E8D0] md:px-[10vw] flex flex-col items-center px-6 md:py-[5vh] py-6'>
        <h1 className='md:text-4xl text-2xl md:mb-12 mb-6 font-semibold font-playfair'>Activity Highlights</h1>
            {/* <p className='md:text-lg text-base'>Our top attractions</p> */}
            <div className='flex flex-row items-center flex-wrap gap-6 justify-center md:mt-8 mt-4'>
               <Link to="/weekly-activities"><div className='flex flex-col items-center justify-center'>
                    <img src={SI1} alt="" className='md:w-[30vw] rounded-xl hover:border-2 hover:border-[#56B3C2]'/>
                    <h1 className='font-semibold text-lg text-black/70 mt-2 font-opensans'>Weekly Activities</h1>
                </div></Link> 
                <Link to="/healing-modalities">
                  
                  <div className='flex flex-col items-center justify-center'>
                    <img src={SI2} alt="" className='md:w-[30vw] rounded-xl hover:border-2 hover:border-[#56B3C2]'/>
                    <h1 className='font-semibold text-lg text-black/70 mt-2 font-opensans'>Healing Modalities</h1>
                </div>
                  </Link>
                  
            </div>
        </div>

        <div className='flex flex-col items-center md:my-16 my-8'>
        <h1 className='font-playfair text-black/80 font-semibold md:text-5xl text-2xl'>Gallery</h1>
        <div className='mx-[10vw] md:mt-[8vh] mt-[4vh] flex flex-row items-center justify-center'>
          
        <Swiper
          slidesPerView={1}
          spaceBetween={20} 
          modules={[Navigation, Pagination, Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRefMob.current = swiper)}
          ref={swiperRefMob}
          style={{ width: '75%', maxWidth: '100vw' }} 
          navigation={true}
        >
          
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:md:gap-8 gap-4'>
              <img src={stock2} alt="" className='md:md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock4} alt="" className='md:md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock1} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock2} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            {/* <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock3} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock4} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide> */}
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock5} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock6} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock7} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock8} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock9} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock10} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock11} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock12} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock13} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock14} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock15} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock16} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock17} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock18} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-row items-center justify-center md:gap-8 gap-4'>
              <img src={stock19} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
              <img src={stock20} alt="" className='md:w-[32vw] w-[35vw] rounded-xl' />
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Home