import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const HeaderMobile = () => {
  return (
    <div className="bg-white/70 md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem] p-[2rem] w-[90%] lg:w-[60%] text-black h-fit flex flex-col items-end ">
      <img
        src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1682366123/JB/jb-image_xrcuch.jpg"
        alt="cute logo of jaswanth in his imagination"
        className="rounded-sm w-[20rem] md:w-[35rem]"
      />
      <div className="mt-5 leading-7 text-[1.3rem] md:text-[1.5rem]">
        I am Jaswanth Beere
      </div>
      <div className="flex flex-row gap-5 my-[2rem] pr-[2rem]">
        <Link href={'https://github.com/frostedCupcake'} target="_blank">
          <BsGithub className="text-[2.5rem]" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/jaswanth-beere-382239224/'}
          target="_blank"
        >
          <BsLinkedin className="text-[2.5rem]" />
        </Link>
      </div>
      <div className="tracking-wider text-justify">
        <p className="text-left leading-6 text-[1.1rem] md:text-[1.4rem] md:leading-7">
          Initiating the first step is akin to unlocking the gateway to
          accomplishment, even in the face of seemingly insurmountable
          obstacles.
        </p>

        <div className="flex flex-row justify-between my-5">
          <p>© Jaswanth</p>
          <p>--To Jaswanth</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
