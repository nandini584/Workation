import React, { useState } from 'react';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import SI3 from "../assets/Home/dest3.svg"
import SI11 from "../assets/Home/dest1.svg"
import SI10 from "../assets/Home/meditation.jpg"
import SI12 from "../assets/Home/yoga.jpg"
import SI13 from "../assets/Home/ecstatic.jpg"

const activities = [
  {
    id: 1,
    name: 'Drum Circles',
    description: `Anantha Gram invites you to immerse yourself in the rhythmic euphoria of our Drum Circles, a cherished part of our weekly activities. Every week, the serene landscapes of Anantha Gram come alive with the vibrant beats of drums and dhols, setting the stage for an evening of uninhibited dance and joyous celebration! Our drum circles are more than just a musical gathering; they are a communal space where individuals from all walks of life come together to share, connect, and revel in the collective energy. Whether you are a seasoned drummer or someone looking to experience the magic of group rhythm for the first time, Anantha Gram offers an open, welcoming space for all to express, unwind, and celebrate life's simple pleasures. Please note, our drum circle experience requires a minimum group of 8 participants to ensure a rich, communal vibe.`,

    image: SI11,
    subheading:"Rhythms of Togetherness: Drum Circles"
  },
  {
    id: 2,
    name: 'Ecstatic Dance',
    description: 'Step into a world of uninhibited movement and self-expression with Anantha Gram’s weekly Ecstatic Dance Workshop! Our Ecstatic Dance Workshop is designed as a safe haven for creativity and expression, where the dance floor becomes a melting pot of stories, emotions and energies. Situated in the lap of nature, Anantha Gram allows its participants to have their bodies be led by nature’s own symphony, in a supportive environment that encourages spontaneity and authentic connections with others. Whether you are a seasoned dancer or someone looking to explore the boundaries of your own movement, this workshop offers a unique opportunity to explore, express and expand yourself to the beats of the music. Join us and experience the transformative power of dance, where every movement is a step towards self-discovery and collective ecstasy.',
    image: SI13, 
    subheading:"Flow in Motion: Ecstatic Dance Workshop"
  },
  {
    id: 3,
    name: 'Yoga',
    description: 'If you are seeking physical fitness along with a sense of contentment and inner bliss, Anantha Gram’s weekly Yoga sessions are for you. Our yoga sessions are an invitation to align your mind, body and soul, amidst serene landscapes. Begin the journey to your peaceful, stress free and productive self with us and get to enjoy a more peaceful and joyful state of mind. Combining asanas, pranayama and dhyana as integrative aspects of healing, our Yoga Sessions help increase your mental and physical flexibility and strength. To cultivate a better sense of overall well-being starting now, join our yoga sessions led by expert facilitators.',
    image: SI12, // Update with the correct image if available
    subheading:"Harmony in Movement: Yoga Sessions"
  },
  {
    id: 4,
    name: 'Meditation',
    description: 'Explore the depths of your inner world at the weekly Meditation Sessions offered at Anantha Gram. In the tranquil embrace of nature, our meditation sessions offer a refuge from the hustle-bustle of daily life, guiding you towards a state of deep inner peace and calm. Through a variety of techniques, from focused attention to loving-kindness, our expert facilitators help you tap into a wellspring of clarity and tranquillity. Whether you are new to meditation or looking to deepen your practice, our sessions provide you with a supportive space to connect with your true innermost self. Join us on this journey of self-discovery and experience the transformative power of meditation, where every breath is a step closer to inner harmony and enlightenment.',
    image: SI10, // Update with the correct image if available
    subheading:"Silence Within: Meditation Gatherings"
  },
];

const Weekly = () => {
  const [currentActivity, setCurrentActivity] = useState(activities[0]); // Default to Yoga

  return (
    <div>
      <div className='inline md:hidden z-[100]'>
        <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
        <Navbar/>
      </div>
      <div className='flex md:flex-row flex-col md:mx-[10vw] mx-6 justify-center'>
        <div className='flex flex-col md:w-[40vw] bg-[#F7E8D0]/40 md:h-[100vh] rounded-3xl md:px-12 px-4 md:mt-28 mt-20 md:mb-10'>
          {activities.map((activity) => (
            <div key={activity.id} className='flex flex-row items-center justify-start my-5 cursor-pointer' onClick={() => setCurrentActivity(activity)}>
              <img src={activity.image} alt="" className='md:w-44 w-40 mr-6'/>
              <div>
                  <h1 className='font-semibold md:text-lg text-black/90 mt-2 font-opensans' style={{ color: currentActivity.id === activity.id ? '#B9CF9B' : 'inherit' }}>{activity.name}</h1>
                  <h1 className='font-medium md:text-sm text-xs text-black/60 mt-2 font-opensans'>{activity.subheading}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className='md:w-[60vw] flex flex-col items-start md:mt-28 mt-10 md:px-10 overflow-y-scroll h-[100vh]'>
          <img src={currentActivity.image} alt="" className='md:w-[35vw]'/>
          <h1 className='text-xl font-bold ml-2 md:w-[35vw] mb-4 mt-8 font-opensans'>{currentActivity.name}</h1>
          <h1 className='md:text-base text-sm ml-2 md:w-[35vw] font-opensans'>{currentActivity.description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Weekly;
