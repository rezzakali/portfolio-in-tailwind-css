import Image from 'next/image';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import data from '../utils/allProjectsData';

const allprojects = () => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  return (
    <div className="md:grid grid-rows-4 grid-flow-col gap-4 text-center my-4">
      {data?.map((dta, id) => (
        <div
          key={id}
          className="flex-auto sm:my-3 rounded border dark:border-slate-800 p-5 w-full"
        >
          <div className="text-start">
            <div>
              <Image
                src={dta.image}
                width={500}
                height={500}
                alt="project_image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl py-3">{dta.title}</h1>
            <p className="text-lg">{truncateString(dta.text, 120)}</p>
            <div className="flex text-start items-center justify-between">
              <div className="mt-3">
                {dta?.technologies.map((tech, id) => (
                  <button
                    key={id}
                    className="rounded border dark:border-slate-800 px-3 py-1 mr-2 mt-2 dark:bg-[#2a3441]"
                  >
                    {tech}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <a href={dta.githubLink} target="_blank" rel="noreferrer">
                  <IoCodeSlashOutline className="text-md dark:text-[#2a8ebd] text-[#6d28d9]" />
                </a>
                <a href={dta.liveLink} target="_blank" rel="noreferrer">
                  <BiLink className="text-md dark:text-[#2a8ebd] text-[#6d28d9] mt-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default allprojects;
