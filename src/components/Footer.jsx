import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#91C8E4] shadow-lg md:pt-20 text-black  bottom-0 left-0 right-0 z-40 md:pb-8 pb-5  py-12 ">
      <div className="  flex md:justify-around items-center md:flex-row flex-col justify-center px-3 w-full md:gap-y-0 gap-y-7 ">
        <div className="md:space-y-3 space-y-1 text-center">
          <h2 className="md:text-xl text-md font-semibold">Contact Us</h2>
          <p className="text-sm">Email: contact@CodeSphere.com</p>
          <p className="text-sm">Phone: +91 7823048211</p>
        </div>
        <div className='md:space-y-3 space-y-1 '>
        <h2 className="md:text-xl text-md font-semibold text-center">Subscribe to Our Newsletter</h2>
        <div className="flex gap-4">
          <input type="email" placeholder="Your Email" className='p-1 rounded-md' />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
        </div>
        </div>
       

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
      <div className=''>
      <div className='flex items-center justify-center gap-1.5 md:mt-10 mt-6'>
      <img
            src={logo}
            alt="logo"
            className=" cursor-pointer w-[48px] h-[48px]"
            
          />
          <span className="logo text-4xl">CodeSphere</span>
      </div>
      <div className='text-center mt-3 so'>
            <a href="/terms" className='mr-2'>Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
      </div>
     
    </footer>
  );
};

export default Footer;
