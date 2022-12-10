import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSun } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMoon } from 'react-icons/hi';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full absolute">
      <div className="bg-[#f0f5f9] dark:bg-[#0d1323] opacity-95 px-4 h-[80px] flex items-center justify-between fixed top-0 left-0 right-0">
        <Link href="/">
          <h1 className="text-xl sm:text-5xl text-[#6d28d9] cursor-pointer dark:text-[#33a9df]">
            Rezzak A.
          </h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li
              className={
                router.pathname == '/' ? 'bg-[#1f2937] text-white' : ''
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname == '/about' ? 'bg-[#1f2937] text-white' : ''
              }
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={
                router.pathname == '/projects' ? 'bg-[#1f2937] text-white' : ''
              }
            >
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-4 w-8 h-8 flex items-center justify-center rounded">
            <div className="flex">
              {theme === 'light' ? (
                <HiMoon
                  className="cursor-pointer"
                  onClick={() => setTheme('dark')}
                />
              ) : (
                <BiSun
                  className="cursor-pointer text-yellow-400"
                  onClick={() => setTheme('light')}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="md:hidden" onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <AiOutlineClose className="text-black dark:text-[#33a9df] cursor-pointer" />
              ) : (
                <GiHamburgerMenu className="text-black dark:text-[#33a9df] cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showNav
            ? 'bg-[#f0f5f9] dark:bg-[#0d1323] opacity-95 px-4 fixed'
            : 'absolute left-[-100%]'
        }
      >
        <ul className="block mb-4">
          <li
            className={router.pathname == '/' ? 'bg-[#1f2937] text-white' : ''}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              router.pathname == '/about' ? 'bg-[#1f2937] text-white' : ''
            }
          >
            <Link href="/about">About</Link>
          </li>

          <li
            className={
              router.pathname == '/projects' ? 'bg-[#1f2937] text-white' : ''
            }
          >
            <Link href="/projects">Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
