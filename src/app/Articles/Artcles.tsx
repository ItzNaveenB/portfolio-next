import Link from "next/link";
import React from "react";
import { LuPencil } from "react-icons/lu";

const Artcles = () => {
    return (
        <div className="mx-[6rem] mt-16">
            <h1 className="text-3xl font-extrabold text-center mb-8">
                Latest Articles
            </h1>
            <div className="flex gap-4">
            <Link href="/xyz">
                <div className="flex  shadow-xl rounded-lg p-4 text-gray-500">
                    <div>
                        <span className="flex gap-3 items-center"><LuPencil /> Blog</span>

                        <img src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fthe-only-git-commands-you%27ll-ever-need%2Fcover.png&w=3840&q=100" alt="blog_image" />

                        <div className="flex justify-between ">
                            <span>July 12, 2024</span>
                            <span>23 likes · 167 views</span>

                        </div>
                        <div className="hover:ml-3">
                            <h1 className="text-xl font-bold">The Git Commands You'll Ever Need</h1>
                            <p>Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/mnp">
            <div className="flex  shadow-xl rounded-lg p-4 text-gray-500">
                    <div>
                        <span className="flex gap-3 items-center"><LuPencil /> Blog</span>

                        <img className="w-[2012px]" src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fmy-open-source-journey-at-gitlab%2Fcover.png&w=3840&q=100" alt="blog_image" />

                        <div className="flex justify-between ">
                            <span>July 12, 2024</span>
                            <span>23 likes · 167 views</span>

                        </div>
                        <div className="hover:ml-3">
                            <h1 className="text-xl font-bold">The Git Commands You'll Ever Need</h1>
                            <p>Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        <Link className="flex w-[20%] p-2 rounded-full border border-gray-400 ml-[39%] mt-[5rem] justify-center items-center hover:bg-slate-200" href="/articles">See all articles</Link>
       </div>

    )
}
export default Artcles;