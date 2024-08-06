import React from "react";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";

const Projects = () => {
    return (
        <div className="mx-4 md:mx-[9rem] mt-10 md:mt-[-20rem]">
            <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg mb-8 md:mb-16">The list of my projects.</p>
            <hr />
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12 w-full md:w-[50%] mt-10 md:mt-20">
                <Link className="shadow-md rounded-lg shadow-gray-800 w-full md:w-1/2" href="/xyz">
                    <div className="flex flex-col md:flex-row shadow-xl rounded-lg p-4 text-gray-500">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg w-full h-auto" src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fprojects%2Fblog%2Fcover.png&w=3840&q=100" alt="project_image" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <div className="hover:ml-3">
                                <h1 className="text-xl md:text-2xl font-bold py-2">Blog</h1>
                                <p className="pb-4">Share my knowledge and experience</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">TypeScript</button>
                                <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">Turso</button>
                                <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">Next.js</button>
                                <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">Drizzle</button>
                                <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">MDX</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;
