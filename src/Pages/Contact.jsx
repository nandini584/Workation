// import Contact from "../../Images/StockImages/contact.svg"
// import Whatsapp from "../../Images/Socials/Social Icons.svg"
// import Gmail from "../../Images/Socials/Rectangle 40.svg"
import { Link } from "react-router-dom";
import Navbar from '../Components/NavbarDark';
import NavbarMini from '../Components/NavbarMini';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import header from "../assets/About/header.jpg";
// import emailjs from  '@emailjs/browser';
// import {useState, useRef} from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  //   const form = useRef();
  //   const notify = () => toast("Thank you for sending a meassage, We have recieved it. We are getting back to you soon!");
  //   const [name, setName]=useState("");
  //   const [email, setEmail]=useState("");
  //   const [phone, setPhone]=useState("");
  //   const [message, setMessage]=useState("");
  //   const handleSubmit =(e)=>{
  //       e.preventDefault()
  //       const serviceid='service_j214cx4';
  //       const templateid='template_llzgb6u';
  //       const publickey='exs1HHhQJvDvfI-9i';

  //       const templateparams={
  //           from_name : name,
  //           from_email : email,
  //           from_phone: phone,
  //           message : message,
  //           to_name:'Venugopal'
  //       }

  //       emailjs.sendForm(serviceid, templateid, form.current, publickey)
  //     .then((result) => {
  //       setName("");
  //       setEmail("");
  //       setPhone("");
  //       setMessage("");
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };
  return (
    <div>
        <div className='inline md:hidden z-[100]'>
          <NavbarMini/>
      </div>
      <div className='absolute top-0 hidden md:inline'>
      <Navbar/>
      </div>
      <div className="mt-20 sm:mt-32"><img src={header} alt="" /></div>
    <div className='flex md:flex-row flex-col items-center justify-between md:mt-24 md:mx-[10vw] mx-6 mt-20 bg-gradient-contact'>
        <div className='flex flex-col'>
            {/* <h1 className='text-sm font-Secondary-bold text-[#1B2377] md:mb-10 mb-4'><Signin/></h1> */}
            <div className="bg-[#B9CF9B] md:w-[40vw] px-8 md:py-16 py-8 rounded-2xl ">
            <h1 className='md:text-4xl text-2xl font-playfair text-white md:mb-12 mb-2 font-bold'>Got Questions?</h1>
            <h1 className='md:text-2xl text-base font-opensans text-white md:mb-28 mb-12 font-medium'>Get in Touch with us.</h1>
            <div className="flex flex-row mb-8">
            <PhoneInTalkIcon className="text-white mr-2"/>
            <h1 className="text-white md:text-lg text-sm font-semibold font-opensans">+91 9811529898, +91 7291930555</h1>
            </div>
            <div className="flex flex-row mb-8">
                <LocationOnIcon className="text-white mr-2"/>
            <h1 className="text-white md:text-lg text-sm font-semibold font-opensans">Ranbir Nagar V&PO Kachwa District Karnal - 132001
</h1>
            </div>
            <div className="flex flex-row">
                <EmailIcon className="text-white mr-2"/>
            <h1 className="text-white md:text-lg text-sm font-semibold font-opensans">info@anathagram.com</h1>
            </div>
            </div>
            {/* <img src={Contact} alt="" /> */}
        </div>
        {/* <ToastContainer/> */}
        <form action="" >
            <div className='md:py-12 md:px-12 p-6 drop-shadow-form md:rounded-2xl rounded-lg bg-white'>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1 font-opensans'>Full Name</h1>
                <input required type="text" name="from_name" placeholder='Name' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[28vw] w-[80vw]'/>
        </div>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1 font-opensans'>Email</h1>
                <input required type="email" name="from_email" placeholder='Email' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[28vw] w-[80vw]' />
        </div>
       <div className="md:mb-10 mb-7">
            <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1 font-opensans'>Phone Number</h1>
                <input required type="phone" name="from_phone" placeholder='Phone Number' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[28vw] w-[80vw]' />
       </div>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium mb-3 font-opensans'>Message</h1>
                <textarea required type="text" name="message"  placeholder='Write your message.....' cols="10" rows="6" className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium md:text-sm text-xs md:w-[28vw] w-[80vw]'/>
        </div>
        <div>
            <button type="submit" className='font-Secondary-semibold bg-[#B9CF9B] font-opensans text-white rounded-full font-bold md:text-sm text-xs py-3 px-8 contact-button' >Send Message</button>
        </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Contact