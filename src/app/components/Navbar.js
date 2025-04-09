import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="">
        <p className="text-[34px] font-semibold mx-2 w-10">Ar</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abdulrehmanchahal/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin />
        </a>

       
        <a
          href="https://github.com/abdulrehmannjutt"
          target="_blank"
          className="cursor-pointer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
