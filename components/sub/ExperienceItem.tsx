import React from "react";
import { MdBusinessCenter } from "react-icons/md";

export default function ExperienceItem({ date, title, description }) {
  return (
    <div className="mb-10 justify-center w-full">
      <MdBusinessCenter />
      <div className="text-sm text-purple-400">{date}</div>
      <div className="text-lg font-bold text-cyan-500">{title}</div>
      <div className="text-sm  text-white w-full">{description}</div>
    </div>
  );
}
