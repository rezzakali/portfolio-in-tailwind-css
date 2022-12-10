import Link from 'next/link';
import React from 'react';
import { AiOutlineBug, AiOutlineCode } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiConvertio } from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import ServicesCard from '../components/ServicesCard';
import SocialMedia from '../components/SocialMedia';
import careerImage from '../public/assets/career.png';
import domImage from '../public/assets/dom.png';
import fitnessImage from '../public/assets/fitness.png';
import medlabImage from '../public/assets/medlab.png';
import travelImage from '../public/assets/travel.png';
import youtubeImage from '../public/assets/YouTube.png';
import TypicalComponent from '../utils/Typical';

const index = () => {
  return (
    <>
      <section className="py-10 text-center">
        <p>Hey There 👋 I am</p>
        <h1 className="text-3xl text-[#6d28d9] dark:text-[#2a8ebd] font-bold py-4">
          Rezzak Ali
        </h1>
        <TypicalComponent />
        <p className="text-lg">
          Build things for the web and convert the design to code in pixel
          perfection and always love to learn new technology.
        </p>

        <div className="py-7">
          <Link href="mailto:myrezzakalirk@gmail.com">
            <button className="bg-[#2a3441] text-white px-3 py-1 dark:bg-[#2a8ebd] dark:text-white">
              Hire me
            </button>
          </Link>
        </div>
      </section>

      <h1 className="text-2xl py-3">What I will do for you</h1>

      <div className="md:flex gap-4 text-center my-4 ">
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'Frontend Development with React'}
            icon={<BsCodeSlash />}
            text={
              'I am very comfortable working with React. I know react router dom, various react framework like Chakra UI, react-bootstrap,comfortable with firebase auth, context API and redux toolkit query both for state management.'
            }
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'Figma to React'}
            icon={<FiFigma />}
            text={
              'I convert Figma design to React with pixel perfect design using bootstrap/tailwind css. I have good experience in bootstrap and tailwind css.'
            }
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'Backend Development'}
            icon={<AiOutlineCode />}
            text={
              'I also do back-end using Node.js, express.js and MongoDB as database and comfortable with mongoose ODM. I have a knowladge how to make a Rest Api and I use JWT token for security reason for safe APIs.'
            }
          />
        </div>
      </div>

      <div className="md:flex gap-4 text-center my-4">
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'Bug Fixing'}
            icon={<AiOutlineBug />}
            text={
              'Bugs are a common problem for every website. I will fix the problem of your website very easily and in a very short time. I really enjoy fixing any website bugs.'
            }
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'HTML to React.js'}
            icon={<SiConvertio />}
            text={
              'I convert the HTML website to React with pixel perfect design in components based.'
            }
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ServicesCard
            title={'Full Stack Development'}
            icon={<FaLaptopCode />}
            text={
              'I can build a full stack application from scratch. The design markup and backend features is just needed to start up. I am sure to deliver you a secured fluence full stack application. I prefer MERN stack to build a full stack application.'
            }
          />
        </div>
      </div>
      <br />
      <br />
      <div className="md:flex gap-4 text-center my-4">
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={youtubeImage}
            title={'YouTube Clone'}
            text={
              'In this project I try to clone the YouTube video Plateform where I used React with Vite, Tailwind css , Rapid Api and more. and from this project I achieve how to work with APIs and the main reason to do this project to up skills my knowledge in tailwind css and I tried my best.'
            }
            technologies={['React', 'Tailwind CSS', 'Vite', 'Rapid Api']}
            githubLink={`https://github.com/rezzakali/YouTube-Clone`}
            liveLink={`https://youtube-clone-10d.netlify.app`}
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={medlabImage}
            title={'Medilab'}
            text={
              'Medilab is a clean, free, responsive bootstrap template perfect for hospital, doctors, clinic, medical, health and more'
            }
            technologies={['HTML', 'CSS', 'Bootstrap']}
            githubLink={`https://github.com/rezzakali/medilab-project`}
            liveLink={`https://medilab-d.netlify.app/`}
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={travelImage}
            title={'Travel Website'}
            text={
              'This is a beaches website. I do this project to upgrade my Tailwind css skills after doing that I achieve some knowledge like responsive navigation menubar, custom carousel, etc.'
            }
            technologies={['React', 'Tailwind CSS', 'Vite']}
            githubLink={`https://github.com/rezzakali/react-taiwind-travel`}
            liveLink={`https://react-travel-app-22.netlify.app`}
          />
        </div>
      </div>

      <div className="md:flex gap-4 text-center my-4">
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={fitnessImage}
            title={'Fitness Club'}
            text={
              'Fitness is free website template that can be used for any company.'
            }
            githubLink={`https://github.com/rezzakali/react-taiwind-travel`}
            liveLink={`https://fitness-club-fb.netlify.app`}
            technologies={['HTML', 'CSS']}
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={careerImage}
            title={'Explore Interests and Career With Courses'}
            text={
              'Educavo is a Learning Management System. I am making this website design from wordpress educavo theme. Only html and css using for making this website design. This website also reponsive for mobile user.'
            }
            technologies={['HTML', 'CSS', 'Bootstrap']}
            githubLink={`https://github.com/rezzakali/educavo-project`}
            liveLink={`https://educavo-pro.netlify.app`}
          />
        </div>
        <div className="flex-auto sm:my-3 md:w-1/3 rounded border dark:border-slate-800 p-5">
          <ProjectCard
            image={domImage}
            title={'DOM Manipulation'}
            text={
              'In this project I try to play with dom where I used a third party Api called programming hero open api '
            }
            githubLink={`https://github.com/rezzakali/dom-manipulation-project`}
            liveLink={`https://dom-manipulate-project.netlify.app`}
            technologies={['HTML', 'CSS', 'JavaScript']}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/projects"
          className="px-3 py-1 my-2 text-center text-white bg-[#2a3441] dark:bg-[#33a9df] dark:text-white"
        >
          All Projects
        </Link>
      </div>
      <br />
      <br />
      <h1 className="text-2xl py-3">Get in touch</h1>
      <div className="text-center">
        <h2 className="text-xl">I'd love to hear from you</h2>
        <p className="text-lg py-2">
          I always keep some time along with my works to broad and give strength
          to my developer community. Feel free to give any feedback, advice,
          allegation or anything else...
        </p>
        <div className="flex items-center justify-center py-2">
          <Link
            href="mailto:myrezzakalirk@gmail.com"
            className="px-3 py-1 my-2 text-center text-white bg-[#2a3441] dark:bg-[#33a9df] dark:text-white"
          >
            Say Hello
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <SocialMedia />
    </>
  );
};

export default index;
