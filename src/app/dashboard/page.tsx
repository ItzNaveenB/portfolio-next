import React from "react";
import { CgStopwatch } from "react-icons/cg";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="my-10 md:mt-[-8rem] xl:mt-[-20rem] lg:mt-[-12rem] -z-10">
            <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem]">
            <h1 className="text-3xl md:text-5xl font-bold">Dashboard</h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg mb-8">
                This is my personal dashboard, I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.
            </p>
        </div>
       <hr />
        <div className="mx-4 xl:mx-[9rem] lg:mx-[2rem]">
            <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 mb-12 md:mb-[30rem] ">
                <div className="relative w-full md:w-[18rem] border border-zinc-300 shadow-feature-card dark:shadow-feature-card-dark mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold coding-text codingText">
                        <CgStopwatch /> 59hrs
                    </span>
                    <p className="text-center text-xl md:text-2xl">Coding hours</p>

                    {/* Content to show on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            WakaTime<FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className="relative w-full md:w-[18rem] border border-zinc-300 shadow-feature-card dark:shadow-feature-card-dark mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold gradient-text youtubeSvg">
                        <FaYoutube /> 2995
                    </span>
                    <p className="text-center text-xl md:text-2xl">YouTube Subscribers</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            YouTube<FaArrowRight />
                        </a>
                        
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-zinc-300 shadow-feature-card dark:shadow-feature-card-dark mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold gradient-text youtubeSvg">
                        <FaYoutube /> 23000
                    </span>
                    <p className="text-center text-xl md:text-2xl">YouTube Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            YouTube<FaArrowRight />
                        </a>
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] p-4 border border-zinc-300 shadow-feature-card dark:shadow-feature-card-dark   rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold text-gradient">
                        <FaGithub /> 200
                    </span>
                    <p className="text-center  text-xl md:text-2xl">GitHub Followers</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            GitHub<FaArrowRight />
                        </a>
                        
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-zinc-300 shadow-feature-card dark:shadow-feature-card-dark p-4 rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold text-gradient1 blogSvg">
                        <LuPencil className="text-gradient1"/> 300
                    </span>
                    <p className="text-center text-xl md:text-2xl font-bold">Blog Total Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            Blog<FaArrowRight />
                        </a>
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-zinc-300 p-4 rounded transition-colors duration-300 hover:bg-zinc-500">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold blogSvg text-gradient1">
                        <LuPencil /> 59
                    </span>
                    <p className="text-center text-xl md:text-2xl">Blog Total Likes</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold  flex items-center gap-2">
                            Blog<FaArrowRight />
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;
