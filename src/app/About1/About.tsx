"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink, FaGithub, FaGitlab, FaYoutube, FaLinkedin, FaRegHeart, FaServicestack } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { SiRubyonrails } from "react-icons/si";
import {ScrollAnimation,ScrollAnimationAlt} from "../scrollanimation/ScrollAnimation";
// import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";


interface ParallaxProps {
  children: string;
  baseVelocity: number;
}



const About = () => {
  return (
    <div className="mx-4 md:mx-[9rem]">
      <h1 className="text-center text-3xl font-bold my-5">About me</h1>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-3">
        <div className="md:w-1/2 shadow-md rounded-lg shadow-gray-800">
          <span className="flex items-center gap-4 p-4">
            <MdLocationOn /> Berlin, Germany
          </span>
          <Image
            className="p-8 rounded-full"
            src="/earth.png"
            alt="User Image"
            // layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="md:w-1/2 shadow-md rounded-lg shadow-gray-800 text-gray-500">
          <div className="flex gap-2 items-center text-2xl px-4 my-3 hover:text-black">
            <FaLink />
            <span>Connect</span>
          </div>
          <Link
            className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black"
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Github</span>
          </Link>
          <Link
            className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black"
            href="/gitlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab /> <span>Gitlab</span>
          </Link>
          <Link
            className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black"
            href="/twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine /> <span>X</span>
          </Link>
          <Link
            className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black"
            href="/linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> <span>Linkedin</span>
          </Link>
          <Link
            className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black"
            href="/youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> <span>Youtube</span>
          </Link>
        </div>
      </div>

      {/* 2nd container */}
      <div className="flex flex-col md:flex-row mt-7 gap-4">
      
        <div className="bg-red-500 h-[17rem] md:w-1/2  shadow-md rounded-lg shadow-gray-800 p-4">
        <ScrollAnimation />
        <ScrollAnimationAlt />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:w-1/2">
          <div className="w-full max-h-[11rem] md:w-1/2 shadow-md rounded-lg shadow-gray-800 p-4">
            <span className="flex items-center gap-2">
              <FiClock /> Coding hours
            </span>
            <p className="text-center text-4xl font-extrabold mt-12">57 hrs</p>
          </div>
          <div className="w-full max-h-[11rem] md:w-1/2 shadow-md rounded-lg shadow-gray-800 p-4">
            <span className="flex items-center gap-4">
              <FaRegHeart /> Fav. framework
            </span>
            <SiRubyonrails className="mt-4 text-[6rem] mx-auto md:ml-[4.5rem]" />
          </div>
        </div>
      </div>
      <Link
        className="flex w-full md:w-[20%] p-2 rounded-full border border-gray-400 mx-auto mt-10 justify-center items-center hover:bg-slate-200"
        href="/about"
      >
        Know more about me
      </Link>
    </div>
  );
};

export default About;
