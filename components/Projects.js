import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="bg-white/70 md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem] py-[2rem] px-[1rem] md:p-[2rem] w-[90%] lg:w-[60%] text-black h-fit">
      <div className="">
        <h1 className="min-[300px]:text-[3.5rem] text-[4rem] md:text-[4.5rem] lg:text-[4.5rem]  xl:text-[5rem] my-2 lg:my-5 text-center md:text-left">
          My Works.
        </h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-center leading-10 mx-auto">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2 mx-auto">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
