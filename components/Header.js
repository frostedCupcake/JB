import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Header = () => {
  return (
    <div
      className="hidden lg:flex flex-col justify-center fixed top-0 left-0
     items-end  bg-white/70 shadow-2xl h-[90vh] w-[30%] p-[2rem] m-[2rem] rounded-md"
    >
      <img
        src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1682366123/JB/jb-image_xrcuch.jpg"
        alt="cute logo of jaswanth in his imagination"
        className="rounded-sm "
      />
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
      <div className="tracking-wider">
        <p className="text-left leading-7 text-[1.1rem]">
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

export default Header;
