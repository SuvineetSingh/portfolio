"use client";

import { Socials } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactMe() {
  const [userName, setUserName] = useState("Username");
  const [userEmail, setEmail] = useState("useranme@gmail.com");
  const [message, setMessage] = useState("Type your message here");
  return (
    <div className="text-center">
      <h1 className="text-[40px] text-white font-medium text">
        Let's connect!
      </h1>

      <div className="flex justify-center ml-80 -mt-10">
        <img src="/downArrowWhite.svg" alt="Down Arrow White" />
      </div>
      <div className="flex flex-row gap-5 justify-center mb-20 -mt-10">
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
              width={45}
              height={45}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
