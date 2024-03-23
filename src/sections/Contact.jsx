import React from 'react'
import { TfiEmail} from "react-icons/tfi";
import { FaPhoneFlip, FaInstagram, FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <section id='contact' className='min-h-screen'>
        <div className='absolute right-0 mr-48 mt-16'>
          <h1 className='text-4xl font-averia text-white'>Contact Us</h1>
          <p className='font-annie text-3xl text-white mt-4'><TfiEmail />info@splatter.com</p>
          <p className='font-annie text-3xl text-white mt-4'><FaPhoneFlip />+254712345678</p>
          <p className='font-annie text-3xl text-white mt-4'><FaInstagram />@officialsplatter</p>
          <p className='font-annie text-3xl text-white mt-4'><FaLinkedin />officialsplatter</p>
        </div>
    </section>
  )
}

export default Contact
