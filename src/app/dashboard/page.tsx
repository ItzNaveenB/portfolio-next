import React from "react";
import { CgStopwatch } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="mx-[7rem] my-[8rem]">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="mt-4 text-gray-500 text-base mb-8">This is my personal dashboard, I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.</p>
            <hr></hr>
            <div className="flex flex-row flex-wrap gap-10 ml-4">
                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <CgStopwatch /> 59hrs
                    </span>
                    <p className="text-center text-2xl">Coding hours</p>

                    {/* Content to show on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                            WakaTime
                        </a>
                    </div>
                </div>
                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <FaYoutube /> 2995
                    </span>
                    <p className="text-center text-2xl">Youtube Subscriber</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                            YouTube 
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <FaYoutube /> 23000
                    </span>
                    <p className="text-center text-2xl">YouTube Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                            YouTube 
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <FaGithub /> 200
                    </span>
                    <p className="text-center text-2xl">Github Followers</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                        GitHub 
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <LuPencil /> 300
                    </span>
                    <p className="text-center text-2xl">Blog Total Views</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                        Blog 
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

                <div className="relative w-[18rem] border border-gray-500 mt-16 p-4 rounded transition-colors duration-300 hover:bg-pink-100">
                    <span className="flex items-center gap-5 text-4xl justify-center font-bold">
                        <LuPencil /> 59
                    </span>
                    <p className="text-center text-2xl">Blog Total Likes</p>
                    <div className="absolute inset-0 flex items-center justify-center bg-pink-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-lg text-pink-500">
                            Blog 
                        </a>
                        <IoArrowForwardOutline />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;