import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white/70 h-fit md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem]  py-[2rem] px-[1rem] md:p-[2rem] w-[90%] lg:w-[60%] text-black  mb-[3rem]">
      <div className="">
        <h1 className="min-[300px]:text-[3rem] text-[4rem] md:text-[4.5rem] lg:text-[4.5rem]  xl:text-[5rem] my-2 lg:my-5 text-center md:text-left">
          My Skills.
        </h1>
        <div className="min-[300px]:text-[1rem] text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] ">
          <p>
            Worked on IITH Cabsharing portal & R/IITH along my team which has a
            simple yet amazing user interface and experience built using{' '}
            <span className="underline">Next js</span>,{' '}
            <span className="underline">tailwind CSS</span> and{' '}
            <span className="underline">daisy UI</span> Frontend with{' '}
            <span className="underline">python</span>,{' '}
            <span className="underline">Fast API</span>,{' '}
            <span className="underline">Postgresql</span> Database backend.
          </p>
          <p>Interned in My Collectibles</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
