import React, { useState } from 'react';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import SI3 from "../assets/Home/dest3.svg";
import SI4 from "../assets/Home/dest4.svg";

const activities = [
  {
    id: 1,
    name: 'Drum Circles',
    description: 'Enjoy the drum circles night.',
    image: SI4,
    subheading:"yo yo yo"
  },
  {
    id: 2,
    name: 'Ecstatic Dance',
    description: 'Feel the rhythm and let loose.',
    image: SI3, // Update with the correct image if available
    subheading:"yo yo yo"
  },
  {
    id: 3,
    name: 'Yoga',
    description: 'As a mind and body practice, Yoga helps us build strength and flexibility. Its other benefits include an ability to deal with stress more effectively and enjoy a more peaceful and joyful state of mind. Combining asanas, pranayama, and dhyana as integrative aspects of healing, Yoga helps increase our mental and physical flexibility. Join our yoga sessions led by experts, to cultivate a better sense of overall well-being.',
    image: SI3, // Update with the correct image if available
    subheading:"yo yo yo"
  },
  {
    id: 4,
    name: 'Meditation',
    description: 'Find peace and clarity through meditation.',
    image: SI3, // Update with the correct image if available
    subheading:"yo yo yo"
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
      <div className='flex flex-row mx-[10vw] justify-center'>
        <div className='flex flex-col w-[40vw] bg-[#F7E8D0]/40 h-[100vh] rounded-3xl px-12 mt-28 mb-10'>
          {activities.map((activity) => (
            <div key={activity.id} className='flex flex-row items-center justify-start mt-10 cursor-pointer' onClick={() => setCurrentActivity(activity)}>
              <img src={activity.image} alt="" className='w-44 mr-6'/>
              <div>
                  <h1 className='font-semibold text-lg text-black/90 mt-2 font-opensans' style={{ color: currentActivity.id === activity.id ? '#56B3C2' : 'inherit' }}>{activity.name}</h1>
                  <h1 className='font-medium text-sm text-black/60 mt-2 font-opensans'>{activity.subheading}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className='w-[60vw] flex flex-col items-start mt-28 px-10 overflow-y-scroll h-[100vh]'>
          <img src={currentActivity.image} alt="" className='w-[35vw]'/>
          <h1 className='text-xl font-bold ml-2 w-[35vw] mb-4 mt-8 font-opensans'>{currentActivity.name}</h1>
          <h1 className='text-base ml-2 w-[35vw] font-opensans'>{currentActivity.description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Weekly;
