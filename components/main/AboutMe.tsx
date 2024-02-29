"use client";

import React from "react";
import ExperienceItem from "../sub/ExperienceItem";
import EducationItem from "../sub/EducationItem";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

export default function AboutMe() {
  const RESUME_URL =
    "https://drive.google.com/drive/u/3/folders/1Tij9Gq2AcUqZt7wiGDEjoC8m4n4A2CNk";
  const onClickhandler = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <div className="" id="about-me">
      <div className="flex justify-center">
        <h3 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          About me
        </h3>
      </div>
      <div className="flex justify-center text-white ">
        <p className="w-full text-center text-pretty">
          Passionate and persistent software engineer with{" "}
          <span className="text-[35px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            3
          </span>{" "}
          years of experience and an ability to solve creative technical
          problems.
        </p>
      </div>
      {/* <div>
        <button onClick={onClickhandler}>Resume</button>
      </div> */}
      <div className="flex justify-center mt-7">
        <motion.a
          variants={slideInFromLeft(1)}
          className="flex justify-center px-10 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://drive.google.com/file/d/1tbDnJLgUxSTr2YNNDOnQLK8YiZck0J2h/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </motion.a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start pl-20 mt-20">
        <div className="flex-grow md:basis-1/2 md:max-w-1/2">
          <h5 className="text-xl text-center mb-6">
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Experience
            </span>{" "}
          </h5>
          <div className="bg-transparent shadow-lg rounded-lg p-4">
            {/* Experience Items */}
            <ExperienceItem
              date="Sept 2023 - Jan 2024"
              title="Front-End Developer – Revent Solutions"
              description="Responsible for developing and maintaining ~103 UI screens using .React-Native, TypeScript, and MaterialUI.Enhanced user interaction by 22% with various npm manager including responsive SVG and gifted charts for data visualization in UI, and expedited iOS app development by 20% through Xcode simulator debugging."
            />
            <ExperienceItem
              date="Sept 2022 - Dec 2022"
              title="Full Stack Developer – Driverfly"
              description="Responsible for developing and maintaining a custom form software using Next.js, React, and SQL. Boosted site efficiency with TypeScript enhancements, slashing load times by over 10 seconds, and secured software reliability with extensive 30+ manual tests and Jira for issue tracking"
            />
            <ExperienceItem
              date="Feb 2021 - Sept 2021"
              title="Software Engineer – Capgemini"
              description="Collaborated with a cross-functional team of 25+ developers, efficiently debugging Linux kernels and successfully resolvingover 200 bugs.Achieved a 15% reduction in ticket resolution time, and ensured timely delivery of fixes through effective patch implementation."
            />
            <ExperienceItem
              date="June 2018 - June 2020"
              title="Front-End Developer – SoftApp Technologies"
              description="Developed and deployed JavaScript-based animations and transitions to enhance the visual appeal and interaction of the website, contributing to a 30% decrease in bounce rate and a 40% increase in user retention.
              Enhanced website performance by implementing Bootstrap and optimizing code, reducing page-load time by 6 seconds & fortifying website responsiveness."
            />
            {/* ... add other ExperienceItem components here ... */}
          </div>
        </div>

        <div className="flex-grow md:basis-1/2 md:max-w-1/2 ml-32">
          <h5 className="text-xl text-center mb-6">
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pr-14">
              {" "}
              Education
            </span>{" "}
          </h5>
          <div className="bg-transparent shadow-lg rounded-lg p-4">
            {/* Education Items */}
            <EducationItem
              year="2023"
              title="Master of Science in Computer Science"
              university="New Jersey Institute of Technology"
            />
            <EducationItem
              year="2020"
              title="Bachelor of Technology in Electronics"
              university="Guru Gobind Singh Indraprastha University"
            />
            {/* ... add other EducationItem components here ... */}
          </div>
        </div>
      </div>
    </div>
  );
}
