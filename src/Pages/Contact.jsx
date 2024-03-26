// import Contact from "../../Images/StockImages/contact.svg"
// import Whatsapp from "../../Images/Socials/Social Icons.svg"
// import Gmail from "../../Images/Socials/Rectangle 40.svg"
import { Link } from "react-router-dom";
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
    <div className='flex md:flex-row flex-col items-center justify-between md:px-20 px-6 w-[100vw] md:mt-32 mt-6 bg-gradient-contact'>
        <div className='flex flex-col'>
            {/* <h1 className='text-sm font-Secondary-bold text-[#1B2377] md:mb-10 mb-4'><Signin/></h1> */}
            <h1 className='md:text-4xl text-2xl font-Secondary-bold text-black md:mb-6 mb-2'>Get Your Queries Resolved</h1>
            <div className='flex flex-row items-center'>
            <a href="https://wa.me/971564159009?text=Hi%20MYRO%20Team,%20I%20would%20like%20to%20know%20more%20about%20MYRO%20and%20how%20I%20can%20leverage%20its%20precise%20painting%20in%20my%20projects." target="_blank">
            {/* <img src={Whatsapp} alt="" className='mr-3 w-6 hover:-translate-y-2 transition-all duration-300' /> */}
            </a>
            <Link
            to='#'
            target="_blank"
            
        >
            {/* <img src={Gmail} alt="" className='w-10 hover:-translate-y-2 transition-all duration-300' />  */}
        </Link>
            </div>
            {/* <img src={Contact} alt="" /> */}
        </div>
        {/* <ToastContainer/> */}
        <form action="" >
            <div className='md:py-12 md:px-12 p-6 drop-shadow-form md:w-[35vw] w-[85vw] md:rounded-2xl rounded-lg bg-white md:mb-14 mb-7'>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1'>Full Name</h1>
                <input required type="text" name="from_name" placeholder='Name' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[19.7vw] w-[60vw]'/>
        </div>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1'>Email</h1>
                <input required type="email" name="from_email" placeholder='Email' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[19.7vw] w-[60vw]' />
        </div>
       <div className="md:mb-10 mb-7">
            <h1 className='text-xs text-black opacity-60 font-Secondary-medium md:mb-3 mb-1'>Phone Number</h1>
                <input required type="phone" name="from_phone" placeholder='Phone Number' className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium text-sm md:w-[19.7vw] w-[60vw]' />
       </div>
        <div className='md:mb-10 mb-7'>
                <h1 className='text-xs text-black opacity-60 font-Secondary-medium mb-3'>Message</h1>
                <textarea required type="text" name="message"  placeholder='Write your message.....' cols="10" className='outline-none p-2 rounded-md border-[1.5px] border-gray-300 font-Secondary-medium md:text-sm text-xs md:w-[19.7vw] w-[60vw]'/>
        </div>
        <div>
            <button type="submit" className='font-Secondary-semibold bg-[#56B3C2] text-white rounded-full font-bold md:text-sm text-xs py-3 px-8 contact-button' >Send Message</button>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Contact