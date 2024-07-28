import React from "react";
import Link from "next/link";
import { LuPencil } from "react-icons/lu";

const Projects = () => {
    return (
        <div className="mx-[7rem] my-[8rem]">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="mt-4 text-gray-500 text-base mb-8">TThe list of my projects.</p>
            <hr></hr>
            <div className="flex gap-4 mb-[5rem] w-[50%] mt-20">
                <Link href="/xyz">
                    <div className="flex  shadow-xl rounded-lg p-4 text-gray-500">
                        <div>

                            <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fprojects%2Fblog%2Fcover.png&w=3840&q=100" alt="blog_image" />

                            <div className="hover:ml-3">
                                <h1 className="text-xl font-bold">Blog</h1>
                                <p>Save my Knowledge and experience</p>
                            </div>
                            <div className="flex gap-6 ">
                            <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">TypeScript</button>
                            <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">Turso</button>
                            <button type="button" className="py-1 px-2 bg-slate-200 rounded-full hover:bg-gray-600">Next.Js</button>
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