import React from 'react'
import Image from "next/image";  // Import Image from next/image
import aboutImg from '../assets/images/about.jpg';
import { ABOUT_TEXT } from '../../../constants/Constants';


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Left Section with Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <Image className="rounded-2xl" src={aboutImg} alt="About" width={400} height={400} />
          </div>
        </div>
        {/* Right Section with Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About