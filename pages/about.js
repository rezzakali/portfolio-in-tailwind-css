import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icons from '../components/Icons';
import data from '../utils/skillsData';

const about = () => {
  return (
    <>
      <div className="border dark:bg-[#111827] dark:border-slate-800 rounded-md p-5">
        <div className="text-center flex items-center justify-center">
          <div className="py-5 text-center">
            <Image
              src="/myPic.png"
              width={500}
              height={500}
              alt="myPicture"
              className="md:w-52 md:h-52 border rounded-full dark:border-[#31a1d6] hover:scale-105 duration-200 border-[#6d28d9] text-center"
            />
            <h4 className="text-center text-2xl py-2">Developer Rezzak Ali</h4>
          </div>
        </div>
        <div className="text-center py-5 text-lg">
          <p>
            Currently I am training myself aggresively to become a master level
            MERN stack developer. I have completed my graduation in Bachelor of
            Computer Application from{' '}
            <Link
              href="https://gauhati.ac.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#6d28d9] dark:text-[#31a1d6]"
            >
              Gauhati University
            </Link>{' '}
            with 8.03 CGPA in 2022, I have a passion in Software development and
            Programming.
          </p>
        </div>
        <Icons />
      </div>
      <h1 className="text-2xl mt-10">My Skills</h1>
      <div className="py-3">
        {data.map((dta, id) => (
          <div key={id}>
            <h1 className="underline text-lg py-3">{dta.title}</h1>
            {dta.technology.map((tech, id) => (
              <button
                key={id}
                className="px-3 py-1 border border-slate-800 m-2"
              >
                {tech}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default about;
