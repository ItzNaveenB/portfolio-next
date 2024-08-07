import React from "react";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";

const Projects = () => {
  return (
    <div className="mx-4 md:mx-[9rem] mt-10 md:mt-[-20rem]">
      <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
      <p className="mt-4 text-gray-500 text-base md:text-lg mb-8 md:mb-16">
        The list of my projects.
      </p>
      <hr />
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12 w-full md:w-[50%] mt-10 md:mt-20">
        <Link
          className="shadow-md rounded-lg shadow-gray-800 w-full"
          href="/xyz"
        >
          <div className="flex flex-col shadow-xl rounded-lg p-4 text-gray-500 text-left">
            <div className="w-full">
              <img
                className="rounded-lg w-full h-auto md:h-[300px] object-cover"
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fprojects%2Fblog%2Fcover.png&w=3840&q=100"
                alt="project_image"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-bold py-2">Blog</h1>
              <p className="pb-4">Share my knowledge and experience</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="py-1 px-2 text-sm bg-slate-200 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300"
              >
                TypeScript
              </button>
              <button
                type="button"
                className="py-1 px-2 text-sm bg-slate-200 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300"
              >
                Turso
              </button>
              <button
                type="button"
                className="py-1 px-2 text-sm bg-slate-200 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300"
              >
                Next.js
              </button>
              <button
                type="button"
                className="py-1 px-2 text-sm bg-slate-200 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300"
              >
                Drizzle
              </button>
              <button
                type="button"
                className="py-1 px-2 text-sm bg-slate-200 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300"
              >
                MDX
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
