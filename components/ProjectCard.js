import React from 'react';

const ProjectCard = () => {
  return (
    <div className="w-full bg-white/30  pt-[2rem] pb-[1rem] text-black/80  delay-[50ms] transition-all rounded-sm">
      <div className="flex flex-col gap-2 justify-center items-center  w-fit h-fit mx-auto">
        <img
          src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1682313366/JB/toonsutra-removebg-preview_l78ex2.png"
          alt="toonsutra logo"
          className="w-[5rem] md:w-[9rem] h-[5rem] md:h-[9rem]"
        />
      </div>
      <p className="text-center min-[300px]:text-[.8rem] text-[1rem] md:text-[1.1rem] ">
        Toonsutra UI
      </p>
    </div>
  );
};

export default ProjectCard;