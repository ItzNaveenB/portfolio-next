'use client';
import React from "react";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="relative mx-4 xl:mx-[13rem] lg:mx-[10rem] md:[1rem]">
      <footer className="py-8 rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px] relative z-1">
        <div className="container mx-auto flex flex-col w-full md:w-[56%] lg:w-[58%] xl:w-[48%] rounded-xl shadow-feature-card dark:shadow-feature-card-dark py-4">
          <div className="mb-4 md:mb-0 ">
            <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
              <SiMinutemailer  /> <span className="text-sm">Join Our Newsletter</span>
            </h2>
            <p className="text-sm leading-8">
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
                className="bg-theme px-2 py-2 rounded-md w-full"
              >
                Try it
              </button>
            </form>
            <p className="mt-2 md:mt-2 text-[.75rem]">
              Join other 10 subscribers
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-between md:ml-[5rem]">
          <div className="flex gap-24 xl:gap-[14rem]">
            <div className="flex flex-col leading-8 w-full sm:w-1/2 md:w-1/3 mb-4">
              <ul>
                <li className="hover:text-gray-400"><Link href="/">Home</Link></li>
                <li className="hover:text-gray-400"><Link href="/blog">Blog</Link></li>
                <li className="hover:text-gray-400"><Link href="/about">About</Link></li>
                <li className="hover:text-gray-400"><Link href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            <div className="flex flex-col leading-8 w-full sm:w-1/2 md:w-1/3 mb-4">
              <ul>
                <li className="hover:text-gray-400"><Link href="/guestbook">Guestbook</Link></li>
                <li className="hover:text-gray-400"><Link href="/contributions">Contributions</Link></li>
                <li className="hover:text-gray-400"><Link href="/projects">Projects</Link></li>
                <li className="hover:text-gray-400"><Link href="/links">Links</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col leading-8 w-full md:w-1/3 mb-4">
            <ul>
              <li className="hover:text-gray-400"><Link href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li className="hover:text-gray-400"><Link href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</Link></li>
              <li className="hover:text-gray-400"><Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li className="hover:text-gray-400"><Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center md:text-left">2024© Shubham Kumar. All Rights Reserved.</p>
      </footer>
      <div className="absolute top-[84%] md:top-[62%] xl:top-[47%] lg:top-[57%] w-full -z-10 overflow-hidden">
        <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fgradient-background-bottom.png&w=3840&q=75" alt="footer_gradient" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
