import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          link="https://rent-property-two.vercel.app/"
          src="/rent-image.png"
          title="Modern Renting Website"
          description="Modern renting website made with Next.js and Tailwind "
        />
        <ProjectCard
          link="https://trail-buddy-chi.vercel.app/"
          src="/trailbuddy.png"
          title="Modern Camping Guide"
          description="Travel website made with Next.js and Tailwind"
        />
        <ProjectCard
          link="https://github.com/SuvineetSingh/NewsWebsite"
          src="/newsWebsite.png"
          title="News Website"
          description="News website made with React, Javascript, Bootstrap, newsAPI.org"
        />
      </div>
    </div>
  );
};

export default Projects;
