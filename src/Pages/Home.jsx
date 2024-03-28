import React from 'react'
import Hero from "../assets/Home/hero.png"
import Whorv from "../assets/Home/whorv.svg"
import SI1 from "../assets/Home/stock 5.png"
import SI2 from "../assets/Home/stock2 1.png"
import SI3 from "../assets/Home/stock3 1.png"
import SI4 from "../assets/Home/stock4 1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {useRef} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'swiper/css';
import Explore from "../assets/Home/explore.svg";
import Meditation from "../assets/Home/meditation.svg";
import Workation from "../assets/Home/workation.svg";
import Naturalfarms from "../assets/Home/naturalfarms.svg";
const Home = () => {
    const swiperRef = useRef(null);
  const swiperRefMob = useRef(null);
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    if (swiperRefMob.current) {
      swiperRefMob.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    if (swiperRefMob.current) {
      swiperRefMob.current.slidePrev();
    }
  };
  return (
    <div>
        <div className='mt-16 md:mt-0'>
        <div className='absolute md:w-[60vw] md:top-[30vh] md:left-[10vw] pl-6'>
        <h1 className='md:text-5xl text-3xl mt-10 md:mt-0 text-white font-semibold mb-6'>Take a leap into self-discovery</h1>
        <h2 className='md:text-xl text-sm text-white md:w-[50vw] hidden md:inline-block md:mb-12'>Book yourself for an ayurvedic spree, nourishing and revitalising your body and soul.</h2>
        <button className='md:hero-button text-black font-semibold md:text-lg md:px-8 md:py-3 text-xs px-4 py-2 bg-[#F7E8D0] rounded-full'>Book Now</button>
        </div>
        <img src={Hero} alt="" className='w-[100vw]'/>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between md:h-[100vh] md:mx-[10vw] mx-6'>
            <div>
                <h1 className='md:text-4xl text-2xl mt-10 md:mb-20 mb-6 font-semibold'>Who are We?</h1>
                <p className='md:w-[35vw] md:text-base md:mb-14 mb-6'>Nestled amidst the lush landscapes just a few kilometres away from Karnal, lies aanantha farms, a serene 15-acre organic haven dedicated solely to your overall well-being. Here, Mother nature's embrace awaits, delivering you with nourishment for your body and soul. Our sanctuary offers a variety of mindfulness retreats to help you rekindle your inner peace at our mindfulness spots, where the ancient practices of pranayama, Ashtanga yoga and the healing arts of the Ayurveda are practised under the supervision of able instructors.
<br /> <br />
At aanantha farms , it's not merely a weekend getaway – it's a conscious stride towards a brighter and mindful experience. Join us and take that first step towards a life of harmony and wellness. 
</p>
                <button className='md:px-8 px-4 md:py-3 py-2 border-[#56B3C2] text-[#56B3C2] font-bold md:text-sm text-xs rounded-full border-2'>Learn More</button>
            </div>
            <div>
                <img src={Whorv} alt="" className='md:w-[32vw] my-6'/>
            </div>
        </div>
        <div className='bg-[#F7E8D0] md:px-[10vw] px-6 md:py-[5vh] py-6'>
        <h1 className='md:text-4xl text-2xl md:mb-20 mb-6 font-semibold'>Destination Highlights</h1>
            <p className='md:text-lg text-base'>Our top attractions</p>
            <div className='flex flex-row items-center flex-wrap gap-6 justify-between md:mt-8 mt-4'>
                <div>
                    <img src={SI1} alt="" className='md:w-64 rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Sunday Drum circles</h1>
                </div>
                <div>
                    <img src={SI2} alt="" className='md:w-64 rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Mindfulness Meditation</h1>
                </div>
                <div>
                    <img src={SI3} alt="" className='md:w-64 rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Ashtaang Yoga Sessions</h1>
                </div>
                <div>
                    <img src={SI4} alt="" className='md:w-64 rounded-xl'/>
                    <h1 className='font-bold text-black/70 mt-2'>Organic Farming workshop</h1>
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <div className='mx-[10vw] my-12'>
          <div className='flex flex-row items-center justify-between w-full mb-8'>
           <h1 className=' md:text-4xl text-3xl font-semibold'>Activities</h1>
           <div className='flex flex-row md:items-center px-6 md:px-0 md:justify-center'>
        <ArrowBackIcon onClick={goPrev} className='md:mr-4 mr-3 border-2 rounded-full border-black hover:border-[#56B3C2] hover:transition-colors p-2 hover:cursor-pointer' style={{fontSize:"40px"}}/>
        <ArrowForwardIcon onClick={goNext} className='border-2 rounded-full border-black p-2 hover:border-[#56B3C2] hover:transition-colors hover:cursor-pointer' style={{fontSize:"40px"}}/>
        </div>
          </div>
           <Swiper
          slidesPerView={1}
          spaceBetween={20} 
          modules={[Navigation, Pagination, Scrollbar]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRefMob.current = swiper)}
          ref={swiperRefMob}
          style={{ width: '100%', maxWidth: '100vw' }} 
        >
          
            <SwiperSlide>
            <div className='flex md:flex-row flex-col items-center justify-around bg-[#56B3C2] rounded-2xl md:w-full md:py-[10vh] h-[75vh] px-6'>
                <div>
                <h1 className='font-bold text-4xl md:text-5xl text-white mb-8'>Meditation</h1>
                <h1 className='font-bold text-base text-white'>Attend Meditaton Sessions with us and attain a peaceful mind.</h1>
                </div>
                <img src={Meditation} alt="" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex md:flex-row flex-col items-center justify-around bg-[#F1DEC0] rounded-2xl md:w-full md:py-[10vh] h-[75vh] px-6'>
                <div>
                <h1 className='font-bold text-4xl md:text-5xl text-black/80 mb-8'>Explore the World</h1>
                <h1 className='font-bold text-base text-black/80'>Explore the World in its newness, discover India.</h1>
                </div>
                <img src={Explore} alt="" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex md:flex-row flex-col items-center justify-around bg-[#56B3C2] rounded-2xl md:w-full md:py-[10vh] h-[75vh] px-6'>
                <div>
                <h1 className='font-bold text-4xl md:text-5xl text-white mb-8'>Natural Farms</h1>
                <h1 className='font-bold text-base text-white'>Enjoy the delight of Natural greenery, beauty and vegetation.</h1>
                </div>
                <img src={Naturalfarms} alt="" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex md:flex-row flex-col items-center justify-around bg-[#F1DEC0] rounded-2xl md:w-full md:py-[10vh] h-[75vh] px-6'>
                <div>
                <h1 className='font-bold text-4xl md:text-5xl text-black/80 mb-8'>Workation</h1>
                <h1 className='font-bold text-base text-black/80'>Spend Sometime away from the crowdedness of citites and relax in the Natural bounty.</h1>
                </div>
                <img src={Workation} alt="" />
            </div>
            </SwiperSlide>
           
         
        </Swiper>
      
        </div>
    </div>
  )
}

export default Home