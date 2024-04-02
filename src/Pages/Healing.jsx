import React, { useState } from 'react';
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import SI3 from "../assets/Home/dest3.svg";
import SI4 from "../assets/Home/dest4.svg";

const activities = [
  {
    id: 1,
    name: 'Creative Movement Therapy',
    description: 'Discover the transformative power of Creative Movement Therapy at Anantha Grams, where movement and emotion flow together in harmony. This unique session invites you to explore and express your innermost feelings through the natural language of your body, offering a path to healing and self-discovery. In the calm of our nurturing environment, let go of constraints and find freedom in movement, guided by our expert facilitators. Suitable for all, regardless of dance skill, this therapy celebrates the joy of movement as a gateway to emotional release and personal growth. Join us, and embark on a journey to wellness that moves beyond words, into the expressive realm of creative motion.',
    image: SI4,
    subheading:"Move and Heal: Creative Movement Therapy"
  },
  {
    id: 2,
    name: 'Art Therapy',
    description: 'Art therapy stands as a transformative practice, harnessing the power of creative expression to navigate the complexities of human emotions. This therapeutic approach integrates various artistic mediums, allowing individuals to explore and articulate feelings that words alone may not capture. Delving into the origins and core principles of art therapy, we uncover its capacity to foster self-discovery, emotional release, and psychological healing, marking a profound journey toward mental well-being',
    image: SI3, // Update with the correct image if available
    subheading:"Pathways to Expression and Healing"
  },
  {
    id: 3,
    name: 'Reiki Healing',
    description: 'Reiki is a simple, natural and safe energy healing modality that is known to be effective in healing the whole person including mind, body and spirit. Many people have reported miraculous results including recovery from illnesses, feelings of peace, security and a sense of overall well being. To learn Reiki or receive sessions from Reiki masters, please get in touch with us directly.',
    image: SI3, // Update with the correct image if available
    subheading:"Reiki Healing: Balance and Tranquility"
  },
  {
    id: 4,
    name: 'Sound Healing',
    description: 'Discover the transformative power of Sound Healing, an ancient yet innovative therapy that harmonizes the mind, body, and spirit through the profound impact of sound and vibration. This noninvasive practice offers a sanctuary of relaxation, promoting a balance that addresses stress, anxiety, insomnia, and a spectrum of health concerns. At the core of Sound Healing lies the principle that every aspect of our being is influenced by vibrational frequencies, including our cells and the energetic chakras that govern our physical and emotional states. Through targeted sound frequencies, using instruments like tuning forks, Tibetan singing bowls, and crystal bowls, Sound Healing works to synchronize our internal frequencies, leading to a state of deep relaxation and heightened awareness known as the flow state. The therapeutic journey of Sound Healing encompasses various modalities, from the ancient art of chanting and mantra recitation to immersive sound baths and kirtan sessions. These practices facilitate emotional release, clear energetic blockages, and cultivate a profound sense of peace and well-being.',
    image: SI3, // Update with the correct image if available
    subheading:"Harmonizing Health: The Essence of Sound Healing"
  },
  {
    id: 5,
    name: 'Ayurvedic Therapy',
    description: 'Ayurvedic Therapy, an ancient healing tradition from India, is a holistic approach to health and wellness, deeply rooted in the natural wisdom of life and healing. This venerable practice, over 3,000 years old, is founded on the principle of maintaining a harmonious balance between the mind, body, spirit, and the environment, embodying the Sanskrit meaning of Ayurveda: the science of life. At the heart of Ayurvedic Therapy lies the belief that wellness depends on a delicate equilibrium among the body energies, or doshas, and that health issues stem from disruptions in this balance. To restore harmony, Ayurveda prescribes a comprehensive regimen starting with internal purification, followed by tailored diets, herbal remedies, rejuvenating massage therapies, yoga, and meditation, each meticulously aligned with an individual unique constitution. Central to Ayurvedic medicine are the natural elements used in treatments, including an extensive array of herbs, oils, and common spices, revered for their healing properties and their ability to detoxify, nourish, and revitalize the body and mind.',
    image: SI3, // Update with the correct image if available
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

export default Healing;
