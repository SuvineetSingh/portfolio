import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Suvineet Singh
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full">
            <a
              href="#about-me"
              className="cursor-pointer text-gray-100 hover:text-purple-500 hover:text-lg focus:text-lg"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-gray-100 hover:text-purple-500 hover:text-lg focus:text-lg"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-gray-100 hover:text-purple-500 hover:text-lg focus:text-lg"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
