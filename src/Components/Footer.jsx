import {Link} from "react-router-dom"
import Logo from "../assets/Logo.svg"
const Footer = () => {
  return (
    <div className='md:px-[10vw] px-6 md:py-4 pt-12 pb-6 flex flex-col overflow-x-hidden bg-[#F7E8D0]'>
        <div className='flex md:flex-row flex-col md:py-12 py-0 justify-between'>
            
            <div className='flex flex-col flex-end mb-8'>
                <img src={Logo} alt="" className='w-32 md:w-28 mb-4'/>
                <h1 className="font-Secondary-medium text-black/70 text-black text-base mt-4 md:w-[22vw] font-opensans"><a href=""><strong>Ranbir Nagar V&PO Kachwa District Karnal - 132001</strong></a></h1>
            </div>
            <div className='flex md:flex-row flex-col justify-between md:w-[45vw]'>
            <div className=''>
                <h1 className='font-semibold text-lg mb-6'>Pages</h1>
                <Link to="/"><h1 className='font-regular text-base mb-5 font-opensans'>Home</h1></Link>
                {/* <Link to="/activities"><h1 className='font-regular text-base mb-5 font-opensans'>Activities</h1></Link>
                <Link to="/facilities"><h1 className='font-regular text-base mb-5 font-opensans'>Facilities</h1></Link> */}
                <Link to="/about"><h1 className='font-regular text-base mb-5 font-opensans'>About</h1></Link>
                <Link to="/contact"><h1 className='font-regular text-base mb-5 font-opensans'>Contact</h1></Link>
            </div>
            <div className=''>
                <h1 className='font-semibold text-lg mb-6 font-opensans'>Contact us</h1>
                <Link to="tel:+919811529898"><h1 className='font-regular text-base mb-5 font-opensans'><a href="">Phone</a></h1></Link>
                <Link hrefLang="email:info@anathagram.com"><h1 className='font-regular text-base mb-5 font-opensans'>Email</h1></Link>
            </div>
           
            <div>
                <h1 className='font-semibold text-lg mb-2 md:mt-0 mt-0 font-opensans'>Social Media</h1>
                <a href="" target="_blank"><h1 className='font-regular text-base mb-5 font-opensans'>Facebook</h1></a>
                <a href="" target="_blank"><h1 className='font-regular text-base mb-5 font-opensans'>Instagram</h1></a>
                <a href="" target="_blank"><h1 className='font-regular text-base mb-5 font-opensans'>Linkedin</h1></a>
                {/* <a href="" target="_blank"><h1 className='font-regular text-base mb-5 font-opensans'>X</h1></a> */}
            </div> 
            </div>
        </div>
        <hr className='border-[1.5px] border-gray-300'/>
        <div className='md:flex md:flex-row md:items-center md:justify-between md:py-2 py-0 md:w-full flex-col'>
            <h1 className='md:text-sm text-xs mt-2 md:mt-0'>© 2024 Anantha Gram. All Rights Reserved</h1>
            
        </div>
    </div>
  )
}

export default Footer