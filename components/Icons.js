import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex text-center items-center justify-center gap-4">
      <div className="border p-1 rounded bg-[#2a3441] hover:bg-white dark:bg-[#33a9df] dark:text-white animate-bounce">
        <Link
          href="https://github.com/rezzakali"
          target="_blank"
          rel="noreferrer"
          className="w-full h-full"
        >
          <AiFillGithub size={26} />
        </Link>
      </div>
      <div className="border p-1 rounded bg-[#2a3441] hover:bg-white dark:bg-[#33a9df] dark:text-white animate-bounce">
        <Link
          href="https://www.linkedin.com/in/rezzak-ali-18149a1ab/"
          target="_blank"
          rel="noreferrer"
          className="w-full h-full"
        >
          <AiFillLinkedin size={26} />
        </Link>
      </div>
      <div className="border p-1 rounded bg-[#2a3441] hover:bg-white dark:bg-[#33a9df] dark:text-white animate-bounce">
        <Link
          href="https://www.facebook.com/rezzakali22"
          target="_blank"
          rel="noreferrer"
          className="w-full h-full"
        >
          <AiFillFacebook size={26} />
        </Link>
      </div>
      <div className="border p-1 rounded bg-[#2a3441] hover:bg-white dark:bg-[#33a9df] dark:text-white animate-bounce">
        <Link
          href="https://dev.to/rezzakali"
          target="_blank"
          rel="noreferrer"
          className="w-full h-full"
        >
          <FaDev size={26} />
        </Link>
      </div>
    </div>
  );
};

export default Icons;
