import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white/70 h-fit md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem]  py-[2rem] px-[1rem] md:p-[2rem] w-[90%] lg:w-[60%] text-black  mb-[3rem]">
      <div className="">
        <h1 className="min-[300px]:text-[3.5rem] text-[4rem] md:text-[4.5rem] lg:text-[4.5rem]  xl:text-[5rem] 2xl:text-[5.5rem] my-2 lg:my-5 text-center md:text-left">
          My Works.
        </h1>
        <div className="min-[300px]:text-[1rem] text-[1.1rem] md:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.25rem] text-justify flex flex-col gap-4 leading-7 lg:leading-8 xl:leading-10">
          <p>
            Worked on IITH Cabsharing portal & r/IITH along my team, built using{' '}
            <span className="underline">Next js</span>,{' '}
            <span className="underline">tailwind CSS</span> and{' '}
            <span className="underline">daisy UI</span> in Frontend &{' '}
            <span className="underline">python</span>,{' '}
            <span className="underline">Fast API</span> and{' '}
            <span className="underline">Postgresql</span> Database in backend.
          </p>
          <p>
            Interned in My Collectibles - The NFT marketplace that offers
            effortless buying, selling, and trading of NFTs with multiple
            convenient payment methods, built using{' '}
            <span className="underline">Next js</span> and{' '}
            <span className="underline">Tailwind CSS</span> in Frontend &{' '}
            <span className="underline">Wagmi</span> - React Hooks for Ethereum,{' '}
            <span className="underline">Node js</span>,{' '}
            <span className="underline">REST API</span> and{' '}
            <span className="underline">Mongo DB</span> database in backend.
          </p>
          <p>
            <span className="underline">Freelanced</span> in building Websites
            for Toonsutra, MURL - Medical Ultrasound Research Laboratory and
            NETX - Networked Systems and Security, learnt great design skills in{' '}
            <span className="underline">figma</span> and{' '}
            <span className="underline">manangement of time</span>.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
