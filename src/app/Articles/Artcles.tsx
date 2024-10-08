import Link from "next/link";
import React from "react";
import { LuPencil } from "react-icons/lu";

const Articles = () => {
  return (
    <div className="mx-4 xl:mx-[13rem] lg:mx-[10rem] mt-16 md:[1rem]">
      <h1 className="text-3xl font-extrabold text-center mb-8">
        Latest Articles
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Link className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg  w-full md:w-1/2" href="/xyz">
          <div className="flex flex-col p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center"><LuPencil /> Blog</span>
              <img
                className="w-full h-auto"
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fthe-only-git-commands-you%27ll-ever-need%2Fcover.png&w=3840&q=100"
                alt="blog_image"
              />
              <div className="flex justify-between mt-2">
                <span>July 12, 2024</span>
                <span>23 likes · 167 views</span>
              </div>
              <div className="hover:ml-3 mt-2">
                <h1 className="text-xl font-bold">The Git Commands You&apos;ll Ever Need</h1>
                <p>Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg  w-full md:w-1/2" href="/mnp">
          <div className="flex flex-col p-4 text-gray-500">
            <div>
              <span className="flex gap-3 items-center"><LuPencil /> Blog</span>
              <img
                className="w-full h-auto"
                src="https://shubham-kumar.com/_next/image?url=%2Fimages%2Fblog%2Fmy-open-source-journey-at-gitlab%2Fcover.png&w=3840&q=100"
                alt="blog_image"
              />
              <div className="flex justify-between mt-2">
                <span>July 12, 2024</span>
                <span>23 likes · 167 views</span>
              </div>
              <div className="hover:ml-3 mt-2">
                <h1 className="text-xl font-bold">The Git Commands You&apos;ll Ever Need</h1>
                <p>Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Link className="flex w-full md:w-[28%] lg:w-[22%] p-2 rounded-full border border-gray-400 mx-auto mt-10 justify-center items-center hover:bg-slate-200 hover:text-black" href="/articles">See all articles</Link>
    </div>
  );
};

export default Articles;
