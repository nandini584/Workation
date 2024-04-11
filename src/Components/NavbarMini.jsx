import {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.svg"
const NavbarMini = () => {
  const [menu, setMenu] = useState(false);
  function handleClick(menu){
    setMenu(menu);
  }
  return (
    <div className='flex flex-row items-center justify-between w-full px-6 py-1 bg-white fixed top-0'>
        <img src={Logo} alt="" className='w-14' />
        <MenuIcon onClick={()=>handleClick(!menu)}/>
        {menu && (
          <div>
        <div className={`fixed top-0 right-0 h-[100vh] w-[80vw] bg-white px-6 py-4 z-40 transition-transform duration-1000 ease-in-out transform ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-row items-center justify-between'>
            <img src={Logo} className='w-16'/>
          <CloseIcon style={{fontSize:"30px"}} onClick={()=>handleClick(!menu)}/>
          </div>
          <div className='flex flex-col mt-4 mx-3'>
            <Link to="/"><h1 className='text-black font-opensans font-Secondary-medium text-base py-4'>Home</h1></Link>
            {/* <Link to="/activities"><h1 className='text-black font-Secondary-medium text-base py-4'>Activities</h1></Link> */}
            {/* <Link to="/facilities"><h1 className='text-black font-Secondary-medium text-base py-4'>Facilities</h1></Link> */}
            <Link to="/about"><h1 className='text-black font-opensans font-Secondary-medium text-base py-4'>About</h1></Link>
            <Link to="/contact"><h1 className='text-black font-opensans font-Secondary-medium text-base py-4'>Contact us</h1></Link>
          </div>
        </div>
        </div>)}
    </div>
  )
}

export default NavbarMini