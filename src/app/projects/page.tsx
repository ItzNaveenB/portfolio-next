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
                <Link className="shadow-md rounded-lg shadow-gray-800 w-full" href="/xyz">
                    <div className="flex flex-col md:flex-col shadow-xl rounded-lg p-4 text-gray-500">
                        <div className="w-full">
                            <img className="rounded-lg w-full h-auto hover:scale-105" src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fprojects%2Fblog%2Fcover.png&w=3840&q=100" alt="project_image" />
                        </div>
                        <div className="w-full md:pl-4 mt-4 md:mt-0">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold py-2 text-white">Blog</h1>
                                <p className="pb-4 font-semibold">Share my knowledge and experience</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button type="button" className="py-1 px-2 text-white border border-zinc-800 rounded-full text-[.71rem] bg-zinc-900">TypeScript</button>
                                <button type="button" className="py-1 px-2 text-white border border-zinc-800 rounded-full text-[.71rem] bg-zinc-900">Turso</button>
                                <button type="button" className="py-1 px-2 text-white border border-zinc-800 rounded-full text-[.71rem] bg-zinc-900">Next.js</button>
                                <button type="button" className="py-1 px-2 text-white border border-zinc-800 rounded-full text-[.71rem] bg-zinc-900">Drizzle</button>
                                <button type="button" className="py-1 px-2 text-white border border-zinc-800 rounded-full text-[.71rem] bg-zinc-900">MDX</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;
