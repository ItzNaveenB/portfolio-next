import React from "react";
import { CgStopwatch } from "react-icons/cg";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="mx-4 md:mx-[9rem] my-10 md:my-[-20rem]">
            <h1 className="text-3xl md:text-5xl font-bold">Dashboard</h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg mb-8 md:mb-16">
                This is my personal dashboard, I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.
            </p>
            <hr />
            <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 mb-12 md:mb-[30rem]">
                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold">
                        <CgStopwatch /> 59hrs
                    </span>
                    <p className="text-center text-xl md:text-2xl">Coding hours</p>

                    {/* Content to show on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            WakaTime<FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold text-[#c0392b]">
                        <FaYoutube /> 2995
                    </span>
                    <p className="text-center text-xl md:text-2xl">YouTube Subscribers</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            YouTube<FaArrowRight />
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-gray-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold text-[#c0392b]">
                        <FaYoutube /> 23000
                    </span>
                    <p className="text-center text-xl md:text-2xl">YouTube Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            YouTube<FaArrowRight />
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-gray-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold">
                        <FaGithub /> 200
                    </span>
                    <p className="text-center text-xl md:text-2xl">GitHub Followers</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            GitHub<FaArrowRight />
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-gray-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold">
                        <LuPencil /> 300
                    </span>
                    <p className="text-center text-xl md:text-2xl font-bold">Blog Total Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            Blog<FaArrowRight />
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-full md:w-[18rem] border border-gray-500 mt-4 md:mt-16 p-4 rounded transition-colors duration-300 hover:bg-gray-100">
                    <span className="flex items-center gap-5 text-3xl md:text-4xl justify-center font-bold">
                        <LuPencil /> 59
                    </span>
                    <p className="text-center text-xl md:text-2xl">Blog Total Likes</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                            Blog<FaArrowRight />
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
