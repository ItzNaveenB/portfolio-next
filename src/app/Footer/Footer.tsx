'use client';
import React from "react";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="relative mx-4 md:mx-[8rem] ">
      <footer className="py-8 rounded-2xl p-8 shadow-sm shadow-gray-900 relative z-10">
        <div className="container mx-auto flex flex-col w-full md:w-[42%] rounded-xl border border-gray-500 py-4">
          <div className="mb-4 md:mb-0 ">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
              <SiMinutemailer  /> <span className="text-sm">Join Our Newsletter</span>
            </h2>
            <p className="text-gray-400 text-sm leading-8">
            &quot;I thought the blog was good. But the newsletter? Even better!&quot;
            </p>
          </div>
          <div>
            <form className="flex flex-col md:flex-row gap-4 md:items-center">
              <input
                type="email"
                className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-auto flex-1"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="bg-white text-black px-2 py-2 rounded-md w-full md:w-auto"
              >
                Try it
              </button>
            </form>
            <p className="text-white mt-2 md:mt-2 text-[.75rem]">
              Join other 10 subscribers
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-between  text-gray-600 md:ml-[5rem]">
          <div className="flex gap-24 md:gap-[14rem]">
            <div className="flex flex-col leading-8 w-full sm:w-1/2 lg:w-1/3 mb-4">
              <ul>
                <li className="hover:text-white"><Link href="/">Home</Link></li>
                <li className="hover:text-white"><Link href="/blog">Blog</Link></li>
                <li className="hover:text-white"><Link href="/about">About</Link></li>
                <li className="hover:text-white"><Link href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            <div className="flex flex-col leading-8 w-full sm:w-1/2 lg:w-1/3 mb-4">
              <ul>
                <li className="hover:text-white"><Link href="/guestbook">Guestbook</Link></li>
                <li className="hover:text-white"><Link href="/contributions">Contributions</Link></li>
                <li className="hover:text-white"><Link href="/projects">Projects</Link></li>
                <li className="hover:text-white"><Link href="/links">Links</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col leading-8 w-full lg:w-1/3 mb-4">
            <ul>
              <li className="hover:text-white"><Link href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li className="hover:text-white"><Link href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</Link></li>
              <li className="hover:text-white"><Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li className="hover:text-white"><Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-white text-center md:text-left">2024© Shubham Kumar. All Rights Reserved.</p>
      </footer>
      <div className="absolute top-[88%] md:top-[46%] w-full z-0">
        <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fgradient-background-bottom.png&w=3840&q=75" alt="footer_gradient" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
