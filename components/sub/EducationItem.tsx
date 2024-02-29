import React from "react";
import { FaSchoolFlag } from "react-icons/fa6";

export default function EducationItem({ year, title, university }) {
  return (
    <div className="mb-4 w-full">
      <FaSchoolFlag />
      <div className="text-sm text-purple-400">{year}</div>
      <div className="text-lg font-bold  text-cyan-500">{title}</div>
      <div className="text-sm  text-white">{university}</div>
    </div>
  );
}
