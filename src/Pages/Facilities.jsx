import Property from "../assets/Facilities/Property.png"
import SI1 from "../assets/Home/stockimg 3.png"
import SI2 from "../assets/Home/stockimg 4.png"
import SI3 from "../assets/Home/stockimg 5.png"

const Facilities = () => {
  return (
    <div>
        <div className='flex md:flex-row flex-col md:items-center justify-between md:mx-[10vw] px-6 md:mt-36 mt-2'>
            <img src={Property} alt="" className="md:w-[30vw]"/>
            <div className='flex flex-col'>
                <h1 className='md:text-4xl font-semibold text-2xl md:mb-20 mt-8 mb-4'>Property Description</h1>
                <p className='md:w-[40vw]'>A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day.</p>
                <ol className="list-decimal px-4">
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
                </ol>
            </div>
        </div>
        <div className="md:mx-[10vw] px-6 md:my-[8vh] mt-8">
            <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-4'>Health & Wellness</h1>
            <div className='flex md:flex-row flex-col items-center justify-between md:mt-8'>
                <div>
                    <img src={SI1} alt="" className='w-[20rem]'/>
                    <h1 className='font-bold text-black/70 mt-2 mb-4'>Natural Farms</h1>
                </div>
                <div>
                    <img src={SI2} alt="" className='w-[20rem]'/>
                    <h1 className='font-bold text-black/70 mt-2 mb-4'>Natural Farms</h1>
                </div>
                <div>
                    <img src={SI3} alt="" className='w-[20rem]'/>
                    <h1 className='font-bold text-black/70 mt-2 mb-4'>Natural Farms</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities