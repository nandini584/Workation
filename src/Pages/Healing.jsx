import React, { useState } from 'react';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import SI3 from "../assets/Home/dest3.svg";
import SI22 from "../assets/Home/healing.jpg";
import SI23 from "../assets/Home/art-therapy.jpg";
import SI24 from "../assets/Home/movement.jpg";
import SI25 from "../assets/Home/sound.jpg";
import SI26 from "../assets/Home/ayurvedic.jpg";

const activities = [
  {
    id: 1,
    name: 'Creative Movement Therapy',
    description: 'Discover the transformative power of Creative Movement Therapy where movement and emotion flow together in harmony. This unique session at Anantha Gram helps you let go of constraints and find freedom in movement. It invites you to explore and express your innermost feelings through the natural movements of your body, offering a path to healing and self-discovery. Guided by our expert facilitators, in the calm of a nurturing environment, join us on a journey to wellness that moves beyond words, into the expressive realm of creative motion.',
    image: SI24,
    subheading:"Move and Heal: Creative Movement Therapy"
  },
  {
    id: 2,
    name: 'Art Therapy',
    description: 'Art therapy stands as a transformative practice, harnessing the power of creative expression to navigate the complexities of human emotions. This therapeutic approach integrates various artistic techniques, allowing individuals to explore and articulate feelings that words alone may not be able to capture. Delving into the origins and core principles of art therapy, we at Anantha Gram uncover its capacity to foster self-discovery, emotional release and psychological healing, marking a profound journey towards mental well-being. ',
    image: SI23, // Update with the correct image if available
    subheading:"Pathways to Expression and Healing"
  },
  {
    id: 3,
    name: 'Reiki Healing',
    description: 'Reiki is a simple, natural and safe energy healing modality that is known to be effective in healing the whole person including mind, body and spirit. It is based on the idea that we all have an unseen ‘life force energy’ that flows through our bodies. A Reiki practitioner gently moves their hands just above or on the client’s clothed body, with the intention to provide healing by encouraging a healthy flow of energy. Anantha Gram prides itself for its association with Reiki masters whose healings have helped people recover from illnesses, and behavioural and lifestyle concerns such as feelings of lack of peace, security and a sense of overall well-being.',
    image: SI22, // Update with the correct image if available
    subheading:"Reiki Healing: Balance and Tranquility"
  },
  {
    id: 4,
    name: 'Sound Healing',
    description: 'Anantha Gram summons you to discover the transformative power of Sound Healing, an ancient form of therapy that synchronises the mind, body and spirit through the profound impact of sound and vibration. This non-invasive practice works to synchronise our internal frequencies, leading to a state of deep relaxation that addresses various health issues as well as lifestyle concerns such as stress, anxiety and insomnia, to name a few. At the core of Sound Healing lies the principle that every aspect of our being is influenced by vibrational frequencies, including our cells and the energetic chakras that govern our physical and emotional states. The therapeutic journey of Sound Healing encompasses various practices that facilitate emotional release, clear energetic blockages and cultivate a profound sense of inner peace and well-being.',
    image: SI25, // Update with the correct image if available
    subheading:"Harmonizing Health: The Essence of Sound Healing"
  },
  {
    id: 5,
    name: 'Ayurvedic Therapy',
    description: 'Ayurvedic Therapy, an ancient healing tradition from India, is a holistic approach to health and wellness. At the heart of Ayurvedic Therapy lies the belief that wellness depends on a delicate equilibrium among the body energies or doshas, and that health issues stem from disruptions in this balance. To restore harmony, Ayurveda prescribes a comprehensive regimen starting with internal purification followed by tailored diets, herbal remedies, rejuvenating massage therapies, yoga and meditation, each meticulously aligned with an individual’s unique constitution. At Anantha Gram, our expert Ayurvedic facilitators provide treatments using natural elements such as an extensive array of herbs, oils and common spices, revered for their ability to detoxify, nourish, and revitalise the body and mind.',
    image: SI26, // Update with the correct image if available
    subheading:"Embracing Wellness: The Journey Through Ayurvedic Therapy"
  },
];

const Healing = () => {
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
        <div className='flex flex-col md:w-[40vw] overflow-y-scroll bg-[#F7E8D0]/40 md:h-[100vh] rounded-3xl md:px-12 px-4 md:mt-28 mt-20 md:mb-10'>
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

export default Healing;
