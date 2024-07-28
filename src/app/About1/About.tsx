import React from "react";
import Image from 'next/image';
import githubGlobe from './maxresdefault.jpg'
import Link from 'next/link';
import { FaLink } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaServicestack } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";

const About = ()=>{
    return(
        <div className="mx-[6rem]">
           <h1 className="text-center text-3xl font-bold my-5">About me</h1>
           <div className="flex justify-between  gap-2">
             <div className="w-1/2 shadow-lg">
             <span className="flex items-center gap-2 p-4"><MdLocationOn />Berlin, Germany</span>
                <Image className="p-8 rounded-full" src={githubGlobe} alt="User Image" />
             </div>
             <div className="w-1/2 shadow-lg text-gray-500">
             <div className="flex gap-2 items-center text-2xl px-4 my-3 hover:text-black"><FaLink /> 
             <span >Connect</span></div>
             <Link className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black" href='/github'><FaGithub /> <span>Github</span></Link>
             <Link className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black" href='/gitlab'><FaGitlab /> <span>Gitlab</span></Link>
             <Link className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black" href='/twitter'><RiTwitterXLine /> <span>X</span></Link>
             <Link className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black" href='/linkdin'><FaLinkedin /> <span>Linkedin</span></Link>
             <Link className="flex gap-2 items-center text-2xl px-6 my-3 hover:text-black" href='/youtube'><FaYoutube /> <span>Youtube</span></Link>
             </div>
           </div>
           {/* 2nd conatiner */}
           <div className="flex mt-7">
              <div className="w-1/2 h-[8rem]">
              <span className="flex items-center gap-2"><FaServicestack />Stack</span>
              </div>
              <div className="flex gap-6 w-1/2">
                <div className="shadow-lg w-1/2">
                <span className="flex items-center gap-2 px-4"><FiClock />Coding hours</span>
                <p className="text-center text-4xl font-extrabold mt-12">57 hrs</p>
                </div>
                <div className="shadow-lg w-1/2">
                <span className="flex items-center gap-2 px-4"><FaRegHeart />Fav. framework</span>
                  <SiRubyonrails  className="mt-4 text-[6rem] ml-[4.5rem]"/>
                </div>
              </div>
           </div>
           <Link className="flex w-[20%] p-2 rounded-full border border-gray-400 ml-[39%] mt-[3rem] justify-center items-center hover:bg-slate-200" href="/about">Know more about me</Link>
        </div>
    )
}

export default About;