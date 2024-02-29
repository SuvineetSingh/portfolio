"use client";
import React, { useState } from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const [gmailId, setGmailId] = useState("suvineetsingh7@gmail.com");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(gmailId);
    alert("Gmail ID copied to clipboard!");
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">
              Suvineet&apos;s Portfolio
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Thanks for visiting my website!
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/in/suvineetsingh/">
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
            <p className="flex flex-row items-center cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/SuvineetSingh">
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <IoCall />
              <span className="text-[15px] ml-[6px]">+1 (732)-997-2402</span>
            </p>

            <p
              className="flex flex-row items-center my-[15px] cursor-pointer"
              onClick={copyToClipboard}
            >
              <BiLogoGmail />
              <span className="text-[15px] ml-[6px]">{gmailId}</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Suvineet Singh. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
