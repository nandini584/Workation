import Physiotherapy from "../assets/Facilities/physiotherapy.png"
import Neurotherapy from "../assets/Facilities/neurotherapy.png"
import Mindfulness from "../assets/Facilities/mindfullness.png"
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import Property from "../assets/Home/stockimg 4.svg"
const Facilities = () => {
  return (
    <div>
        <div className='inline md:hidden z-[100]'>
          <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
      <Navbar/>
      </div>
        <div className='flex md:flex-row flex-col md:items-center justify-between md:mx-[10vw] px-6 md:mt-36 mt-[10vh]'>
            <img src={Property} alt="" className="md:w-[35vw] rounded-2xl"/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl font-semibold text-2xl font-playfair md:mb-14 mb-4'>Property Description</h1>
                <p className='md:w-[35vw] text-lg'>Aanantha Farms offers a rejuvenating escape that is streched across 14 acres, with 1.5 acres of open space. The ground floor features a spacious lounge, work station , fully-equipped kitchen area, and a cozy drawing room with a single bedroom. Upstairs, we have two additional bedrooms, a cozy living space, and a coffee/tea station. <br /><br /> Whether you prefer the ground floor's convenience or a lush green view from the first floor, the choice is at your disposal. Soak yourself in the tranquil vibes of the Aanantha Farms and strike the ideal harmony between productivity and peace.</p>
                <br />
                {/* <ol className="list-decimal px-4">
                    <li className="">1.5 acre total foot area</li>
                    <li>14 acre Property area</li>
                    <li>Ground Floor</li>
                    <ol className="list-[lower-alpha] px-4">
                        <li>Lounge Area,</li>
                        <li>Drawing Room,</li>
                        <li>1 Bedroom,</li>
                        <li>Bar, Kitchen,</li>
                        <li>Workstation</li>
                    </ol>
                    <li>First Floor</li>
                    <ul className="list-[lower-alpha] px-4">
                        <li>Living Space,</li>
                        <li>2 Bedrooms,</li>
                        <li>Tea & Coffee Corner</li>
                    </ul>
                </ol> */}
            </div>
        </div>
        <div className="md:mx-[10vw] px-6 md:my-[10vh] mt-16">
            <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4 font-playfair'>Health & Wellness</h1>
            <div className='flex md:flex-row flex-col items-center justify-between md:mt-8'>
                <div className="flex flex-col items-center justify-center">
                    <img src={Physiotherapy} alt="" className='w-[20rem] rounded-xl hover:scale-105 transition-all'/>
                    <h1 className='font-medium text-black/70 mt-2 mb-4 text-lg '>Physiotherapy</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={Neurotherapy} alt="" className='w-[20rem] rounded-xl hover:scale-105 transition-all'/>
                    <h1 className='font-medium text-black/70 mt-2 mb-4 text-lg '>Neurotherapy</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={Mindfulness} alt="" className='w-[20rem] rounded-xl hover:scale-105 transition-all'/>
                    <h1 className='font-medium text-black/70 mt-2 mb-4  text-lg'>Mindfulness Activities</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities