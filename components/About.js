import React from 'react';

const About = () => {
  return (
    <div className="bg-white/70 h-[90vh] rounded-md shadow-2xl m-[2rem] p-[2rem] w-[60%]">
      <div className="">
        <h1 className="text-[5rem] my-5">About Me.</h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-center gap-5 leading-10">
          <p className="text-[1.5rem]">
            Jaswanth was born in India. He’s currently a sophomore student
            studying Biomedical Engineering at the Indian Institute of
            Technology Hyderabad.
          </p>
          <p className="text-[1.5rem]">
            Jaswanth enjoys exploring his creative side by indulging in
            gardening, freelancing, software development & design. He also loves
            to read books and expand his knowledge, seeking inspiration from a
            wide range of sources. Some of his favorite books include- Rework:
            Change the Way You Work Forever, Gene Machine: The Race to Decipher
            the Secrets of the Ribosome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
