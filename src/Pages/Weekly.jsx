import React, { useState } from 'react';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import SI3 from "../assets/Home/dest3.svg";
import SI4 from "../assets/Home/dest4.svg";

const activities = [
  {
    id: 1,
    name: 'Drum Circles',
    description: 'Anantha Grams invites you to immerse yourself in the rhythmic euphoria of our Drum Circles, a cherished part of our weekly activities. Every Sunday, the serene landscapes of Anantha Grams come alive with the vibrant beats of drums and dhols, setting the stage for an evening of uninhibited dance and joyous celebration. Our drum circles are more than just a musical gathering; they are a communal space where individuals from all walks of life come together to share, connect, and revel in the collective energy. Surrounded by the lush greenery of our retreat, participants not only get to indulge in the mesmerizing rhythms but also have the opportunity to mingle, forge new friendships, and capture memorable moments against the backdrop of our picturesque setting. Whether you are a seasoned drummer eager to join the circle or someone looking to experience the magic of group rhythm for the first time, Anantha Grams offers an open, welcoming space for you to express, unwind, and celebrate life is simple pleasures. Join us this Sunday and be part of a tradition that celebrates togetherness, artistry, and the sheer joy of music.',
    image: SI4,
    subheading:"Rhythms of Togetherness: Drum Circles"
  },
  {
    id: 2,
    name: 'Ecstatic Dance',
    description: 'Step into a world of uninhibited movement and self-expression with Anantha Grams Ecstatic Dance Workshop, held every Sunday as part of our enriching weekly lineup. This workshop is not just a dance event; it is a journey into the depths of joy, freedom, and connection. As the music starts, allow yourself to be carried away by the waves of eclectic beats, moving freely without judgment or restraint. Our Ecstatic Dance Workshop is designed as a safe haven for creativity and expression, where the dance floor becomes a melting pot of stories, emotions, and energies. Surrounded by the natural beauty of Anantha Grams, participants find themselves in a supportive environment that encourages spontaneity and authentic connections with others. Whether you are a seasoned dancer or someone looking to explore the boundaries of your own movement, this workshop offers a unique opportunity to explore, express, and expand. Join us and experience the transformative power of dance, where every movement is a step towards self-discovery and collective ecstasy.',
    image: SI3, 
    subheading:"Flow in Motion: Ecstatic Dance Workshop"
  },
  {
    id: 3,
    name: 'Yoga',
    description: 'As a mind and body practice, Yoga helps us build strength and flexibility. Its other benefits include an ability to deal with stress more effectively and enjoy a more peaceful and joyful state of mind. Combining asanas, pranayama, and dhyana as integrative aspects of healing, Yoga helps increase our mental and physical flexibility. Join our yoga sessions led by experts, to cultivate a better sense of overall well-being.',
    image: SI3, // Update with the correct image if available
    subheading:"Harmony in Movement: Yoga Sessions"
  },
  {
    id: 4,
    name: 'Meditation',
    description: 'Embrace the stillness and explore the depths of your inner world at Anantha Grams Meditation Gatherings, a key part of our nurturing weekly activities. In the tranquil embrace of nature, our meditation sessions offer a sanctuary from the hustle and bustle of daily life, guiding you towards a state of deep peace and mindfulness. Through a variety of techniques, from focused attention to mindfulness and loving-kindness meditations, our expert facilitators help you tap into a wellspring of calm and clarity. These sessions are designed to foster an environment where silence speaks volumes, allowing you to connect with your true self and the interconnectedness of all life. Whether you are new to meditation or looking to deepen your practice, our gatherings provide a supportive community for personal growth, spiritual awakening, and the cultivation of a serene, balanced mind. Join us in this journey of self-discovery and experience the transformative power of meditation, where every breath is a step closer to inner harmony and enlightenment.',
    image: SI3, // Update with the correct image if available
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
                  <h1 className='font-semibold md:text-lg text-black/90 mt-2 font-opensans' style={{ color: currentActivity.id === activity.id ? '#56B3C2' : 'inherit' }}>{activity.name}</h1>
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
