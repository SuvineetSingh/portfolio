"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ link, src, title, description }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-110">
      {}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <a
          className="p-4 text-white opacity-0 group-hover:opacity-100 text-[12px] absolute pb-22 bg-purple-500 rounded-xl bottom-48 left-40"
          href={link}
          target="_blank"
        >
          Visit me!
        </a>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
