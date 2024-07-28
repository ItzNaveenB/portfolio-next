'use client';
import React from "react";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";



const Footer = () => {

  return (
    <footer className="mx-[6rem] py-8">
      <div className="container mx-auto flex flex-col w-[39%]  rounded border border-gray-500 py-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-gray-800 font-bold text-xl mb-2 flex items-center gap-2">
           <SiMinutemailer /> Join Our Newsletter
          </h2>
          <p className="text-gray-600">
          &quot;I thought the blog was good. But the newsletter? Even better!&quot;
          </p>
        </div>
        <div>
          <form className="flex gap-4">
            <input
              type="email"
              className="border border-gray-400 px-3 py-2 rounded-md"
              placeholder="Your Email"
              
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              Try it
            </button>
          </form>
          <p className="text-gray-600">
            Join other 10 subscribers
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex  justify-between items-center text-gray-600">
        <ul className="flex flex-col leading-8">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col leading-8">
          <li>
            <Link href="/guestbook">
              Guestbook
            </Link>
          </li>
          <li>
            <Link href="/contributions">
              Contributions
            </Link>
          </li>
          <li>
            <Link href="/projects">
             Projects
            </Link>
          </li>
          <li>
            <Link href="/links">
              Links
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col leading-8">
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
              GitLab
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>
     <p className="mt-12 text-gray-500">2024© Shubham Kumar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
