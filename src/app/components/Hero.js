import React from "react";
import { HERO_CONTENT } from "../../../constants/Constants";
import profilePic from "../assets/images/ar-nobg1.png";

import Image from "next/image";


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl hidden lg:flex">
              Abdul Rehman
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mt-[32px] lg:mt-0">
              Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl flex lg:hidden">
            Abdul Rehman
          </h1>
          <div className="flex justify-center">
            <Image
              src={profilePic}
              alt="Abdul Rehman"
              width={380}
              height={380}
              className="rounded-full w-[370px] h-[380px] lg:w-[380px] lg:h-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
