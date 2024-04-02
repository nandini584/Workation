import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
const Navbar = () => {
  return (
    <div className='bg-white backdrop-blur-lg bg-opacity-10 fixed top-0 z-30 w-[100vw] px-[10vw] py-2 flex flex-row justify-between items-center'>
        <NavLink to="/"><img src={Logo} alt="" className="w-24"/></NavLink>
        <div className='flex flex-row items-center'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-black font-opensans underline underline-offset-8 decoration-[#FF8A31] decoration-2 px-5' : 'text-black nav-link px-5'}><h1 className='text-black font-Secondary-semibold text-lg'>Home</h1></NavLink>
            {/* <NavLink to="/activities" className={({ isActive }) => isActive ? 'text-white underline underline-offset-8 decoration-[#FF8A31] decoration-2 px-5' : 'text-black nav-link px-5'}><h1 className='text-black font-Secondary-semibold text-lg'>Activities</h1></NavLink> */}
            {/* <NavLink to="/facilities" className={({ isActive }) => isActive ? 'text-white underline underline-offset-8 decoration-[#FF8A31] decoration-2 px-5' : 'text-white nav-link px-5'}><h1 className='text-black font-Secondary-semibold text-lg'>Facilities</h1></NavLink> */}
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-opensans underline underline-offset-8 decoration-[#FF8A31] decoration-2 px-5' : 'text-white nav-link px-5'}><h1 className='text-black font-Secondary-semibold text-lg'>About</h1></NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-opensans underline underline-offset-8 decoration-[#FF8A31] decoration-2 px-5' : 'text-white nav-link px-5'}><h1 className='text-black font-Secondary-semibold text-lg'>Contact</h1></NavLink>
        </div>
    </div>
  )
}

export default Navbar