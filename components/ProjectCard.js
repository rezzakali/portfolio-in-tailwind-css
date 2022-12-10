import Image from 'next/image';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { IoCodeSlashOutline } from 'react-icons/io5';

const ProjectCard = ({
  image,
  title,
  text,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="text-start">
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt="project_image"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl py-3">{title}</h1>
      <p className="text-lg">{text}</p>
      <div className="flex text-start items-center justify-between">
        <div className="mt-3">
          {technologies.map((tech, id) => (
            <button
              key={id}
              className="rounded border dark:border-slate-800 px-3 py-1 mr-2 mt-2 dark:bg-[#2a3441]"
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <IoCodeSlashOutline className="text-md dark:text-[#2a8ebd] text-[#6d28d9]" />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <BiLink className="text-md dark:text-[#2a8ebd] text-[#6d28d9] mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
