import React from 'react';

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center fixed top-0 left-0
     items-center  bg-white shadow-lg h-[90vh] w-[30%] p-[2rem] m-[2rem] rounded-md"
    >
      <div className="">
        <img
          src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1679576718/ecell/NetX/user_1_ykhql4.webp"
          alt="Jaswanth Beere picture"
          className="w-[300px]"
        />
      </div>
    </div>
  );
};

export default Header;
