import React from "react";
import { HERO_CONTENT } from "../../../constants/Constants";
import profilePic from "../assets/images/ar-nobg1.png";

import Image from "next/image";


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 md:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight md:mt-16 md:text-8xl">
              Abdul Rehman
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-8">
          <div className="flex justify-center">
            <Image
              src={profilePic}
              alt="Abdul Rehman"
              width={380}
              height={380}
              className="rounded-full w-[370px] h-[380px] md:w-[380px] md:h-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
