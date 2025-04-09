import React from 'react'
import Image from "next/image";  // Import Image from next/image
import aboutImg from '../assets/images/about.jpg';

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
            <Image
              className="rounded-2xl"
              src={aboutImg}
              alt="About"
              width={400}
              height={400}
            />
          </div>
        </div>
        {/* Right Section with Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a motivated and adaptable web developer with hands-on
              experience in building responsive and scalable web applications
              using the MERN stack. My journey started with a strong academic
              foundation in Computer Science and has evolved through real-world
              projects, freelance work, and internships. I’ve developed and
              contributed to multiple production-level applications.
              <br />
              <br />
              Proficient in React.js, Next.js, Node.js, Express.js, MongoDB, and
              modern front-end tools like Tailwind CSS, Bootstrap and SASS, I
              bring both technical depth and a keen eye for UI/UX. Whether
              working in a team or independently, I thrive on solving
              challenges, writing clean code, and continuously learning new
              technologies to deliver high-impact solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About